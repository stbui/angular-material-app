/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

/**
 * localStorage 客户端数据
 * const db = new localStorageDb()
 */
export class localStorageDb {
  private _collections: string;
  private cacheData: any = [];
  private options: object = {};
  private prefix: string = 'stbui_';

  set collections(value) {
    this._collections = this.prefix + value;
  }

  get collections() {
    return this._collections;
  }

  constructor(name) {
    this.collections = name;

    // this.add({ id: 1, name: 'stbui-1', createTime: 1234 });
    // this.add({ id: 2, name: 'stbui-2', createTime: 1111 });
    // this.where({ id: 2 }).update({ name: 'test' });
    // this.where({ id: 2, name: 'stbui-2' }).update({ name: 'test' });
    // this.where({ id: 1 }).delete();
    // this.where({ id: 2 }).delete();
    // this.where({ id: 2, name: 'stbui-2' }).delete();
    // this.where({ id: 1 }).find();
    // this.where({ id: 2, name: 'stbui-2' }).find();
    // this.select();
  }

  where(options = {}) {
    this.options = Object.assign(this.options, options);
    return this;
  }

  find() {
    const _options = this.options;
    const _data = this.getItem();

    if (!_data.length) {
      return this.errorCode('find');
    }

    let result = [];

    _data.forEach((element, index) => {
      const intersect = this.hasIntersect(element, _options);
      if (intersect) {
        result = element;
      }
    });

    this.setItem(result);

    return _data;
  }

  select() {
    const _options = this.options;
    const _data = this.getItem();
    return _data;
  }

  /**
   *
   * @param data 添加的数据
   * @param options 选项
   */
  add(data, options = {}) {
    if (data instanceof Array) {
      this.cacheData = data;
    } else {
      this.cacheData.push(data);
    }

    this.setItem(this.cacheData);
  }

  update(data, options = {}) {
    const _options = this.options;
    const _data = this.getItem();

    if (!_data.length) {
      return this.errorCode('update');
    }

    const result = _data.map(field => {
      for (let i in _options) {
        if (field[i] == _options[i]) {
          for (let j in data) {
            field[j] = data[j];
          }
        }
      }

      return field;
    });

    this.setItem(result);

    return result;
  }

  delete(options = {}) {
    const _options = this.options;
    const _data = this.getItem();

    if (!_data.length) {
      return this.errorCode('delete');
    }

    let result = [];

    _data.forEach((element, index) => {
      const intersect = this.hasIntersect(element, _options);
      if (intersect) {
        result = [..._data.slice(0, index), ..._data.slice(index + 1)];
      }
    });

    this.setItem(result);

    return result;
  }

  /**
   * 读取数据
   * @return {object|Array} 返回数据
   */
  getItem() {
    const item = this._getItem(this.collections);
    let _data = this.deserialize(item);

    return _data;
  }

  /**
   * serialize后，写入数据
   * @param item
   */
  setItem(item = this.cacheData) {
    const _data = this.serialize(item);
    localStorage.setItem(this.collections, _data);
  }

  createTable() {
    this._setItem(this.collections, []);
  }

  dropTable() {
    this._removeItem(this.collections);
  }

  serialize(obj) {
    return JSON.stringify(obj);
  }

  deserialize(obj) {
    return JSON.parse(obj);
  }

  errorCode(method = '', message = '', code = -1) {
    return { code, method, message };
  }

  hasCollections() {
    const item = this._getItem(this.collections);
    return item ? true : false;
  }

  private _localStorage() {
    const storage = localStorage;
    return storage;
  }

  private _getItem(key) {
    const db = this._localStorage();
    return db.getItem(key);
  }

  private _setItem(key, value) {
    const db = this._localStorage();
    db.setItem(key, value);
    return this;
  }

  private _removeItem(key) {
    const db = this._localStorage();
    db.removeItem(key);
    return this;
  }

  private _guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return (
      s4() +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      s4() +
      s4()
    );
  }

  /**
   * let a = { a: 1, b: 2, c: 3 };
   * let b = { a: 1, b: 2 };
   */
  private hasIntersect(a, b) {
    let isCommon = true;

    for (let i in a) {
      for (let j in b) {
        if (isCommon && b[j] == a[j]) {
          isCommon = true;
          continue;
        } else {
          isCommon = false;
        }
      }
    }

    return isCommon;
  }
}
