import React from 'react'

const HeadingTitle = ({children, className}) => {
    return (
        <h1 className={`${className} text-2xl sm:text-5xl font-semibold text-[#282828] mb-3`}>
            {children}
        </h1>
    )
}

export default HeadingTitle
