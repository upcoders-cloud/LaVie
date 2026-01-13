const base =
  'inline-flex items-center justify-center font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'

const sizes = {
  sm: 'h-9 px-3 text-sm rounded-lg',
  md: 'h-11 px-5 text-sm rounded-xl',
  lg: 'h-12 px-6 text-base rounded-xl',
}

const variants = {
  primary:
    'bg-primary-600 text-white shadow-[0_12px_30px_-15px_rgba(2,132,199,0.8)] hover:-translate-y-0.5 hover:bg-primary-500 focus-visible:outline-primary-500',
  ghost:
    'border border-white/25 text-white hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/5 focus-visible:outline-white/70',
  subtle:
    'bg-white/10 text-white hover:bg-white/15 hover:-translate-y-0.5 focus-visible:outline-white/70',
}

export default function Button({
  as,
  size = 'md',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const Component = as || 'button'
  return (
    <Component
      className={[base, sizes[size], variants[variant], className].join(' ')}
      {...props}
    >
      {children}
    </Component>
  )
}
