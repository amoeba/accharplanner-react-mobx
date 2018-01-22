import React, { Component } from "react";
import SkillGroup from "./SkillGroup";

class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <h2>Specialized</h2>
        <SkillGroup
          store={this.props.store}
          skills={this.props.store.specializedSkills}
        />
        <h2>Trained</h2>
        <SkillGroup
          store={this.props.store}
          skills={this.props.store.trainedSkills}
        />
      </div>
    );
  }
}

export default Skills;
