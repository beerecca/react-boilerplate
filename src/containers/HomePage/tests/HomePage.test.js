import React from 'react';
import {shallow} from 'enzyme';
//Test the component only, without connected Redux state
import {HomePage} from '../HomePage';
import Loading from '../../../components/Loading/Loading';

describe('HomePage', () => {
  it('should render self and Loading if isLoading is true', () => {
    const container = shallow(<HomePage isLoading={true}/>);
    expect(container.find(Loading)).toHaveLength(1);
  });

  it('should render self and title if isLoading is false', () => {
    const container = shallow(<HomePage isLoading={false}/>);
    expect(container.find('h1').text()).toBe('Home page');
  });
});
