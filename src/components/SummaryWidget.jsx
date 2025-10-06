import React from 'react';

const SummaryWidget = ({ trips }) => {
  const totalTrips = trips.length;
  const averagePrice = totalTrips > 0
    ? (trips.reduce((acc, trip) => acc + trip.price, 0) / totalTrips).toFixed(2)
    : 0;
  const ongoingTrips = trips.filter(trip => trip.status === 'ONGOING').length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="p-4 bg-white rounded-lg shadow text-center">
        <h3 className="text-lg font-semibold text-gray-700">Total Trips</h3>
        <p className="text-3xl font-bold text-blue-600">{totalTrips}</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow text-center">
        <h3 className="text-lg font-semibold text-gray-700">Average Price</h3>
        <p className="text-3xl font-bold text-green-600">${averagePrice}</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow text-center">
        <h3 className="text-lg font-semibold text-gray-700">Ongoing Trips</h3>
        <p className="text-3xl font-bold text-yellow-600">{ongoingTrips}</p>
      </div>
    </div>
  );
};

export default SummaryWidget;