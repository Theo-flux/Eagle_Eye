export const H1 = ({content, children, className}) => {
    return(
        <h1 className={`mb-6 font-heading font-semibold text-4xl md:text-5xl lg:text-7xl ${className}`}>
            {content} {children}
        </h1>
    )
}

export const H3 = ({content, children, className}) => {
    return(
        <h1 className={`mb-4 font-heading font-semibold text-2xl md:text-3xl lg:text-4xl ${className}`}>
            {content} {children}
        </h1>
    )
}

export const Text = ({content, className}) => {
    return(
        <p className={`mb-1 text-sm md:text-base text-darkBlueGray-400 font-heading font-normal ${className}`}>
            {content}
        </p>
    )
}