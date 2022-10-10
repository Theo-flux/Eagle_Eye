export const Section = ({ children, className, style}) => {
    return(
        <section style={style || {}} className={` ${className}`}>
            {children}
        </section>
    )
};

export const Div = ({ children, className }) => {
    return(
        <div className={`w-4/5 mx-auto max-w-7xl ${className}`}>
            {children}
        </div>
    )
};

