import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'stbui-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  styleUrls: ['./toolbar-user.component.scss']
})
export class ToolbarUserComponent implements OnInit {

  isOpen: boolean = false;
  currentUser = null;

  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }

    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }

  constructor(private _elementRef: ElementRef,
              private router: Router,
              private auth: AuthService) {
    this.currentUser = this.auth;
  }

  ngOnInit() {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/sigin']);
    });
  }
}
