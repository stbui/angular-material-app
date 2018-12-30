import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  customizerSidenavAlign: string = 'end';
  navigationModel: any[];
  navigationModelChangeSubscription: Subscription;

  constructor(private navigationService: NavigationService) {
    this.navigationModelChangeSubscription = this.navigationService.onNavigationModelChange.subscribe(
      navigation => {
        this.navigationModel = navigation;
      }
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.navigationModelChangeSubscription.unsubscribe();
  }
}
