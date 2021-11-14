import { render, screen } from '@testing-library/react';
import App from './App';




test('should validate rendering of Ramp chart', () => {
  render(<App />);
  const linkElement = screen.getByText(/ramp chart/i);
  expect(linkElement).toBeInTheDocument();
});
