import React, { useState } from 'react';

function StudentForm() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    roll: '',
    semester: '',
    contact: '',
    email: ''
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
      <h1>Student Form</h1>
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
          <label>Roll Number: </label>
          <input
            type="text"
            name="roll"
            value={formData.roll}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Semester: </label>
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
            <p><strong>Roll Number:</strong> {student.roll}</p>
            <p><strong>Semester:</strong> {student.semester}</p>
            <p><strong>Contact:</strong> {student.contact}</p>
            <p><strong>Email:</strong> {student.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentForm;
