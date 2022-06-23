import './CollapseButton.scss'
import classNames from 'classnames'

type CollapseButtonProps = {
  className?: string
  height?: string
  stroke?: string
  isCollapsed: boolean
  onClick: () => void
}

const CollapseButton = ({
  className,
  height = '50px',
  stroke = '#b9b9b9',
  isCollapsed,
  onClick,
}: CollapseButtonProps) => {
  return (
    <div className={classNames('collapse-button', className)} onClick={onClick}>
      {!isCollapsed ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={height}
          viewBox="0 0 55.892 55.892"
        >
          <path
            d="M-2566.756,6369.127l18.122,23.958-18.122,23.957"
            transform="translate(6357.458 -2683.729) rotate(45)"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={height}
          viewBox="0 0 77.364 77.364"
        >
          <path
            d="M-2566.756,6369.127l26.455,34.975-26.455,34.975"
            transform="translate(-6295.674 2761.094) rotate(-135)"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
        </svg>
      )}
    </div>
  )
}

export default CollapseButton
