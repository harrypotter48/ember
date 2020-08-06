import { isEmpty } from "lodash";

const TOKEN_KEY = "jwtToken";
const USER_INFO = "userInfo";

const { parse } = JSON;
const { stringify } = JSON;

export const isBrowser = () => typeof window !== "undefined";

const storage = {
  /**
   * Remove an item from the used storage
   * @param  {String} key [description]
   */
  clear(key) {
    if (isBrowser() && localStorage && localStorage.getItem(key)) {
      return localStorage.removeItem(key);
    }

    if (isBrowser() && sessionStorage && sessionStorage.getItem(key)) {
      return sessionStorage.removeItem(key);
    }

    return null;
  },

  /**
   * Clear all app storage
   */
  clearAppStorage() {
    if (isBrowser() && localStorage) {
      localStorage.clear();
    }

    if (isBrowser() && sessionStorage) {
      sessionStorage.clear();
    }
  },

  clearToken(tokenKey = TOKEN_KEY) {
    return storage.clear(tokenKey);
  },

  clearUserInfo(userInfo = USER_INFO) {
    return storage.clear(userInfo);
  },

  /**
   * Returns data from storage
   * @param  {String} key Item to get from the storage
   * @return {String|Object}     Data from the storage
   */
  get(key) {
    if (isBrowser() && localStorage && localStorage.getItem(key)) {
      return parse(localStorage.getItem(key)) || null;
    }

    if (isBrowser() && sessionStorage && sessionStorage.getItem(key)) {
      return parse(sessionStorage.getItem(key)) || null;
    }

    return null;
  },

  getToken(tokenKey = TOKEN_KEY) {
    return storage.get(tokenKey);
  },

  getUserInfo(userInfo = USER_INFO) {
    return storage.get(userInfo);
  },

  /**
   * Set data in storage
   * @param {String|Object}  value    The data to store
   * @param {String}  key
   * @param {Boolean} isLocalStorage  Defines if we need to store in localStorage or sessionStorage
   */
  set(value, key, isLocalStorage) {
    if (isEmpty(value)) {
      return null;
    }

    if (isBrowser() && isLocalStorage && localStorage) {
      return localStorage.setItem(key, stringify(value));
    }

    if (isBrowser() && sessionStorage) {
      return sessionStorage.setItem(key, stringify(value));
    }

    return null;
  },

  setToken(value = "", isLocalStorage = false, tokenKey = TOKEN_KEY) {
    return storage.set(value, tokenKey, isLocalStorage);
  },

  setUserInfo(value = "", isLocalStorage = false, userInfo = USER_INFO) {
    return storage.set(value, userInfo, isLocalStorage);
  },
};

export default storage;
