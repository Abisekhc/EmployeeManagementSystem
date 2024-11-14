import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: '', age: '', position: '', department: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/employees/${id}`)
      .then(response => setFormData(response.data))
      .catch(error => console.error('Error fetching employee:', error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/employees/${id}`, formData)
      .then(() => navigate('/'))
      .catch(error => console.error('Error updating employee:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} required />
      <input name="age" type="number" value={formData.age} onChange={handleChange} required />
      <input name="position" value={formData.position} onChange={handleChange} required />
      <input name="department" value={formData.department} onChange={handleChange} required />
      <button type="submit">Update Employee</button>
    </form>
  );
};

export default EditEmployee;
