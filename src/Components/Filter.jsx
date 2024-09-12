import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// List of teachers with semester, subject, and a unique ID
const teachersData = [
  { id: 1, name: 'Mr. Dinesh Gupta', semester: '1', subject: 'Mathematics' },
  { id: 2, name: 'Ms. Navneet', semester: '2', subject: 'DAA' },
  { id: 3, name: 'Ms. Puja Sharma', semester: '3', subject: 'DSA' },
  { id: 4, name: 'Mr. Gagandeep', semester: '4', subject: 'OOPS' },
  { id: 5, name: 'Mr. Khan', semester: '5', subject: 'CN' },
  { id: 6, name: 'Mr. RAM', semester: '5', subject: 'OS' },
  { id: 7, name: 'Mr. SHIYAM', semester: '5', subject: 'English' },
 
];

function TeacherFilter() {
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const filteredTeachers = teachersData.filter((teacher) => {
    return (
      (selectedSemester === '' || teacher.semester === selectedSemester) &&
      (selectedSubject === '' || teacher.subject === selectedSubject)
    );
  });

  return (
    <div>
      <h1>Filter Teachers by Semester and Subject</h1>

      <div className="filter-container">
        <div className="filter-item">
          <label htmlFor="semesterFilter">Semester: </label>
          <select name="semesterFilter" value={selectedSemester} onChange={handleSemesterChange}>
            <option value="">All Semesters</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
            <option value="5">Semester 5</option>
            <option value="6">Semester 6</option>
            <option value="7">Semester 7</option>
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="subjectFilter">Subject: </label>
          <select name="subjectFilter" value={selectedSubject} onChange={handleSubjectChange}>
            <option value="">All Subjects</option>
            <option value="Mathematics">Mathematics</option>
            <option value="DAA">DAA</option>
            <option value="DSA">DSA</option>
            <option value="OOPS">OOPS</option>
            <option value="CN">CN</option>
            <option value="OS">OS</option>
            <option value="English">English</option>
          </select>
        </div>
      </div>

      <h2>Choose Your Teachers</h2>
      <ul>
        {filteredTeachers.length > 0 ? (
          filteredTeachers.map((teacher) => (
            <li key={teacher.id}>
              <Link to={`/teacher/${teacher.id}`}>
                {teacher.name}
              </Link> 
              - Semester: {teacher.semester}, Subject: {teacher.subject}
            </li>         
          ))
        ) : (
          <p>No teachers match the selected filters.</p>
        )}
      </ul>
    </div>
  );
}

export default TeacherFilter;
