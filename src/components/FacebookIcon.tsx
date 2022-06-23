type FacebookIconProps = {
  stroke?: string
  height?: string
}

const FacebookIcon = ({ stroke, height }: FacebookIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 82.861 82.861"
      height={height}
    >
      <g id="ARC" transform="translate(1.5 1.5)">
        <path
          id="Path_776"
          data-name="Path 776"
          d="M161.667,255.736a7.465,7.465,0,0,1-7.463-7.463V183.338a7.465,7.465,0,0,1,7.463-7.463H226.6a7.462,7.462,0,0,1,7.463,7.463v64.935a7.462,7.462,0,0,1-7.463,7.463H206.443V228.427h13.552v-13.86H206.443V203.455h13.552V189.6H206.443a13.856,13.856,0,0,0-13.856,13.856v11.112h-11.12v13.86h11.12v27.309H161.667"
          transform="translate(-154.204 -175.875)"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  )
}

export default FacebookIcon
