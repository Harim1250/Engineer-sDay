import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// List of students with group and other details
const studentsData = [
  { id: 1, name: 'Roni', group: '1', roll: '2224355', contact: '1234567890', email: 'roni123@gmail.com' },
  { id: 2, name: 'Ram', group: '2', roll: '2224356', contact: '1234567891', email: 'ram123@gmail.com' },
  { id: 3, name: 'Piyush', group: '3', roll: '2224357', contact: '1234567892', email: 'piyush123@gmail.com' },
  { id: 4, name: 'Mohan', group: '4', roll: '2224358', contact: '1234567893', email: 'mohan123@gmail.com' },
  { id: 5, name: 'Keran', group: '5', roll: '2224359', contact: '1234567894', email: 'keran123@gmail.com' },
  // Add more students as needed
];

function StudentFilter() {
  const [selectedGroup, setSelectedGroup] = useState('');

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
  };

  const filteredStudents = studentsData.filter((student) => {
    return selectedGroup === '' || student.group === selectedGroup;
  });

  return (
    <div>
      <h1>Filter the Students by Groups</h1>

      <div className="filter- studentcontainer">
        <div className=" studentfilter-item">
          <label htmlFor="groupFilter">Groups: </label>
          <select name="groupFilter" value={selectedGroup} onChange={handleGroupChange}>
            <option value="">All Groups</option>
            <option value="1">Group 1</option>
            <option value="2">Group 2</option>
            <option value="3">Group 3</option>
            <option value="4">Group 4</option>
            <option value="5">Group 5</option>
          </select>
        </div>
      </div>

      <h2>List of Students</h2>
      <ul>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <li key={student.id}>
              <Link to={`/student/${student.id}`}>
                {student.name}
              </Link> 
              - Roll: {student.roll}, Contact: {student.contact}, Email: {student.email}
            </li>         
          ))
        ) : (
          <p>No students match the selected filter.</p>
        )}
      </ul>
    </div>
  );
}

export default StudentFilter;
