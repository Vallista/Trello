import React from 'react'
import { shallow } from 'enzyme'
import Block, { Direction } from './index'

describe('<Block />', () => {
  it('성공적으로 렌더링 되어야 한다.', () => {
    const text = 'Hello World'
    const wrapper = shallow(<Block>{text}</Block>)

    expect(wrapper.text()).toEqual(text)
  })

  it('Props에 아무런 인자가 들어가지 않을때에는 기본값이 들어가야 한다.', () => {
    const wrapper = shallow(<Block />)

    expect(wrapper.prop('className')).toEqual('default row center-center')
  })

  it('Direction이 column일 때 sort에 c_ 값이 들어가야 한다.', () => {
    const wrapper = shallow(<Block direction={Direction.COLUMN} />)

    expect(wrapper.prop('className')).toEqual('default column c-center-center')
  })
})
