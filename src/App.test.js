import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import Input from './component/input';
import fetchmock from 'jest-fetch-mock';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders welcome message', () => {
  const { getByText } = render(<App />);
  expect(getByText('Holla, Sopra Speria')).toBeInTheDocument();
});
