export class UserInfo {
  constructor({ nameSelector, professionSelector }) {
    this._nameSelector = nameSelector;
    this._professionSelector = professionSelector;
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      profession: this._professionSelector.textContent,
    };
  }

  setUserInfo(data) {
    this._nameSelector.textContent = data.name;
    this._professionSelector.textContent = data.profession;
  }
}
