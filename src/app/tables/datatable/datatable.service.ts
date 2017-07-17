import { Injectable } from '@angular/core';

@Injectable()
export class DataTableService {

  private dataStore;

  get data() {
    return this.dataStore;
  }

  constructor() {
  }

  select(options) {
    const d = [
      { id: '1', name: "李彦龙" },
      { id: '2', name: "郁梦寒" },
      { id: '3', name: "亥夏真" },
      { id: '4', name: "汗水凡" },
      { id: '5', name: "歧骏桀" },
      { id: '6', name: "潜云溪" },
      { id: '7', name: "无夜春" },
      { id: '6', name: "鄂叶彤" },
      { id: '8', name: "鲁文彬" },
      { id: '9', name: "寻涵阳" },
      { id: '10', name: "董晨风" },
      { id: '11', name: "蒙白梅" },
      { id: '12', name: "纪沛春" }
    ];
    this.dataStore = d;
  }

  add(data) {
    let newData = Object.assign(this.getLastId(), data);
    this.dataStore.push(newData);
  }

  find(data) {
  }

  update(data) {
  }

  delete(data) {
    let result = this.dataStore.filter((v, k)=> {
      if(v.id == data.id) {
        return v;
      }
    });

    const i = this.dataStore.indexOf(result[ 0 ]);
    this.dataStore = [
      ...this.dataStore.slice(0, i),
      ...this.dataStore.slice(i + 1)
    ];
  }

  count() {
    return this.dataStore.length;
  }

  where() {
  }

  getLastId() {
    let pop = this.dataStore.pop();
    let id = pop.id;

    return { id };
  }

}
