import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-gray-100">
      <Navbar />
      <main className="pt-20 px-4 max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-sky-400 text-glow">
            Bienvenue sur CyberProject
          </h1>
          <p className="text-xl text-gray-300">
            L'avenir de vos projets commence ici
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;