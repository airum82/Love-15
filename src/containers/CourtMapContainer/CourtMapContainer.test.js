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

  it('removeMapKey should return a new array with map key as false', () => {
    const mockCourts = [
      { name: 'bob', map: true},
      { name: 'sally' }
    ];
    const wrapper = shallow(<CourtMapContainer closeCourts={mockCourts}/>);
    const expectedOutput = [
      { name: 'bob', map: false },
      { name: 'sally' }
    ];
    expect(wrapper.instance().removeMapKey('bob')).toEqual(expectedOutput);
  })

  it('clicking the back button should call removeMapKey and handleRemoveMapKey')
})