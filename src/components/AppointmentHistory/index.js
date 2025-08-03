import Header from '../Header'
import AppointmentContext from '../../context/AppointmentContext'

import './index.css'

const AppointmentHistory = () => (
  <AppointmentContext.Consumer>
    {value => {
      const { appointments, clearAppointments } = value
      const isEmpty = appointments.length === 0

      const onClickClearAll = () => {
        clearAppointments()
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {isEmpty ? (
              <div className="empty-cart-view">
                <img
                  src="https://res.cloudinary.com/djidwlmyr/image/upload/v1754156582/helth_zyuka0.jpg"
                  alt="no appointments"
                  className="empty-cart-img"
                />
                <h1 className="empty-cart-heading">No Appointments Yet!</h1>
                <p className="empty-cart-desc">
                  Book your first appointment to see it here.
                </p>
              </div>
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Appointments</h1>
                <button
                  type="button"
                  className="remove-all-btn"
                  onClick={onClickClearAll}
                  data-testid="remove"
                >
                  Clear All
                </button>
                <ul className="appointment-list">
                  {appointments.map((each, index) => (
                    <li key={index} className="appointment-item">
                      <div className="appointment-top">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
                          alt="appointment logo"
                          className="appointment-logo"
                        />
                        <div className="appointment-details">
                          <p><strong>Name:</strong> {each.name}</p>
                          <p><strong>Email:</strong> {each.email}</p>
                          <p><strong>Phone:</strong> {each.phone}</p>
                          <p><strong>Date of Birth:</strong> {each.dob}</p>
                          <p><strong>Age:</strong> {each.age}</p>
                          <p><strong>Date/Time:</strong> {new Date(each.datetime).toLocaleString()}</p>
                        </div>
                      </div>
                      <img
                        src="https://res.cloudinary.com/djidwlmyr/image/upload/v1754159907/niroggyana_j0nnfj.jpg"
                        alt="check logo"
                        className="appointment-check-logo"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      )
    }}
  </AppointmentContext.Consumer>
)

export default AppointmentHistory