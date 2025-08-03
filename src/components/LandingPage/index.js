import { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import './index.css';

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
};

const doctorList = [
  {
    id: 1,
    name: 'Dr. Arjun Mehta',
    specialization: 'Cardiologist',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    availability: 'Available Today',
  },
  {
    id: 2,
    name: 'Dr. Ananya Roy',
    specialization: 'Dermatologist',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    availability: 'Fully Booked',
  },
  {
    id: 3,
    name: 'Dr. Vikram Desai',
    specialization: 'Orthopedic Surgeon',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    availability: 'Available Tomorrow',
  },
  {
    id: 4,
    name: 'Dr. Neha Shah',
    specialization: 'Pediatrician',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
    availability: 'Available Today',
  },
  {
    id: 5,
    name: 'Dr. Rohan Singh',
    specialization: 'Neurologist',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    availability: 'Fully Booked',
  },
  {
    id: 6,
    name: 'Dr. Sneha Iyer',
    specialization: 'Gynecologist',
    image: 'https://randomuser.me/api/portraits/women/36.jpg',
    availability: 'Available Today',
  },
  {
    id: 7,
    name: 'Dr. Karan Patel',
    specialization: 'General Physician',
    image: 'https://randomuser.me/api/portraits/men/61.jpg',
    availability: 'Available Today',
  },
  {
    id: 8,
    name: 'Dr. Ishita Rao',
    specialization: 'ENT Specialist',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    availability: 'Available Tomorrow',
  },
];

class LandingPage extends Component {
  state = {
    specialistList: [],
    searchQuery: '',
    apiStatus: apiStatusConstants.initial,
  };

  componentDidMount() {
    this.getSpecialistData();
  }

  getSpecialistData = () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });

    setTimeout(() => {
      this.setState({
        specialistList: doctorList,
        apiStatus: apiStatusConstants.success,
      });
    }, 500);
  };

  onChangeSearch = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

 renderDoctorList = () => {
  const { specialistList, searchQuery } = this.state;

  const filteredList = specialistList.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

    return (
      <ul className="landing-doctor-list">
        {filteredList.map((doctor) => (
          <li key={doctor.id} className="landing-doctor-card">
            <Link to={`/doctors/${doctor.id}`} className="landing-doctor-link">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="landing-doctor-img"
              />
              <h3>{doctor.name}</h3>
              <p>{doctor.specialization}</p>
              <span
                className={
                  doctor.availability === 'Fully Booked'
                    ? 'landing-unavailable'
                    : 'landing-available'
                }
              >
                {doctor.availability}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { apiStatus, searchQuery } = this.state;

    return (
      <>
        <Header />
        <div className="landing-container">
          <h1 className="landing-title">Our Specialists</h1>

          <input
            type="text"
            placeholder="Search by specialization..."
            className="landing-search-input"
            value={searchQuery}
            onChange={this.onChangeSearch}
          />

          {apiStatus === apiStatusConstants.inProgress && (
            <div className="loader-container">
              <h1 className="para">Loading....</h1>
            </div>
          )}

          {apiStatus === apiStatusConstants.success && this.renderDoctorList()}
        </div>
      </>
    );
  }
}

export default LandingPage;