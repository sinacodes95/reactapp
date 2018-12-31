import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super()
    this.state = {
      componentErrored: false
    }
  }

  componentDidCatch() {

  }

  render() {
    return this.state.componentErrored ? (
      <h1>Ooooops, something went wrong</h1>
    ):
    (
      this.props.children
    );
  }
}

export default ErrorBoundry;