import './GradientWrapper.scss'

type GradientWrapperProps = {
  children: React.ReactNode
}

const GradientWrapper = ({ children }: GradientWrapperProps) => {
  return <div className="gradient-wrapper">{children}</div>
}

export default GradientWrapper
