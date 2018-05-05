import { Component, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { ConfigService } from '../core/config.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  settings: any;
  onSettingsChanged: Subscription;
  layoutMode = false;

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

  constructor(media: ObservableMedia, private config: ConfigService) {
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

  /**
   * @param event {Event} 事件
   * @param scrollContainer {Object} 容器dom
   */
  onActivate(event, scrollContainer) {
    scrollContainer.scrollTop = 0;
  }
}
