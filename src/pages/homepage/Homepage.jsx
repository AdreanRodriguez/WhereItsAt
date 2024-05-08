
import './homepage.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

function Homepage() {
  return (
    <Link className="homepage__link" to="/events/" >
      <article className='homepage__container'>
        <img src={logo} alt="A logo" />
        <h1 className='homepage__heading'>Where It's @</h1>
        <h2 className='homepage__text'>Ticketing made easy</h2>
      </article>
    </Link>
  )
}

export default Homepage