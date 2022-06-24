import classNames from 'classnames'

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
      className={classNames(className, 'external-link')}
    >
      {children}
    </a>
  )
}

export default ExternalLink
