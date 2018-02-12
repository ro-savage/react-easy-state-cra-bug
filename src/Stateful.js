import React from 'react'
import { view } from 'react-easy-state'

class Stateful extends React.Component {
  render() {
    return <div>Stateful Component</div>
  }
}

export default view(Stateful)