import React from 'react';
import { shallow } from 'enzyme';
import { CourtsContainer } from './CourtsContainer';
import { CourtCard } from '../../components/CourtCard/CourtCard';

describe('CourtsContainer', () => {

  it('should match snapshot upon initial render', () => {
    const wrapper = shallow(<CourtsContainer closeCourts={[]}/>)

    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot upon receiving closeCourts props', () => {
    const mockCourts = [{}, {}];
    const wrapper = shallow(<CourtsContainer closeCourts={mockCourts} />);
    
    expect(wrapper).toMatchSnapshot();
  })

  it('makeMapKey should call handleSubmitCourts with correct params', () => {
    const mockCourts = [{ name: 'bob'}, {}];
    const mockHandleSubmitCourts = jest.fn();
    const expectedParams = [{ name: 'bob', map: true }, {}];
    const wrapper = shallow(<CourtsContainer
      closeCourts={mockCourts}
      handleSubmitCourts={mockHandleSubmitCourts} />
    );
    wrapper.instance().makeMapKey('bob');
    expect(mockHandleSubmitCourts).toHaveBeenCalledWith(expectedParams);
  })

  it('makeCourts should return an array of court components', () => {
    const mockMakeMapKey = jest.fn()
    const mockCourts = [
      { name: 'jim' , location: 'over there'}, 
      { name: 'sarah', location: 'not here'}
    ];
    const wrapper = shallow(<CourtsContainer
      closeCourts={mockCourts}/>);
    const expectedOutput = [
      <CourtCard
        key={0}
        name={'jim'}
        location={'over there'}
        makeMapKey={wrapper.instance().makeMapKey}
      />,
      <CourtCard
        key={1}
        name={'sarah'}
        location={'not here'}
        makeMapKey={wrapper.instance().makeMapKey}
      />
    ];
    expect(wrapper.instance().makeCourts()).toEqual(expectedOutput);
    
  })

})