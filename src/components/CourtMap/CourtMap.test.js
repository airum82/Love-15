import { shallow } from 'enzyme';
import { CourtMap } from './CourtMap';
import React from 'react';

describe('CourtMap', () => {

  it('should match snapshot upon render', () => {
    const coord = {
      lat: 5.36,
      lng: 5.47
    }
    const google = {};
    const wrapper = shallow(
      <CourtMap
       coord={coord}
       google={google}
      />
    )
    expect(wrapper).toMatchSnapshot();
  })
})