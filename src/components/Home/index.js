import { withRouter } from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = (props) => {
  const exploreSpecialist = () => {
    props.history.replace('/doctors')
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="text-button-group">
          <p className="summary-text">
            Niroggyan is a comprehensive healthcare platform that connects patients with qualified doctors
            across various specializations. Whether you're seeking expert advice, booking appointments,
            or reviewing your consultation history, Niroggyan simplifies your healthcare journey. Our mission
            is to ensure quality medical care is accessible, efficient, and personalized for every individual.
            From cardiology to dermatology, our panel of doctors are experienced and verified to provide you
            with trusted medical support.
          </p>
          <button className="suggest-button" onClick={exploreSpecialist}>
            Explore Specialists
          </button>
        </div>
      </div>
    </>
  )
}

export default withRouter(Home)