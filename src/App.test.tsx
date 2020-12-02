
import React from 'react';
import { cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from './App';

describe("App component tests", ()=>{

  let wrapper:any;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  afterEach(cleanup);

  it("renders without crashing", () => {
      expect(wrapper.length).toBe(1)
  });

  it("renders correctly", () => {
    expect(wrapper.type()).toEqual('div');
  });

  it("render header corectly", ()=>{
    const header = <b>STARWARS HEROES</b>;
    expect(wrapper.contains(header)).toEqual(true);
  })

  it("render search component corectly", ()=>{
    expect(wrapper.find('[data-testid="searchCompoent"]')).toHaveLength(1);
  })

  it('snapshop App', () => {
      const tree = renderer.create(<App />).toJSON();
      expect(tree).toMatchSnapshot();         
  });
  
});