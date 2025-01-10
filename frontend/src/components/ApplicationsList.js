import React, { useEffect, useState } from 'react';

const ApplicationsList = ({ onSelect }) => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/applications')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setApplications(data))
      .catch(err => console.error('Error fetching applications:', err));
  }, []);
  

  return (
    <ul>
      {applications.map(app => (
        <li key={app.id} onClick={() => onSelect(app.id)}>
          {app.name}
        </li>
      ))}
    </ul>
  );
};

export default ApplicationsList;
