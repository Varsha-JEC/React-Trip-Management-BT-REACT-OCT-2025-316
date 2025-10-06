import React from 'react';
import { Link } from 'react-router-dom';

const TripList = ({ trips, onDelete }) => {
  if (trips.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No trips found. Try adjusting your search or filters!</p>;
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case 'PLANNED':
        return 'bg-blue-100 text-blue-800';
      case 'ONGOING':
        return 'bg-yellow-100 text-yellow-800';
      case 'COMPLETED':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">Destination</th>
            <th scope="col" className="px-6 py-3">Dates</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip) => (
            <tr key={trip.id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">{trip.destination}</td>
              <td className="px-6 py-4">{trip.startDate} to {trip.endDate}</td>
              <td className="px-6 py-4">${trip.price}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 font-semibold leading-tight rounded-full text-xs ${getStatusBadge(trip.status)}`}>
                  {trip.status}
                </span>
              </td>
              <td className="px-6 py-4 flex items-center gap-2">
                <Link to={`/edit/${trip.id}`} className="font-medium text-blue-600 hover:underline">Edit</Link>
                <button
                  onClick={() => onDelete(trip.id)}
                  className="font-medium text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TripList;