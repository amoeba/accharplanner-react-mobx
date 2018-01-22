import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import Attributes from "./Attributes";
import Skills from "./Skills";

@observer
class Character extends Component {
  render() {
    return (
      <div className="Character">
        <p>
          Name:{" "}
          <input
            type="text"
            value={this.props.store.name}
            onChange={event => (this.props.store.name = event.target.value)}
          />
          {this.props.store.name}
        </p>
        <p>Level: {this.props.store.level}</p>
        <Attributes
          store={this.props.store}
          attributes={this.props.store.attributes}
        />
        <Skills store={this.props.store} skills={this.props.store.skills} />
        {this.props.store.getSumOfCreation}
      </div>
    );
  }

  changeName = event => {
    this.props.store.name = event.target.value;
  };
}

export default Character;
