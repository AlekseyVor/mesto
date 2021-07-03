export default class Api {
    constructor(config, option) {
        this._config = config;
        this._option = option; 
    }

    _search = (url, type, token) => {
      return fetch(`${this._option.baseUrl}${url}`,{
        method: `${type}`,
        headers: {
          authorization: `${token}`,
          'Content-Type': 'application/json'
        }})
    }

    _searchCardId = (url, type, token, cardid) => {
      return fetch(`${this._option.baseUrl}${url}${cardid}`,{
        method: `${type}`,
        headers: {
          authorization: `${token}`,
          'Content-Type': 'application/json'
        }})
    }

    submitStart = (popup) => {
    this._text = popup.querySelector(this._config.submitSelector).textContent
    popup.querySelector(this._config.submitSelector).textContent = this._config.loadingText;
    return this._text
    }

    submitEnd = (popup) => {
      popup.querySelector(this._config.submitSelector).textContent = this._text;
    }

    getUserInfo = (url, type, token) => {
      return this._search(url, type, token)
      .then((res) => {if(res.ok) {return res.json()}
      return Promise.reject(`Ошибка ${res.status}`)})
      
  }

    getInitialCards = (url, type, token) => {
      return this._search(url, type, token)
      .then((res) => {if(res.ok) {return res.json()}
      return Promise.reject(`Ошибка ${res.status}`)});
  }

    patchUserInfo = (url, type, token, userInfo) => {
    return fetch(`${this._option.baseUrl}${url}`,{
      method: `${type}`,
      headers: {
        authorization: `${token}`,
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        name: `${userInfo.name}`,
        about: `${userInfo.about}`
      })
    })
    .then((res) => {if(res.ok) {return res.json()}
    return Promise.reject(`Ошибка ${res.status}`)});
}

  postNewCard = (url, type, token, card) => {
    return fetch(`${this._option.baseUrl}${url}`,{
      method: `${type}`,
      headers: {
        authorization: `${token}`,
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        name: `${card.place}`,
        link: `${card.url}`
      })
    })
    .then((res) => {if(res.ok) {return res.json()}
    return Promise.reject(`Ошибка ${res.status}`)});
}

  deleteCard = (url, type, token, cardid) => {
    return this._searchCardId(url, type, token, cardid)
      .then((res) => {if(res.ok) {return res.json()}
      return Promise.reject(`Ошибка ${res.status}`)});
  }

  updateLike = (url, type, token, cardid) => {
    return this._searchCardId(url, type, token, cardid)
      .then((res) => {if(res.ok) {return res.json()}
      return Promise.reject(`Ошибка ${res.status}`)});
  }

  patchUserAvatar = (url, type, token, avatar) => {
    return fetch(`${this._option.baseUrl}${url}`,{
      method: `${type}`,
      headers: {
        authorization: `${token}`,
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        avatar: `${avatar}`,
      })
    })
    .then((res) => {if(res.ok) {return res.json()}
    return Promise.reject(`Ошибка ${res.status}`)});
  }
}