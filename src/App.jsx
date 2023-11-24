
import React from 'react';
import RoutesApp from './routes';
import { AuthProvider } from './services/auth';


function App() {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
}

export default App;
