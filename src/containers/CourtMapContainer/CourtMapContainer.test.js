import React from 'react';
import { shallow } from 'enzyme';
import { CourtMapContainer } from './CourtMapContainer';

describe('CourtMapContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CourtMapContainer />);
  })

  it('should match snapshot when there is no court', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot when there is a court', () => {
    const mockCourt = {
      name: 'main',
      location: 'anywhere',
      makeMapKey: jest.fn()
    }
    wrapper = shallow(<CourtMapContainer court={mockCourt} />);
    expect(wrapper).toMatchSnapshot();
  })
})