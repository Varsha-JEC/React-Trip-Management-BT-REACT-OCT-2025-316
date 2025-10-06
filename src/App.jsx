import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AddTrip from './pages/AddTrip';
import EditTrip from './pages/EditTrip';
import { initialTrips } from './data/trips';

function App() {
  const [trips, setTrips] = useState(initialTrips);

  // Add new trip
  const handleAddTrip = (tripData) => {
    const newTrip = {
      ...tripData,
      id: uuidv4(),
    };
    setTrips([...trips, newTrip]);
  };

  // Edit existing trip
  const handleEditTrip = (id, updatedData) => {
    setTrips(trips.map(trip => 
      trip.id === id ? { ...trip, ...updatedData } : trip
    ));
  };

  // Delete trip
  const handleDeleteTrip = (id) => {
    if (window.confirm('Are you sure you want to delete this trip?')) {
      setTrips(trips.filter(trip => trip.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={<Dashboard trips={trips} onDelete={handleDeleteTrip} />} 
        />
        <Route 
          path="/add" 
          element={<AddTrip onAdd={handleAddTrip} />} 
        />
        <Route 
          path="/edit/:id" 
          element={<EditTrip trips={trips} onEdit={handleEditTrip} />} 
        />
      </Routes>
    </div>
  );
}

export default App;