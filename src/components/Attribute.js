import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class Attribute extends Component {
  render() {
    return (
      <li className="Attribute">
        {this.props.name}
        <input
          type="range"
          value={this.props.store.attributes[this.props.name]}
          onChange={event =>
            (this.props.store.attributes[this.props.name] = Number(
              event.target.value
            ))
          }
        />
        {this.props.store.attributes[this.props.name]}
      </li>
    );
  }
}
export default Attribute;
