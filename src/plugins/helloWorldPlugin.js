import React, { Component } from 'react';

class helloWorld extends Component {
  render() {
    return (
      <div>HelloWorld</div>
    );
  }
}

export default {
  target: 'WindowTopMenu',
  mode: 'wrap',
  component: helloWorld,
}