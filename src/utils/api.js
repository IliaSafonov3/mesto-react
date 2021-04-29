class Api {
  constructor({ authorization, cardsUrl, userUrl }) {
    this._authorization = authorization;
    this._cardsUrl = cardsUrl;
    this._userUrl = userUrl;
  }
  _handleResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      console.log("_handleResponse rejection");
      return Promise.reject(response.statusText);
    }
  }
  _handleResponseError(err) {
    console.log("_handleResponseError");
    return console.log(err);
  }
  changeLikeCardStatus(id,isLiked){
    if (isLiked){
      return fetch(`${this._cardsUrl}likes/${id}`, {
        method: "PUT",
        headers: { authorization: this._authorization },
      }).then(this._handleResponse);
    }else{
      return fetch(`${this._cardsUrl}likes/${id}`, {
        headers: { authorization: this._authorization },
        method: "DELETE",
      }).then(this._handleResponse);
    }
  }

  addLike(cardId) {
    return fetch(`${this._cardsUrl}likes/${cardId}`, {
      method: "PUT",
      headers: { authorization: this._authorization },
    }).then(this._handleResponse);
  }
  deleteLike(cardId) {
    return fetch(`${this._cardsUrl}likes/${cardId}`, {
      headers: { authorization: this._authorization },
      method: "DELETE",
    }).then(this._handleResponse);
  }
  deleteCard(cardId) {
    return fetch(`${this._cardsUrl}${cardId}`, {
      headers: { authorization: this._authorization },
      method: "DELETE",
    }).then(this._handleResponse);
  }
  getInitialCards() {
    return fetch(this._cardsUrl, {
      headers: { authorization: this._authorization },
      method: "GET",
    }).then(this._handleResponse);
  }
  getUserInfo() {
    return fetch(this._userUrl, {
      headers: { authorization: this._authorization },
      method: "GET",
    }).then(this._handleResponse);
  }

  addCard(obj) {
    return fetch(this._cardsUrl, {
      method: "POST",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: obj.name,
        link: obj.link,
      }),
    }).then(this._handleResponse);
  }
  setProfile(obj) {
    return fetch(this._userUrl, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: obj.name,
        about: obj.about,
      }),
    }).then(this._handleResponse);
  }
  setAvatar(obj) {
    return fetch(`${this._userUrl}/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: obj.avatar,
      }),
    }).then(this._handleResponse);
  }
}

const api = new Api({
  authorization: "163e8218-97fb-40af-9cef-c2077618dc41",
  cardsUrl: "https://mesto.nomoreparties.co/v1/cohort-20/cards/",
  userUrl: "https://mesto.nomoreparties.co/v1/cohort-20/users/me",
});

export default api;
