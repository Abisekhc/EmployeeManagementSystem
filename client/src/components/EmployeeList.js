import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/employees')
      .then(response => setEmployees(response.data))
      .catch(error => console.error('Error fetching employees:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/employees/${id}`)
      .then(() => setEmployees(employees.filter(emp => emp.id !== id)))
      .catch(error => console.error('Error deleting employee:', error));
  };

  return (
    <div>
      <h2>Employee List</h2>
      <Link to="/add">Add Employee</Link>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name} - {emp.position} - {emp.department}
            <Link to={`/edit/${emp.id}`}>Edit</Link>
            <button onClick={() => handleDelete(emp.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
