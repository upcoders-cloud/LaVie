import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-semibold text-text">404</h1>
      <p className="text-muted">Nie znaleziono strony.</p>
      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-semibold text-text hover:bg-primary-50 hover:text-primary-700"
      >
        Wróć na start
      </Link>
    </div>
  )
}
