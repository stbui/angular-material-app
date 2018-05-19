import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'stbui-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  navigationModel: any[];
  navigationModelChangeSubscription: Subscription;

  constructor(private service: NavigationService) {
    this.navigationModelChangeSubscription = this.service.onNavigationModelChange.subscribe(
      navigation => {
        this.navigationModel = navigation;
      }
    );
  }

  ngOnInit() {
    this.addSubitemToNavigation()
  }

  ngOnDestroy() {
    this.navigationModelChangeSubscription.unsubscribe();
  }

  updateExtendBadge() {
    const extendNavItem = this.service.getNavigationItem('extend');
    extendNavItem.badge.title = 6;
  }

  addSubitemToNavigation() {
    const newNavItem = {
      id: 'sub-item',
      title: '动态添加菜单',
      type: 'item',
      url: '/apps/navigation'
    };

    this.service.addNavigationItem('extend', newNavItem);
  }
}
