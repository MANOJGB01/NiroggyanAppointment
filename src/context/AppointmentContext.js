import React from 'react'

const AppointmentContext = React.createContext({
  appointments: [],
  addAppointment: () => {},
  clearAppointments: () => {},
})

export default AppointmentContext