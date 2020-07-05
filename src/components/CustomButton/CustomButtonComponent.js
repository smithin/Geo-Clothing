import React from 'react'
import './custom-button.styles.scss'

export default function CustomButtonComponent({children,isGoogleSignIn,...otherProps}) {
    return (
        <div style={{display:'inline'}}>
            <button className={`${isGoogleSignIn ? 'google-sign-in ':''}custom-button`} {...otherProps}>{children}</button>
        </div>
    )
}
