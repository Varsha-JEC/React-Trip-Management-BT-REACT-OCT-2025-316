import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const TripForm = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: defaultValues || {
      destination: '',
      startDate: '',
      endDate: '',
      price: '',
      status: 'PLANNED',
    },
  });
  const navigate = useNavigate();

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const handleFormSubmit = (data) => {
    onSubmit(data);
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {defaultValues ? 'Edit Trip' : 'Add New Trip'}
      </h2>
      <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
        {/* Destination */}
        <div className="mb-4">
          <label htmlFor="destination" className="block text-gray-700 font-bold mb-2">Destination</label>
          <input
            id="destination"
            type="text"
            {...register('destination', { required: 'Destination is required' })}
            className={`w-full px-3 py-2 border rounded-lg ${errors.destination ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>}
        </div>

        {/* Start Date */}
        <div className="mb-4">
          <label htmlFor="startDate" className="block text-gray-700 font-bold mb-2">Start Date</label>
          <input
            id="startDate"
            type="date"
            {...register('startDate', { required: 'Start date is required' })}
            className={`w-full px-3 py-2 border rounded-lg ${errors.startDate ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate.message}</p>}
        </div>

        {/* End Date */}
        <div className="mb-4">
          <label htmlFor="endDate" className="block text-gray-700 font-bold mb-2">End Date</label>
          <input
            id="endDate"
            type="date"
            {...register('endDate', { required: 'End date is required' })}
            className={`w-full px-3 py-2 border rounded-lg ${errors.endDate ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate.message}</p>}
        </div>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price ($)</label>
          <input
            id="price"
            type="number"
            {...register('price', { required: 'Price is required', valueAsNumber: true, min: { value: 1, message: 'Price must be positive' } })}
            className={`w-full px-3 py-2 border rounded-lg ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
        </div>

        {/* Status */}
        <div className="mb-6">
          <label htmlFor="status" className="block text-gray-700 font-bold mb-2">Status</label>
          <select
            id="status"
            {...register('status', { required: 'Status is required' })}
            className="w-full px-3 py-2 border rounded-lg border-gray-300"
          >
            <option value="PLANNED">Planned</option>
            <option value="ONGOING">Ongoing</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-4">
          <button type="button" onClick={() => navigate('/')} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Cancel
          </button>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save Trip
          </button>
        </div>
      </form>
    </div>
  );
};

export default TripForm;