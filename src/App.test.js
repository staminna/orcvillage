import React from 'react';
import App from './App'
import OrcList from './component/OrcList';
import waitUntil from 'async-wait-until';
import Enzyme, { shallow } from 'enzyme';
import nock from 'nock';
import Adapter from 'enzyme-adapter-react-16';

const getIssuesResponse = import('./tests/exampleResponse');
Enzyme.configure({ adapter: new Adapter() });


describe('<App />', () => {
  beforeAll(() => {
    // Prepare nock to respond to a request
    // to the OrcList API.
    // In this case our test will always think that london
    // is sunny.
    nock('https://OrcList.example.com/api')
        .get('/OrcList?q=london')
        .reply(200, getIssuesResponse);
    });
    it('Component fetching OrcList from API', async (done) => {
        const root = shallow(<App />);
        let componentsOrcList = {};
        // We wait until the state has a OrcList summary, but we
        // don't care yet about the content.
        await waitUntil(() => root.state('OrcList').summary !== null);
        // It is better to have the expectation here and not inside
        // the waitUntil condition.
        expect(componentsOrcList.summary).toEqual('sunny');
        done();
    });
});