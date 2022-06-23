type ExternalLinkProps = {
  to: string
  target?: string
  className?: string
  children?: JSX.Element
}

const ExternalLink = ({
  to,
  target,
  className,
  children,
}: ExternalLinkProps) => {
  return (
    <a
      href={to}
      target={target}
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}

export default ExternalLink
