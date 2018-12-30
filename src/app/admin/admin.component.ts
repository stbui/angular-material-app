import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
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

  navigationModel;
  navigationModelChangeSubscription: Subscription;

  private _media$: ReplaySubject<MediaChange> = new ReplaySubject(1);
  private _mediaSubscription: Subscription;

  sidenavOpen: boolean = true;
  sidenavMode: string = 'side';
  sidenavAlign: string = 'start';
  customizerSidenavAlign: string = 'end';

  title = '中后台前端应用框架 - Power by stbui';

  get media$(): Observable<MediaChange> {
    return this._media$.asObservable();
  }

  constructor(
    media: ObservableMedia,
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

    media
      .asObservable()
      .subscribe(
        res => this._media$.next(res),
        err => this._media$.error(err),
        () => this._media$.complete()
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
    this._mediaSubscription = this.media$.subscribe((change: MediaChange) => {
      let isMobile = change.mqAlias === 'xs' || change.mqAlias === 'sm';

      this.sidenavMode = isMobile ? 'over' : 'side';
      this.sidenavOpen = !isMobile;
    });

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 2000);
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
