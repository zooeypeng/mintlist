import { render, screen } from '@testing-library/react'
import ListItem from '@/app/ListItem'
import '@testing-library/jest-dom'
 
describe('ListItem', () => {
  test('renders vehicle data', () => {
    const mockVehicle = {
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      vin: 'ABC123',
    };

    const { getByText } = render(<ListItem data={mockVehicle} />);

    expect(getByText(mockVehicle.make)).toBeInTheDocument();
    expect(getByText(String(mockVehicle.year))).toBeInTheDocument();
    expect(getByText(mockVehicle.vin)).toBeInTheDocument();
  });
})