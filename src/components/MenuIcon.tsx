import './MenuIcon.scss'
import classNames from 'classnames'

type MenuIconProps = {
  open: boolean
  height?: string
  onClick?: () => void
}

const MenuIcon = ({ open, height, onClick }: MenuIconProps) => {
  return (
    <div className={classNames('menu-icon', open)} onClick={onClick}>
      {open ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.45 24.414"
          height={height}
        >
          <g
            id="Group_385"
            data-name="Group 385"
            transform="translate(-20.757 -20.793)"
          >
            <g id="Group_384" data-name="Group 384">
              <line
                id="Line_223"
                data-name="Line 223"
                x2="23"
                y2="23"
                transform="translate(21.5 21.5)"
                fill="none"
                stroke="#f8f8f8"
                strokeWidth="2"
              />
              <line
                id="Line_224"
                data-name="Line 224"
                x1="23"
                y2="23"
                transform="translate(21.464 21.5)"
                fill="none"
                stroke="#f8f8f8"
                strokeWidth="2"
              />
            </g>
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.964 24.157"
          height={height}
        >
          <g
            id="Group_314"
            data-name="Group 314"
            transform="translate(-12.5 -16.5)"
          >
            <line
              id="Line_137"
              data-name="Line 137"
              x2="26.964"
              transform="translate(12.5 17.5)"
              fill="none"
              stroke="#f2f2f1"
              strokeWidth="2"
            />
            <line
              id="Line_138"
              data-name="Line 138"
              x2="26.964"
              transform="translate(12.5 28.579)"
              fill="none"
              stroke="#f2f2f1"
              strokeWidth="2"
            />
            <line
              id="Line_139"
              data-name="Line 139"
              x2="26.964"
              transform="translate(12.5 39.657)"
              fill="none"
              stroke="#f2f2f1"
              strokeWidth="2"
            />
          </g>
        </svg>
      )}
    </div>
  )
}

export default MenuIcon
