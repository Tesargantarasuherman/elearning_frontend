import React from 'react'
import { useEffect, useState } from 'react'
import './Alert.css'

const Alert = (props) => {
    const [state, setstate] = useState(props.active)
    useEffect(() => {
        setTimeout(() => {
            setstate('unactive')
        }, 5000);
    }, [state])
    return (
        <div className={`alert ${state =='active'? 'visible' : ''}`}>
            {props.text}
        </div>
    )
}

export default Alert
