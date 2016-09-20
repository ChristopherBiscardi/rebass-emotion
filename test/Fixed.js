
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Fixed, theme } from '../src'

let wrapper
let inner

const { fontSizes } = theme

test('renders', t => {
  wrapper = shallow(<Fixed />)
  inner = wrapper.first().shallow()
})

test('is a div', t => {
  t.true(inner.is('div'))
})

test('has a className', t => {
  t.is(inner.props().className, 'Fixed')
})

test('accepts custom className props', t => {
  wrapper = shallow(<Fixed className='foo' />)
  inner = wrapper.first().shallow()
  t.is(inner.props().className, 'Fixed foo')
})

test('accepts custom styles', t => {
  wrapper = shallow(<Fixed style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})

test('context styles override default styles', t => {
  wrapper = shallow(<Fixed />, {
    context: {
      rebass: {
        Fixed: {
          marginLeft: 0
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  t.is(inner.props().style.marginLeft, 0)
})

test('style props override context styles', t => {
  wrapper = shallow(
    <Fixed
      color='blue'
      style={{
      color: 'tomato'
    }} />, {
    context: {
      rebass: {
        Arros: {
          color: 'magenta'
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  t.is(inner.props().style.color, 'tomato')
})
