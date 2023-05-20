(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n,r){var o=r.cardTemplate,i=r.handleCardClick,u=r.deleteCards,a=r.handleLike,l=r.handleDeleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._handleCardClick=i,this._cardTemplate=o,this._id=t._id,this._owner=t.owner,this._likes=t.likes,this._userId=n,this._deleteCard=u,this._handleLike=a,this._handleDeleteLike=l,this._countLike=t.likes.length}var n,r;return n=e,(r=[{key:"_getCardTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".element").cloneNode(!0)}},{key:"createCard",value:function(){return this._cardTemplate=this._getCardTemplate(),this._cardImage=this._cardTemplate.querySelector(".element__image"),this._cardText=this._cardTemplate.querySelector(".element__text"),this._cardText.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTemplate.id=this._id,this._checkLike(),this._owner._id!==this._userId&&(this._cardTemplate.querySelector(".element__trash-button").style.display="none"),this._addTemplateEvent(),this._cardTemplate}},{key:"_addTemplateEvent",value:function(){var e=this;this._likeButton=this._cardTemplate.querySelector(".element__icon"),this._likeButton.addEventListener("click",(function(){e._showLike()})),this._cardTemplate.querySelector(".element__trash-button").addEventListener("click",(function(){e._deleteCard()})),this._cardImage.addEventListener("click",(function(){e._handleCardClick()}))}},{key:"_checkLike",value:function(){var e=this;this._likes.forEach((function(t){t._id!==e._myId||e._likeIconElement.classList.add("element__icon_active")})),this._cardTemplate.querySelector(".like-count").textContent=this._countLike}},{key:"_showLike",value:function(){this._cardTemplate.querySelector(".element__icon").classList.contains("element__icon_active")?this._handleDeleteLike():this._handleLike()}},{key:"_toggleLike",value:function(e){this._likeButton.classList.toggle("element__icon_active"),this._cardTemplate.querySelector(".like-count").textContent=e.length}},{key:"_removeCard",value:function(){this._cardTemplate.remove(),this._cardTemplate=null}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners(),this._formElement.addEventListener("submit",(function(e){e.preventDefault()}))}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled",!0))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e.toggleButtonState()}))}))}},{key:"removeErrors",value:function(){var e=this,t=this._formElement.querySelectorAll(".popup__input-error"),n=this._formElement.querySelectorAll(".popup__input");t.forEach((function(e){e.textContent=""})),n.forEach((function(t){t.classList.remove(e._inputErrorClass)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var l=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,p(r.key),r)}}function f(e,t,n){return(t=p(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}var y=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),f(this,"_handleOverlayClickClose",(function(e){e.target.classList.contains("popup")&&n.close()})),this._popupElement=t}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("click",this._handleOverlayClickClose),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),this._popupElement.removeEventListener("keydown",this._handleEscClose),this._popupElement.removeEventListener("click",this._handleOverlayClickClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.querySelector(".popup__close-button").addEventListener("click",(function(){e.close()}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=r,n._popupForm=n._popupElement.querySelector(".popup__form"),n._submitButton=n._popupElement.querySelector(".popup__submit-btn"),n._buttonText=n._submitButton.textContent,n}return t=u,(n=[{key:"getInputValues",value:function(){var e=this;return this._inputs=this._popupElement.querySelectorAll(".popup__input"),this._dataInputs={},this._inputs.forEach((function(t){e._dataInputs[t.name]=t.value})),this._dataInputs}},{key:"_handleSubmit",value:function(e){e.preventDefault(),this._handleFormSubmit(this.getInputValues()),this.close()}},{key:"setEventListeners",value:function(){h(b(u.prototype),"setEventListeners",this).call(this),this._submit=this._handleSubmit.bind(this),this._popupForm.addEventListener("submit",this._submit)}},{key:"load",value:function(e){e?(this._submitButton.classList.add("popup__submit-btn_loading"),this._submitButton.textContent="Сохранение..."):e||(this._submitButton.classList.remove("popup__submit-btn_loading"),this._submitButton.textContent=this._buttonText)}},{key:"close",value:function(){h(b(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popupElement.querySelector(".popup__image"),t._popupText=t._popupElement.querySelector(".popup__text-card-view"),t}return t=u,(n=[{key:"open",value:function(e){this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupText.textContent=e.name,k(w(u.prototype),"open",this).call(this)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}var P=function(){function e(t){var n=t.nameSelector,r=t.professionSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=n,this._professionSelector=r,this._avatarSelector=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameSelector.textContent,profession:this._professionSelector.textContent,avatar:this._avatarSelector.src}}},{key:"setUserInfo",value:function(e){this._nameSelector.textContent=e.name,this._professionSelector.textContent=e.about,this._avatarSelector.src=e.avatar}},{key:"setUserAvatar",value:function(e){this._avatarSelector.src=e.avatar}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}var q=function(){function e(t){var n=t.serverUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.serverUrl=n,this.headers=r}var t,n;return t=e,(n=[{key:"_sendRequest",value:function(e,t){return fetch("".concat(this.serverUrl).concat(e),t).then((function(e){return e.ok?e.json():e.ok?void 0:Promise.reject(e.status)}))}},{key:"getUserInfo",value:function(){return this._sendRequest("/users/me",{headers:this.headers})}},{key:"sendUserInfo",value:function(e){return this._sendRequest("/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.profession})})}},{key:"sendUserAvatar",value:function(e){return this._sendRequest("/users/me/avatar",{method:"PATCH",body:JSON.stringify({avatar:e.link}),headers:this.headers})}},{key:"getCards",value:function(){return this._sendRequest("/cards",{method:"GET",headers:this.headers})}},{key:"addCard",value:function(e){return this._sendRequest("/cards",{method:"POST",body:JSON.stringify({name:e.name,link:e.link}),headers:this.headers})}},{key:"addLike",value:function(e){return this._sendRequest("/cards/likes/".concat(e),{method:"PUT",headers:this.headers})}},{key:"deleteLike",value:function(e){return this._sendRequest("/cards/likes/".concat(e),{method:"DELETE",headers:this.headers})}},{key:"deleteCard",value:function(e){return this._sendRequest("/cards/".concat(e),{method:"DELETE",headers:this.headers})}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popupElement.querySelector("#delete-card-form"),t}return t=u,(n=[{key:"setHandleSubmit",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(),e.close()})),B(U(u.prototype),"setEventListeners",this).call(this)}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y),A=document.querySelector(".avatar-edit-button"),V=document.querySelector(".profile__edit-button"),F=document.querySelector(".popup_delete-card"),H=document.querySelector(".profile__avatar"),N=document.querySelector(".profile__add-button"),J=document.querySelector(".popup_edit-avatar-profile"),z=document.querySelector(".popup_edit-profile"),G=document.querySelector(".popup_add-card"),M=document.querySelector(".popup__input_user_name"),K=document.querySelector(".popup__input_user_profession"),Q=document.querySelector(".profile__name"),W=document.querySelector(".profile__profession"),X=document.querySelector(".element-grid"),Y=document.querySelector(".popup_card-view"),Z=document.getElementById("edit-profile-form"),$=document.getElementById("add-card-form"),ee=document.getElementById("edit-avatar-profile-form"),te={inputSelector:".popup__input",submitButtonSelector:".popup__submit-btn",inactiveButtonClass:"popup__submit-btn_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},ne=new q({serverUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"0d9e5e06-5fb6-4948-aef4-c066b6b409b2","Content-Type":"application/json"}}),re=new i(te,Z),oe=new i(te,$),ie=new P({nameSelector:Q,professionSelector:W,avatarSelector:H}),ue=new D(F);ue.setEventListeners();var ae=new _(z,{handleFormSubmit:function(){ae.load(!0);var e=ae.getInputValues();ne.sendUserInfo(e).then((function(e){ie.setUserInfo(e),ae.close()})).catch((function(e){console.log(e)})).finally((function(){ae.load(!1)}))}});ae.setEventListeners(),V.addEventListener("click",(function(){var e=ie.getUserInfo();M.value=e.name,K.value=e.profession,ae.open(),re.enableValidation()}));var le=new O(Y);le.setEventListeners();var ce=new _(J,{handleFormSubmit:function(){ce.load(!0);var e=ce.getInputValues();ne.sendUserAvatar(e).then((function(e){ie.setUserAvatar(e),ce.close()})).catch((function(e){console.log(e)})).finally((function(){ce.load(!1)}))}});ce.setEventListeners();var se=new i(te,ee);function fe(e,t){var r=new n(e,t,{cardTemplate:"#card-tempalte",handleCardClick:function(){le.open(e)},deleteCards:function(){ue.open(),ue.setHandleSubmit((function(){ne.deleteCard(e._id).then((function(){r._removeCard()})).catch((function(e){console.log(e)}))}))},handleLike:function(){ne.addLike(e._id).then((function(e){r._toggleLike(e.likes)})).catch((function(e){console.log(e)}))},handleDeleteLike:function(){ne.deleteLike(e._id).then((function(e){r._toggleLike(e.likes)})).catch((function(e){console.log(e)}))}});return r.createCard(e)}A.addEventListener("click",(function(){se.removeErrors(),se.enableValidation(),ce.open()}));var pe=new l({renderer:function(e,t){var n=fe(e,t);pe.addItem(n)}},X),ye=new _(G,{handleFormSubmit:function(){ye.load(!0);var e=ye.getInputValues();ne.addCard(e).then((function(e){var t=fe(e,e.owner._id);pe.addItem(t),ye.close()})).catch((function(e){console.log(e)})).finally((function(){ye.load(!1)}))}});ye.setEventListeners(),N.addEventListener("click",(function(){ye.open(),oe.enableValidation()})),Promise.all([ne.getUserInfo(),ne.getCards()]).then((function(e){ie.setUserInfo(e[0]);var t=e[1];pe.renderItems(t)})).catch((function(e){console.log(e)}))})();