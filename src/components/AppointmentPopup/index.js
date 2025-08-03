import React, { useState, useContext } from 'react'
import AppointmentContext from '../../context/AppointmentContext'
import './index.css'

const AppointmentPopup = ({ close }) => {
  const { addAppointment } = useContext(AppointmentContext)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    age: '',
    datetime: '',
  })

  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    addAppointment(formData)
    setIsConfirmed(true)
  }

  return (
    <div className="popup-container">
      <h2>Book Appointment</h2>
      {isConfirmed ? (
        <p className="confirmation-text success-message">
          Your appointment has been booked successfully
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="appointment-form">
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <input
            type="datetime-local"
            name="datetime"
            value={formData.datetime}
            onChange={handleChange}
            required
          />
          <div className="popup-buttons">
            <button type="submit">Confirm</button>
            <button type="button" onClick={close}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  )
}

export default AppointmentPopup