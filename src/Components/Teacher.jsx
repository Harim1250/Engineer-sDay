import React, { useState } from 'react';

function Teacherfrom() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    Father: '',
    department : '',
    contact: '',
    email: '',
    subject: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, formData]);
    setFormData({ name: '', roll: '', semester: '', contact: '', email: '' });
  };

  return (
    <div>
      <h1>Teacher Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Father's Name: </label>
          <input
            type="text"
            name="roll"
            value={formData.roll}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Department: </label>
          <input
            type="text"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contact: </label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Subject: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </form>
      <StudentList students={students} />
    </div>
  );
}

const StudentList = ({ students }) => {
  return (
    <div>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Father:</strong> {student.Father}</p>
            <p><strong>department:</strong> {student.department}</p>
            <p><strong>Contact:</strong> {student.contact}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>subject:</strong> {student.subject}</p>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teacherfrom;
