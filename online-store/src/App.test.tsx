import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

describe("App", () => {
  it("renders App component", () => {
    render(<App/>);
  })
})

 