# Stage 1: Build Frontend (React)
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
ENV VITE_API_URL=
COPY typst-matrix-builder/frontend/package*.json ./
RUN npm ci
COPY typst-matrix-builder/frontend/ ./
RUN npm run build

# Stage 2: Build Backend (Node.js/Express)
FROM node:20-alpine AS backend-builder
WORKDIR /app/backend
COPY typst-matrix-builder/backend/package*.json ./
RUN npm ci
COPY typst-matrix-builder/backend/ ./
RUN npm run build

# Stage 3: Production (Node + Typst CLI + static)
FROM node:20-alpine AS production
RUN apk add --no-cache wget tar xz \
    && wget -qO- https://github.com/typst/typst/releases/download/v0.11.0/typst-x86_64-unknown-linux-musl.tar.xz | tar -xJ \
    && mv typst-x86_64-unknown-linux-musl/typst /usr/local/bin/ \
    && rm -rf typst-x86_64-unknown-linux-musl

WORKDIR /app

COPY --from=backend-builder /app/backend/dist ./backend/dist
COPY --from=backend-builder /app/backend/package*.json ./backend/
RUN cd backend && npm ci --omit=dev

COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

COPY 00_core_engine ./00_core_engine
COPY 03_resume ./03_resume

EXPOSE 3001

CMD ["node", "backend/dist/server.js"]
