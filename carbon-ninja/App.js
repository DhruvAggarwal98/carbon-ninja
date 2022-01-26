import React from 'react';
import { Router } from './routes/Router';
import { AuthProvider } from './contexts/Auth';

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
