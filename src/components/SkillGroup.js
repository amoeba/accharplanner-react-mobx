import React, { Component } from "react";
import Skill from "./Skill";

class Skills extends Component {
  render() {
    const skillItems = this.props.skills.map(skill => {
      return <Skill key={skill.name} skill={skill} store={this.props.store} />;
    });

    return <ul className="SkillGroup">{skillItems}</ul>;
  }
}

export default Skills;
