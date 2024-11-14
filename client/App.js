import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from '../styles';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<EmployeeList />} />
      <Route path="/add" element={<AddEmployee />} />
      <Route path="/edit/:id" element={<EditEmployee />} />
    </Routes>
  </Router>
);

export default App;
