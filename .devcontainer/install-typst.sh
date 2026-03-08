#!/bin/bash
set -e
# Typst: GitHub release (musl static build)
TYPST_VERSION="${TYPST_VERSION:-v0.11.0}"
curl -sL "https://github.com/typst/typst/releases/download/${TYPST_VERSION}/typst-x86_64-unknown-linux-musl.tar.xz" | tar -xJ -C /tmp
mv /tmp/typst-x86_64-unknown-linux-musl/typst /usr/local/bin/
chmod +x /usr/local/bin/typst
# just
curl --proto '=https' --tlsv1.2 -sSf https://just.systems/install.sh | bash -s -- --to /usr/local/bin
