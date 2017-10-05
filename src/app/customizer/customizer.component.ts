import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CustomizerInterface} from './customizer.interface';

@Component({
  selector: 'stbui-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {

  _theme = {
    dark: {
      header: 'stbui-white',
      aside: 'stbui-default',
      logo: 'stbui-default'
    },
    light: {
      header: 'stbui-white',
      aside: 'stbui-primary',
      logo: 'stbui-primary'
    },
    default: {
      header: 'stbui-white',
      aside: 'stbui-default',
      logo: 'stbui-default'
    },
    primary: {
      header: 'stbui-primary',
      aside: 'stbui-primary',
      logo: 'stbui-primary',
      href: 'deeppurple-amber.css',
      isDark: false,
    },
    accent: {
      header: 'stbui-accent',
      aside: 'stbui-accent',
      logo: 'stbui-accent'
    },
    warn: {
      header: 'stbui-warn',
      aside: 'stbui-warn',
      logo: 'stbui-warn'
    }
  };


  themes = [
    {
      primary: '#673AB7',
      accent: '#FFC107',
      href: 'deeppurple-amber.css',
      isDark: false,
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      href: 'indigo-pink.css',
      isDark: false,
      isDefault: true,
    },
    {
      primary: '#E91E63',
      accent: '#607D8B',
      href: 'pink-bluegrey.css',
      isDark: true,
    },
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      href: 'purple-green.css',
      isDark: true,
    },
  ];

  currentTheme;

  @Output() theme = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    const theme = {
      primary: '#673AB7',
      accent: '#FFC107',
      href: 'deeppurple-amber.css',
      isDark: false,
    };
    // this.installTheme(theme);
  }

  selectTheme($event, type) {
    this.theme.emit(this._theme[type]);
  }

  installTheme(theme: CustomizerInterface) {
    this.currentTheme = this._getCurrentThemeFromHref(theme.href);
    if (theme.isDefault) {
      this.removeStyle('theme');
    } else {
      this.setStyle('theme', `assets/${theme.href}`);
    }
  }

  _getCurrentThemeFromHref(href: string): CustomizerInterface {
    return this.themes.find(theme => theme.href === href);
  }

  setStyle(key: string, href: string) {
    this.getLinkElementForKey(key).setAttribute('href', href);
  }

  removeStyle(key: string) {
    const existingLinkElement = this.getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }

  private getLinkElementForKey(key: string) {
    return this.getExistingLinkElementByKey(key) || this.createLinkElementWithKey(key);
  }

  private getExistingLinkElementByKey(key: string) {
    return document.head.querySelector(`link[rel="stylesheet"].${this.getClassNameForKey(key)}`);
  }

  private createLinkElementWithKey(key: string) {
    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.classList.add(this.getClassNameForKey(key));
    document.head.appendChild(linkEl);
    return linkEl;
  }

  private getClassNameForKey(key: string) {
    return `style-manager-${key}`;
  }
}
