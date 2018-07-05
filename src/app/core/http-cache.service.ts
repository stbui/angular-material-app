/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

const cachePersistenceKey = 'httpCache';

export interface HttpCacheEntry {
  lastUpdated: Date;
  data: HttpResponse<any>;
}

@Injectable()
export class HttpCacheService {
  private cachedData: { [key: string]: HttpCacheEntry } = {};
  private storage: Storage | null = null;

  constructor() {
    this.loadCacheData();
  }

  setCacheData(url: string, data: HttpResponse<any>, lastUpdated?: Date) {
    this.cachedData[url] = {
      lastUpdated: lastUpdated || new Date(),
      data: data
    };
    this.saveCacheData();
  }

  getCacheData(url: string): HttpResponse<any> | null {
    const cacheEntry = this.cachedData[url];

    if (cacheEntry) {
      return cacheEntry.data;
    }

    return null;
  }

  clearCache(url: string): void {
    delete this.cachedData[url];
    this.saveCacheData();
  }

  cleanCache(expirationDate?: Date) {
    if (expirationDate) {
      for (let key in this.cachedData) {
        if (expirationDate >= this.cachedData[key].lastUpdated) {
          delete this.cachedData[key];
        }
      }
    } else {
      this.cachedData = {};
    }
    this.saveCacheData();
  }

  getHttpCacheEntry(url: string): HttpCacheEntry | null {
    return this.cachedData[url] || null;
  }

  setPersistence(persistence?: 'local' | 'session') {
    this.cleanCache();
    this.storage =
      persistence === 'local' || persistence === 'session'
        ? window[persistence + 'Storage']
        : null;
    this.loadCacheData();
  }

  private saveCacheData() {
    if (this.storage) {
      this.storage[cachePersistenceKey] = JSON.stringify(this.cachedData);
    }
  }

  private loadCacheData() {
    const data = this.storage ? this.storage[cachePersistenceKey] : null;
    this.cachedData = data ? JSON.parse(data) : {};
  }
}
