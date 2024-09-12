import React from 'react';
import { useParams } from 'react-router-dom';

const teachersData = [
  { id: 1, name: 'Mr. Dinesh Gupta', class: '10', subject: 'Mathematics', bio: 'Mr. Smith is a dedicated math teacher with 10 years of experience.' },
  { id: 2, name: 'Ms. Navneet', class: '9', subject: 'Science', bio: 'Ms. Johnson is passionate about teaching science.' },
  { id: 3, name: 'Ms. Puja Sharma', class: '11', subject: 'History', bio: 'Mr. Lee has a deep understanding of world history.' },
  { id: 4, name: 'Mr. Gagandeep', class: '10', subject: 'English', bio: 'Ms. Patel enjoys helping students improve their English skills.' },
  { id: 5, name: 'Mr. Khan', class: '9', subject: 'Mathematics', bio: 'Mr. Khan is a skilled teacher who makes math easy for students.' },
  { id: 6, name: 'Mr. RAM', class: '9', subject: 'Mathematics', bio: 'Mr. Khan is a skilled teacher who makes math easy for students.' },
  { id: 7, name: 'Mr. SHIYAM', class: '9', subject: 'Mathematics', bio: 'Mr. Khan is a skilled teacher who makes math easy for students.' },
];

const TeacherBio = () => {
  const { teacherId } = useParams(); 
  const teacher = teachersData.find((t) => t.id === parseInt(teacherId));

  return (
    <div>
      {teacher ? (
        <>
          <h1>{teacher.name}</h1>
          <p>Class: {teacher.class}</p>
          <p>Subject: {teacher.subject}</p>
          <p>Bio: {teacher.bio}</p>
        </>
      ) : (
        <p>Teacher not found.</p>
      )}
    </div>
  );
};

export default TeacherBio;
