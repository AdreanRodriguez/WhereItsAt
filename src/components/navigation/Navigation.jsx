
import './navigation.css'
import { FaHome } from "react-icons/fa"
import { FaBorderAll } from "react-icons/fa"
import { SiEventbrite } from "react-icons/si"
import { useNavigate } from "react-router-dom"
import { IoTicketSharp } from "react-icons/io5"


function Navigation() {

    const navigateTo = useNavigate()
    const handleNavigateTo = (e) => { navigateTo(e) }

    return (
        <ul className='navigation__container'>
            <li onClick={() => handleNavigateTo('/')} className='navigation__icon'> <FaHome />Home</li>
            <li onClick={() => handleNavigateTo('/events/')} className='navigation__icon'><SiEventbrite />Events</li>
            <li onClick={() => handleNavigateTo('/order/')} className='navigation__icon'><FaBorderAll />Order</li>
            <li onClick={() => handleNavigateTo('/tickets/')} className='navigation__icon'><IoTicketSharp />Tickets</li>
        </ul>
    )
}

export default Navigation