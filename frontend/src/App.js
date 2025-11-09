import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [form, setForm] = useState({ patientName: '', doctorName: '', date: '', time: '' });
  const [appointments, setAppointments] = useState([]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/appointments', form);
      alert('Appointment booked!');
      fetchAppointments();
      setForm({ patientName: '', doctorName: '', date: '', time: '' });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAppointments = () => {
    axios.get('http://localhost:5000/api/appointments')
      .then(res => setAppointments(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => { fetchAppointments(); }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Telemedicine Appointment System</h1>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input name="patientName" value={form.patientName} placeholder="Patient Name" onChange={handleChange} required />
        <input name="doctorName" value={form.doctorName} placeholder="Doctor Name" onChange={handleChange} required />
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
        <input type="time" name="time" value={form.time} onChange={handleChange} required />
        <button type="submit">Book Appointment</button>
      </form>

      <div>
        <h2>Appointments</h2>
        <ul>
          {appointments.map(a => (
            <li key={a._id}>
              {a.patientName} with {a.doctorName} on {new Date(a.date).toLocaleDateString()} at {a.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
