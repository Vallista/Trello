import React from 'react'
import { shallow } from 'enzyme'
import Card from './index'

describe('<Card />', () => {
  it('children 테스트', () => {
    const welcome = <h2>Hello World</h2>
    const wrapper = shallow(<Card>{welcome}</Card>)

    expect(wrapper).toContainReact(welcome)
  })

  it('Prop 적용 테스트: className', () => {
    const className = 'test-class'
    const wrapper = shallow(<Card className={className}>Hello World</Card>)

    expect(wrapper.props().className).toEqual(`default ${className}`)
  })

  it('Prop 적용 테스트: radius', () => {
    const radius = 50
    const wrapper = shallow(<Card radius={radius}>Hello World</Card>)

    expect(wrapper.props().style.borderRadius).toEqual('50px')
  })
})

// @testing-library/react를 사용한 방법
// import { render } from '@testing-library/react'

// it('renders welcome message', () => {
//   const { getByText } = render(<Card>Learn React</Card>)
//   expect(getByText('Learn React')).toBeInTheDocument()
// })
