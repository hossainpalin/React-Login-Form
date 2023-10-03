import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Auth from './pages/Auth';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Navigate to="/React-Login-Form/login" />} />
        <Route path="React-Login-Form" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
