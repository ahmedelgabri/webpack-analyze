import React, { Component } from 'react'
import { render } from 'react-dom'
import slug from 'slug'

const Input = ({ onChange }) => <input type='text' onChange={onChange} />

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: ''
    }

    this.handleEvent = this.handleEvent.bind(this)
  }

  handleEvent (e) {
    this.setState({ text: e.target.value.trim() })
  }

  render () {
    return (
      <div>
        <Input onChange={this.handleEvent} />
        <p>{slug(this.state.text) || 'Start typing...'}</p>
      </div>
    )
  }
}

render(<App />, document.querySelector('#App'))
