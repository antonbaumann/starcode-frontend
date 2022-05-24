type InstagramIconProps = {
    stroke?: string
    height?: string
}

const InstagramIcon = ({stroke, height}: InstagramIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.861 82.861" height={height}>
            <g id="Group_320" transform="translate(1.5 1.5)">
                <g id="LINE">
                    <path id="Path_775" 
                        data-name="Path 775" 
                        d="M248.846,175.875A18.658,18.658,0,0,1,267.5,194.532v42.547a18.655,18.655,0,0,1-18.657,18.657H206.3a18.658,18.658,0,0,1-18.661-18.657V194.532A18.661,18.661,0,0,1,206.3,175.875h42.543" 
                        transform="translate(-187.642 -175.875)" 
                        fill="none" 
                        stroke={stroke}
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="3"
                    />
                </g>
                <g id="CIRCLE" transform="translate(21.837 21.836)">
                    <circle 
                        id="Ellipse_45" 
                        cx="18.095" 
                        cy="18.095" 
                        r="18.095" 
                        fill="none" 
                        stroke={stroke}
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="3"
                    />
                </g>
                <g id="CIRCLE-2" transform="translate(59.896 13.178)">
                    <circle 
                        id="Ellipse_46" 
                        cx="3.394" 
                        cy="3.394" 
                        r="3.394" 
                        fill="none" 
                        stroke={stroke} 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="3"
                    />
                </g>
            </g>
        </svg>
    )
}

export default InstagramIcon
