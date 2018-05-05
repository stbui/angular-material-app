import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavigationModel } from './navigation.model';

@Injectable()
export class NavigationService {

  onNavigationCollapseToggle = new EventEmitter<any>();
  onNavigationCollapseToggled = new EventEmitter<any>();
  onNavigationModelChange: BehaviorSubject<any> = new BehaviorSubject({});
  navigationModel: NavigationModel;


  constructor() {
    this.navigationModel = new NavigationModel();
    this.onNavigationModelChange.next(this.navigationModel.model);
  }

  getNavigationModel() {
    return this.navigationModel.model;
  }

  setNavigationModel(model) {
    this.navigationModel = model;
    this.onNavigationModelChange.next(this.navigationModel.model);
  }

  addNavigationItem() {

  }

  getNavigationItem() {

  }

  findNavigationItemById(location, navigation?) {
    if (!navigation) {
      navigation = this.navigationModel.model;
    }

    for (const navItem of navigation) {
      if (navItem.id === location[0]) {
        if (location.length > 1) {
          location.splice(0, 1);
          return this.findNavigationItemById(location, navItem.children);
        } else {
          return navItem;
        }
      }
    }
  }
}
