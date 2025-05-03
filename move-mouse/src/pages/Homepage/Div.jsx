import React, { forwardRef } from 'react'

const Div = forwardRef(({ children, onClick, ...rest }, ref,) => {
    return (
        <div
            ref={ref}
            style={{ ...rest }}
            onClick={onClick}
        >
            {children}
        </div>
    )
})

export default Div
