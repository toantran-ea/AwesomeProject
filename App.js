import React from 'react'
import App from './src/App'

export default class MyAwesomeApp extends React.Component {
  constructor() {
    super();
    this.state  = {
      isReady: false
    }
  }

  render() {
    return <App />
  }
}
