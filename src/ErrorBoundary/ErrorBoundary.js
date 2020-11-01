import React, { Component } from 'react'

export class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: ''
    }

    render() {
        if (this.state.hasError) {
            return (<h1>{this.state.errorMessage}</h1>)
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary
