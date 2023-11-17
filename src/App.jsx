
import React from 'react';
import RoutesApp from './routes';
import { AuthProvider } from './utils/auth';


function App() {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
}

export default App;
