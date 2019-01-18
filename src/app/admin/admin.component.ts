import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { ConfigService } from '../core/config.service';
import { NavigationService } from '../component/navigation';

import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../core/translation.service';
import { locale as english } from './i18n/en';
import { locale as chinese } from './i18n/zh';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  settings: any;
  onSettingsChanged: Subscription;
  layoutMode: boolean = false;

  navigationModel: any;
  navigationModelChangeSubscription: Subscription;

  sidenavOpen: boolean = true;
  sidenavMode: string = 'side';
  sidenavAlign: string = 'start';
  customizerSidenavAlign: string = 'end';

  constructor(
    private mediaObserver: MediaObserver,
    private config: ConfigService,
    private translateService: TranslateService,
    private translationService: TranslationService,
    private navigationService: NavigationService
  ) {
    this.navigationModelChangeSubscription = this.navigationService.onNavigationModelChange.subscribe(
      navigation => {
        this.navigationModel = navigation;
      }
    );

    this.onSettingsChanged = this.config.onSettingsChanged.subscribe(
      settings => {
        this.settings = settings;

        if (this.settings.layout.mode === 'boxed') {
          this.layoutMode = true;
        } else {
          this.layoutMode = false;
        }

        if (this.settings.layout.navigation === 'left') {
          this.sidenavAlign = 'start';
          this.customizerSidenavAlign = 'end';
        } else if (this.settings.layout.navigation === 'right') {
          this.sidenavAlign = 'end';
          this.customizerSidenavAlign = 'start';
        } else {
          this.sidenavAlign = 'start';
          this.customizerSidenavAlign = 'end';
          this.sidenavOpen = false;
        }
      }
    );

    this.translateService.addLangs(['en', 'zh']);
    this.translateService.setDefaultLang('en');

    this.translationService.loadTranslations(english, chinese);
  }

  ngOnInit() {
    this.mediaObserver.media$.subscribe(change => {
      let isMobile = change.mqAlias === 'xs' || change.mqAlias === 'sm';
      this.sidenavMode = isMobile ? 'over' : 'side';
      this.sidenavOpen = !isMobile;
    });
  }

  ngOnDestroy() {
    this.navigationModelChangeSubscription.unsubscribe();
  }

  /**
   * @param event {Event} 事件
   * @param scrollContainer {Object} 容器dom
   */
  onActivate(event, scrollContainer) {
    scrollContainer.scrollTop = 0;
  }

  onSettingsChange(settings) {
    // this.config.setSettings(settings);
  }
}
