import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props); //props here allows us to access to this.props in the constructor
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. That is not good!</h1>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;