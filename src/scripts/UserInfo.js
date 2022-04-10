export class UserInfo {
  constructor({ profileNameSelector, profileJobSelector, profileAvatarSelector }) {
    this._nameElement = document.querySelector(profileNameSelector)
    this._jobElement = document.querySelector(profileJobSelector)
    this._avatarElement = document.querySelector(profileAvatarSelector)
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent
    }
  }

  setUserInfo(name, job) {
    this._nameElement.textContent = name
    this._jobElement.textContent = job
  }

  setUserAvatar(link) {
    this._avatarElement.src = link
  }
}
