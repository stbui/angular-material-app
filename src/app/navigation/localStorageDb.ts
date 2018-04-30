/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

/**
 * localStorage模拟数据
 * const db = new localStorageDb()
 */
export class localStorageDb {
  private tableName: string;
  private cacheTableData: any;

  constructor(tableName) {
    this.tableName = tableName;
  }

  where(options = {}) {
    return this;
  }

  find() {}

  select() {
    return this.db();
  }

  add(data, options = {}) {
    let values = this.db().push(data);
    this._setItem(this.tableName, values);
  }

  update(data, options = {}) {}

  delete(options = {}) {}

  db() {
    this.createTable = this.table(this.tableName);
    return this.table(this.tableName);
  }
  /**
   *
   * @param {String} name 表名
   */
  table(table) {
    if (!table) return this;

    const result = this.tableExists();
    if (result) {
      return JSON.parse(result);
    }

    return this;
  }

  tableExists() {
    if (!this.tableName) return false;

    const res = this._getItem(this.tableName);
    if (res) {
      return res;
    }

    return false;
  }

  createTable() {
    this._setItem(this.tableName, []);
  }

  dropTable() {
    this._removeItem(this.tableName);
  }

  forceUpdate() {}

  serialize() {
    return JSON.stringify({});
  }

  cache() {}

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
}

const db = new localStorageDb('nav');
db.add({ id: 1, name: 'stbui', createTime: 1234 });
db.where({ id: 1 }).update({ name: 'stb' });
db.where({ id: 1 }).delete();
db.where({ id: 1 }).select();
