import React, { useState, useMemo } from 'react';
import TripList from '../components/TripList';
import SearchFilter from '../components/SearchFilter';
import Pagination from '../components/Pagination';
import SummaryWidget from '../components/SummaryWidget';

const TRIPS_PER_PAGE = 5;

const Dashboard = ({ trips, onDelete }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAndSortedTrips = useMemo(() => {
    let processedTrips = [...trips];

    // Filter by search term
    if (search) {
      processedTrips = processedTrips.filter(trip =>
        trip.destination.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by status
    if (filter) {
      processedTrips = processedTrips.filter(trip => trip.status === filter);
    }

    // Sort
    switch (sort) {
      case 'price_asc':
        processedTrips.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        processedTrips.sort((a, b) => b.price - a.price);
        break;
      case 'date_asc':
        processedTrips.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        break;
      case 'date_desc':
        processedTrips.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
        break;
      default:
        break;
    }

    return processedTrips;
  }, [trips, search, filter, sort]);

  // Pagination logic
  const totalPages = Math.ceil(filteredAndSortedTrips.length / TRIPS_PER_PAGE);
  const paginatedTrips = filteredAndSortedTrips.slice(
    (currentPage - 1) * TRIPS_PER_PAGE,
    currentPage * TRIPS_PER_PAGE
  );

  return (
    <div className="container mx-auto p-4">
      <SummaryWidget trips={trips} />
      <SearchFilter setSearch={setSearch} setFilter={setFilter} setSort={setSort} />
      <TripList trips={paginatedTrips} onDelete={onDelete} />
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Dashboard;