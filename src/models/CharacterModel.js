import { observable, computed, action } from "mobx";

export default class CharacterStore {
  @observable name = "Some name";
  @observable level = 127;

  @observable
  attributes = {
    Strength: 10,
    Endurance: 10,
    Coordination: 10,
    Quickness: 10,
    Focus: 10,
    Self: 10
  };

  @observable
  skills = [
    {
      name: "Alchemy",
      training: "TRAINED"
    }
  ];

  @computed
  get Alchemy() {
    return Math.round(this.attributes.Focus / 2);
  }

  @computed
  get getSumOfCreation() {
    return (
      this.attributes.Strength +
      this.attributes.Endurance +
      this.attributes.Coordination +
      this.attributes.Quickness +
      this.attributes.Focus +
      this.attributes.Self
    );
  }

  @computed
  get specializedSkills() {
    return this.skills.filter(skill => skill.training === "SPECIALIZED");
  }

  get trainedSkills() {
    return this.skills.filter(skill => skill.training === "TRAINED");
  }

  compareStructural: true;
}
