import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class Skill extends Component {
  render() {
    return (
      <li className="Skill">
        {this.props.skill.name}: {this.props.store.Alchemy}
        <input
          type="checkbox"
          onChange={event =>
            (this.props.store.skills[0].training = "SPECIALIZED")
          }
        />
      </li>
    );
  }
}

export default Skill;
