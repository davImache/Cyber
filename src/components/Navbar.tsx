import React from 'react';
import { CircuitBoard } from 'lucide-react';

const Navbar = () => {
  const [activeTab, setActiveTab] = React.useState('accueil');

  return (
    <nav className="fixed top-0 w-full bg-navy-900/90 backdrop-blur-sm border-b border-sky-900/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <CircuitBoard className="h-8 w-8 text-sky-400" />
            <span className="text-xl font-bold text-sky-400 text-glow">
              CyberProject
            </span>
          </div>
          
          <div className="flex space-x-8">
            {['accueil', 'projets', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`nav-link capitalize ${activeTab === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;