import { v4 as uuidv4 } from 'uuid';

export const initialTrips = [
  {
    id: uuidv4(),
    destination: "Paris",
    startDate: "2025-09-10",
    endDate: "2025-09-20",
    price: 1500,
    status: "PLANNED"
  },
  {
    id: uuidv4(),
    destination: "London",
    startDate: "2025-09-15",
    endDate: "2025-09-25",
    price: 1800,
    status: "ONGOING"
  },
  {
    id: uuidv4(),
    destination: "Tokyo",
    startDate: "2025-10-05",
    endDate: "2025-10-15",
    price: 2500,
    status: "PLANNED"
  },
  {
    id: uuidv4(),
    destination: "New York",
    startDate: "2025-08-20",
    endDate: "2025-08-28",
    price: 2200,
    status: "COMPLETED"
  },
  {
    id: uuidv4(),
    destination: "Sydney",
    startDate: "2025-11-01",
    endDate: "2025-11-12",
    price: 3000,
    status: "PLANNED"
  }
];