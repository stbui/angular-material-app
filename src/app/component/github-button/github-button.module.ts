import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubButtonComponent } from './github-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GithubButtonComponent],
  exports: [GithubButtonComponent]
})
export class GithubButtonModule {}
