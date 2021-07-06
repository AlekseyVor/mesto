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

    _checkResponse = (res) => {
      if(res.ok) {return res.json()}
      return Promise.reject(`Ошибка ${res.status}`)
    }

    getUserInfo = (url, type, token) => {
      return this._search(url, type, token)
      .then((res) => {return this._checkResponse(res)})
      
  }

    getInitialCards = (url, type, token) => {
      return this._search(url, type, token)
      .then((res) => {return this._checkResponse(res)});
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
    .then((res) => {return this._checkResponse(res)});
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
    .then((res) => {return this._checkResponse(res)});
}

  deleteCard = (url, type, token, cardid) => {
    return this._searchCardId(url, type, token, cardid)
    .then((res) => {return this._checkResponse(res)});
  }

  updateLike = (url, type, token, cardid) => {
    return this._searchCardId(url, type, token, cardid)
    .then((res) => {return this._checkResponse(res)});
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
    .then((res) => {return this._checkResponse(res)});
  }
}