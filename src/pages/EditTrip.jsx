import React from 'react';
import { useParams } from 'react-router-dom';
import TripForm from '../components/TripForm';

const EditTrip = ({ trips, onEdit }) => {
  const { id } = useParams();
  const tripToEdit = trips.find((trip) => trip.id === id);

  if (!tripToEdit) {
    return <p className="text-center text-red-500 mt-10">Trip not found!</p>;
  }

  const handleEdit = (data) => {
    onEdit(id, data);
  };

  return <TripForm onSubmit={handleEdit} defaultValues={tripToEdit} />;
};

export default EditTrip;