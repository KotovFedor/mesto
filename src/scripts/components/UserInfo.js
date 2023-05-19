export class UserInfo {
  constructor({ nameSelector, professionSelector, avatarSelector }) {
    this._nameSelector = nameSelector;
    this._professionSelector = professionSelector;
    this._avatarSelector = avatarSelector;
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      profession: this._professionSelector.textContent,
      avatar: this._avatarSelector.src,
    };
  }

  setUserInfo(data) {
    this._nameSelector.textContent = data.name;
    this._professionSelector.textContent = data.about;
    this._avatarSelector.src = data.avatar;
  }

  setUserAvatar(data) {
    this._avatarSelector.src = data.avatar;
  }
}
