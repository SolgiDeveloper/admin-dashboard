import usFlag from "@assets/images/us.png"
import faFlag from "@assets/images/ir.png"
import { useEffect, useRef, useState } from "react"

const ChangeLanguage = () => {
    const [show, setShow] = useState(false)
    const ref = useRef();
    useEffect(()=> {
        const checkIfClickOutside = e => {
            console.log('hi', e, ref)
            if (show && ref.current && !ref.current.contains(e.target)){
                setShow(false)
            }
        }
        document.addEventListener('mousedown', checkIfClickOutside)

        return () => {
            document.removeEventListener('mousedown', checkIfClickOutside)
        }
    }, [show])
    return (
        <div className="dropdown" ref={ref}>
            <a className="nav-flag dropdown-toggle" onClick={()=> setShow(true)}>
                <img src={usFlag} alt="English"/>
            </a>
            <div  className={`dropdown-menu dropdown-menu-end ${show ? 'show' : ''}`}>
                <a className="dropdown-item fw-bolder" style={{textAlign: 'right'}}>
                    <img src={faFlag} width="20" className="ms-2"/>
                    <span className="align-middle">فارسی</span>
                </a>
                <a className="dropdown-item fw-bolder" style={{textAlign: 'right'}}>
                    <img src={usFlag} width="20" className="ms-2"/>
                    <span className="align-middle">English</span>
                </a>
            </div>
        </div>
    )
}

export default ChangeLanguage;