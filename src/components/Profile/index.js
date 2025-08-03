import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Popup from "reactjs-popup"
import Header from '../Header';
import AppointmentPopup from "../AppointmentPopup"


import './index.css';

const doctorList = [
  {
    id: 1,
    name: 'Dr. Arjun Mehta',
    specialization: 'Cardiologist',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    availability: 'Available Today',
    qualifications: 'MBBS, MD (Cardiology)',
    experience: '12 years',
    location: 'Apollo Hospital, Delhi',
    schedule: [
      { day: 'Monday', time: '10:00 AM - 1:00 PM' },
      { day: 'Wednesday', time: '2:00 PM - 5:00 PM' },
      { day: 'Friday', time: '10:00 AM - 1:00 PM' }
    ]
  },
  {
    id: 2,
    name: 'Dr. Ananya Roy',
    specialization: 'Dermatologist',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    availability: 'Fully Booked',
    qualifications: 'MBBS, DDVL',
    experience: '9 years',
    location: 'Max Skin Clinic, Mumbai',
    schedule: [
      { day: 'Tuesday', time: '11:00 AM - 2:00 PM' },
      { day: 'Thursday', time: '3:00 PM - 6:00 PM' }
    ]
  },
  {
    id: 3,
    name: 'Dr. Vikram Desai',
    specialization: 'Orthopedic Surgeon',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    availability: 'Available Tomorrow',
    qualifications: 'MBBS, MS (Orthopedics)',
    experience: '15 years',
    location: 'Fortis Hospital, Bangalore',
    schedule: [
      { day: 'Monday', time: '3:00 PM - 6:00 PM' },
      { day: 'Thursday', time: '10:00 AM - 1:00 PM' }
    ]
  },
  {
    id: 4,
    name: 'Dr. Neha Shah',
    specialization: 'Pediatrician',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
    availability: 'Available Today',
    qualifications: 'MBBS, MD (Pediatrics)',
    experience: '10 years',
    location: 'Rainbow Hospital, Hyderabad',
    schedule: [
      { day: 'Wednesday', time: '9:00 AM - 12:00 PM' },
      { day: 'Friday', time: '2:00 PM - 5:00 PM' }
    ]
  },
  {
    id: 5,
    name: 'Dr. Rohan Singh',
    specialization: 'Neurologist',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    availability: 'Fully Booked',
    qualifications: 'MBBS, DM (Neurology)',
    experience: '14 years',
    location: 'AIIMS, Delhi',
    schedule: [
      { day: 'Tuesday', time: '10:00 AM - 1:00 PM' },
      { day: 'Friday', time: '2:00 PM - 6:00 PM' }
    ]
  },
  {
    id: 6,
    name: 'Dr. Sneha Iyer',
    specialization: 'Gynecologist',
    image: 'https://randomuser.me/api/portraits/women/36.jpg',
    availability: 'Available Today',
    qualifications: 'MBBS, MS (Obstetrics & Gynaecology)',
    experience: '11 years',
    location: 'Cloudnine Hospital, Pune',
    schedule: [
      { day: 'Monday', time: '11:00 AM - 2:00 PM' },
      { day: 'Thursday', time: '4:00 PM - 7:00 PM' }
    ]
  },
  {
    id: 7,
    name: 'Dr. Karan Patel',
    specialization: 'General Physician',
    image: 'https://randomuser.me/api/portraits/men/61.jpg',
    availability: 'Available Today',
    qualifications: 'MBBS, MD (General Medicine)',
    experience: '8 years',
    location: 'Columbia Asia, Ahmedabad',
    schedule: [
      { day: 'Monday - Saturday', time: '9:00 AM - 1:00 PM' }
    ]
  },
  {
    id: 8,
    name: 'Dr. Ishita Rao',
    specialization: 'ENT Specialist',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    availability: 'Available Tomorrow',
    qualifications: 'MBBS, MS (ENT)',
    experience: '10 years',
    location: 'KIMS Hospital, Kochi',
    schedule: [
      { day: 'Wednesday', time: '3:00 PM - 6:00 PM' },
      { day: 'Saturday', time: '10:00 AM - 1:00 PM' }
    ]
  }
];

class Profile extends Component {
  state = {
    doctorData: null,
    isLoading: true,
  };

  componentDidMount() {
    this.getDoctorDetails();
  }

  getDoctorDetails = () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    console.log(id)

    // Simulate loading delay
    setTimeout(() => {
      const doctor = doctorList.find(doc => doc.id === parseInt(id));
      this.setState({ doctorData: doctor, isLoading: false });
    }, 1000); // 1 second delay
  };

  render() {
    const { doctorData, isLoading } = this.state;

    return (
      <>
        <Header />
        <div className="profile-container">
          {isLoading ? (
            <div className="loader-container" data-testid="loader">
              <p className="loaders">Loading...</p>
            </div>
          ) : doctorData ? (
            <div className="profile-card">
              <img src={doctorData.image} alt={doctorData.name} className="profile-image" />
              <div className="profile-info">
                <h2>{doctorData.name}</h2>
                <p><strong>Specialization:</strong> {doctorData.specialization}</p>
                <p><strong>Qualifications:</strong> {doctorData.qualifications}</p>
                <p><strong>Experience:</strong> {doctorData.experience}</p>
                <p><strong>Availability:</strong> {doctorData.availability}</p>
                <p><strong>Location:</strong> {doctorData.location}</p>
                <div>
                  <strong>Schedule:</strong>
                  <ul>
                    {doctorData.schedule.map((slot, index) => (
                      <li key={index}>{slot.day}: {slot.time}</li>
                    ))}
                  </ul>
                </div>
                <Popup
                  modal
                  trigger={
                  <button type="button" className="book-button d-sm-none">Book Appointment</button>}
                   position="top left"
                >
                {close => <AppointmentPopup close={close} />}
                </Popup>
              </div>
            </div>
          ) : (
            <p>Doctor not found</p>
          )}
        </div>
      </>
    );
  }
}

export default withRouter(Profile);