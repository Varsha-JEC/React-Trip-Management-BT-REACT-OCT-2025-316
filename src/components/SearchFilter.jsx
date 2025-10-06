import React from 'react';

const SearchFilter = ({ setSearch, setFilter, setSort }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg mb-6 shadow">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by destination..."
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full"
        />

        {/* Filter Dropdown */}
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full"
        >
          <option value="">All Statuses</option>
          <option value="PLANNED">Planned</option>
          <option value="ONGOING">Ongoing</option>
          <option value="COMPLETED">Completed</option>
        </select>

        {/* Sort Dropdown */}
        <select
          onChange={(e) => setSort(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full"
        >
          <option value="">Sort By</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="date_asc">Start Date: Oldest First</option>
          <option value="date_desc">Start Date: Newest First</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;