import { render, screen } from '@testing-library/react';
//import App from './App';
import Resrvation from './components/Resrvation';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders the reservation heading', ()=> {
  render(<Resrvation />);
  const headingEle = screen.getByText("Book Now");
  expect(headingEle).toBeInTheDocument();
});
