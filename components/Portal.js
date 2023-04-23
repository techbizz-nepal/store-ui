import {useEffect, useRef, useState} from 'react'
import {createPortal} from 'react-dom'


export const Portal = (props) => {
    const ref = useRef(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        ref.current = document.querySelector("#modalPortal")
        setMounted(true)
    }, [])
    return (mounted && ref.current)
        ? createPortal(<div>{props.children}</div>, ref.current)
        : null
}