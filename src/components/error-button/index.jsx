import React, { Component } from 'react';
import './error-button.scss';

export default class ErrorButton extends Component {
  state = {
    renderError: false,
  };

  render() {
    const { className } = this.props;
    console.log(this.props);
    if (this.state.renderError) {
      this.foo.bar = 0;
    }
    return (
      <button
        className={`error-button btn btn-danger m btn-lg${'' || ' ' + className}`}
        onClick={() => this.setState({ renderError: true })}
      >
        Throw Error
      </button>
    );
  }
}
