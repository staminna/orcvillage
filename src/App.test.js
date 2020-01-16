import React from 'react';
import App from './App'
import SopraList from './component/SopraList';
import waitUntil from 'async-wait-until';
import Enzyme, { shallow } from 'enzyme';
import nock from 'nock';
import Adapter from 'enzyme-adapter-react-16';

const getIssuesResponse = import('./tests/exampleResponse');
Enzyme.configure({ adapter: new Adapter() });


describe('<App />', () => {
  beforeAll(() => {
    // Prepare nock to respond to a request
    // to the SopraList API.
    // In this case our test will always think that london
    // is sunny.
    nock('https://SopraList.example.com/api')
        .get('/SopraList?q=london')
        .reply(200, getIssuesResponse);
    });
    it('Component fetching SopraList from API', async (done) => {
        const root = shallow(<App />);
        let componentsSopraList = {};
        // We wait until the state has a SopraList summary, but we
        // don't care yet about the content.
        await waitUntil(() => root.state('SopraList').summary !== null);
        // It is better to have the expectation here and not inside
        // the waitUntil condition.
        expect(componentsSopraList.summary).toEqual('sunny');
        done();
    });
});