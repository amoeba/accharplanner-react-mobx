import React, { Component } from "react";
import Attribute from "./Attribute";

class Attributes extends Component {
  render() {
    const items = Object.keys(this.props.attributes).map(attribute => {
      return (
        <Attribute key={attribute} name={attribute} store={this.props.store} />
      );
    });

    return (
      <div className="Attributes">
        <ul>{items}</ul>
      </div>
    );
  }
}

export default Attributes;
