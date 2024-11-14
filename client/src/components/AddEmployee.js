import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [formData, setFormData] = useState({ name: '', age: '', position: '', department: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/employees', formData)
      .then(() => navigate('/'))
      .catch(error => console.error('Error adding employee:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="age" type="number" placeholder="Age" onChange={handleChange} required />
      <input name="position" placeholder="Position" onChange={handleChange} required />
      <input name="department" placeholder="Department" onChange={handleChange} required />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployee;
