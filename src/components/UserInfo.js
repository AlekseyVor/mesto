export default class UserInfo {
    constructor({nameSelector,jobSelector,avatarSelector}) {
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
    this._userValues = {};
    this._userValues[this._name.id] = this._name.textContent;
    this._userValues[this._job.id] = this._job.textContent;

    return this._userValues;
    }

    setUserInfo(userInput) {
        this._name.textContent = userInput.name;
        this._job.textContent = userInput.about;
        
    }

    setUserAvatar(avatarInput) {
        this._avatar.src = avatarInput.avatar;
    } 

}