export function Dark({ className }: { className?: string }) {
    return (
        <svg baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" overflow="visible" className={` ${className}`} style={{ verticalAlign: "middle" }}>
            <g>
                <path fill="currentColor" d="M9 0C3.8 1.4 0 6.1 0 11.9 0 18.6 5.4 24 12.1 24c5.7 0 10.4-3.8 11.9-9C14.9 17.6 6.4 9.1 9 0z">
                </path>
            </g>
        </svg>
    )
};