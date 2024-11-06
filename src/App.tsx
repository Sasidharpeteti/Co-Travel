import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import SafetyButton from './components/SafetyButton';
import Home from './pages/Home';
import Connections from './pages/Connections';
import Messages from './pages/Messages';
import Plans from './pages/Plans';
import Journal from './pages/Journal';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="pt-16 pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>
        </main>
        <SafetyButton />
      </div>
    </Router>
  );
}

export default App;