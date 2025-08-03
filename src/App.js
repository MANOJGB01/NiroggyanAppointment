import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AppointmentContext from "./context/AppointmentContext";
import LandingPage from "./components/LandingPage";
import Profile from "./components/Profile";
import AppointmentHistory from "./components/AppointmentHistory";
import Home from "./components/Home"; 

import "./App.css";

const App = () => {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = appointment => {
    setAppointments(prev => [...prev, appointment]);
  };

  const clearAppointments = () => {
    setAppointments([]);
  };

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment, clearAppointments }}>
      <BrowserRouter>
        <div className="app-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/doctors" component={LandingPage} />
            <Route exact path="/doctors/:id" component={Profile} />
            <Route exact path="/appointments" component={AppointmentHistory} />
          </Switch>
        </div>
      </BrowserRouter>
    </AppointmentContext.Provider>
  );
};

export default App;