import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/auth/Home';
import Course from './pages/shared/Course';
import Admindashboard from './pages/shared/Userdashboard';
import Weblayout from './layout/Weblayout'; // Import Weblayout

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Weblayout />}>
          <Route index element={<Home />} />
          <Route path="course" element={<Course />} />
        </Route>
        <Route path="/Admindashboard" element={<Admindashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;