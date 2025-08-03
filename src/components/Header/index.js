import { useContext } from "react"
import { Link } from "react-router-dom"
import AppointmentContext from "../../context/AppointmentContext"
import "./index.css"

const Header = () => {
  const { appointments } = useContext(AppointmentContext)
  const appointmentCount = appointments.length

  return (
    <nav className="nav-container">
      <div className="logo-title">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/djidwlmyr/image/upload/v1754124682/niroggyanimage_hfaecz.jpg"
            alt="niroggyan-logo"
            className="logo"
          />
        </Link>
      </div>

      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/doctors" className="nav-link">Doctors</Link>
        </li>
        <li className="nav-item">
          <Link to="/appointments" className="nav-link">
            Appointments History
            {appointmentCount > 0 && (
              <span className="appointment-count"> {appointmentCount}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header