import React, { Component } from 'react';
// 'allowTopMenuButton' should be set to 'true' to see this example. Also may need to remove AIC customizations to view.
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