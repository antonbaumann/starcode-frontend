type ChatbotIconProps = {
    stroke?: string
    height?: string
}

const ChatbotIcon = ({stroke, height}: ChatbotIconProps) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height={height} 
            viewBox="0 0 38.202 39.395"
        >
            <defs>
                <clipPath id="chatbot-path">
                <path 
                    id="Path_438" 
                    data-name="Path 438" 
                    d="M8.8,21.915V20.266a1.336,1.336,0,0,1,1.336-1.336H28.068A1.335,1.335,0,0,1,29.4,20.266v1.649a1.336,1.336,0,0,1-1.336,1.336H10.133A1.336,1.336,0,0,1,8.8,21.915M24.288,11.568V8.414a1.335,1.335,0,0,1,1.336-1.336h2.443A1.335,1.335,0,0,1,29.4,8.414v3.154A1.336,1.336,0,0,1,28.068,12.9H25.624a1.336,1.336,0,0,1-1.336-1.336m-15.491,0V8.1a1.336,1.336,0,0,1,1.336-1.336h2.445A1.336,1.336,0,0,1,13.914,8.1v3.467A1.336,1.336,0,0,1,12.578,12.9H10.133A1.336,1.336,0,0,1,8.8,11.568M6.228,0A6.228,6.228,0,0,0,0,6.228V23.788a6.229,6.229,0,0,0,6.228,6.228H8.754V39.4l7.345-9.38H31.974A6.229,6.229,0,0,0,38.2,23.788V6.228A6.228,6.228,0,0,0,31.974,0Z" 
                    fill={stroke}
                />
                </clipPath>
            </defs>
            <g 
                transform="translate(0 0)" 
                clipPath="url(#chatbot-path)"
            >
                <rect 
                id="Rectangle_122" 
                data-name="Rectangle 122" 
                width="38.202"
                height="39.395" 
                transform="translate(0 0)" 
                fill={stroke}
                />
            </g>
        </svg>
    )
}

export default ChatbotIcon