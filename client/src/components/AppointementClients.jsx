import React, { useState } from "react";


const AppointmentClients = () => {
  const [appointments, setAppointments] = useState([{patientName:"rafik",appointmentDate:"2021-02-01",appointmentTime:"20:00",reason:"nothing"}]);

  const addAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  return (
    <div className="appointment-table-container">
      <h2 className="table-heading">Appointment List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Appointment Date</th>
            <th>Appointment Time</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.patientName}</td>
              <td>{appointment.appointmentDate}</td>
              <td>{appointment.appointmentTime}</td>
              <td>{appointment.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentClients;
