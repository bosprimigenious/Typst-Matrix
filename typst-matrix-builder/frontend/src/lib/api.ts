const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

export async function compileResume(payload: unknown): Promise<Blob> {
  const res = await fetch(`${API_BASE}/api/compile`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error((err as { error?: string }).error ?? 'Compilation failed')
  }
  return res.blob()
}
