import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';

import { TagSelectModule } from '../component/tag-select';
import { LoadingModule } from '../component/loading';
import { GithubButtonModule } from '../component/github-button';
import { PaginationModule } from '../component/pagination';

import { NavigationRoutingModule } from './navigation.routing';
import { NavigationComponent } from './navigation.component';
import { NavigationService } from './navigation.service';
import { ActionComponent } from './action/action.component';

@NgModule({
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    NavigationRoutingModule,
    PaginationModule,
    TagSelectModule,
    LoadingModule,
    GithubButtonModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [NavigationComponent, ActionComponent],
  entryComponents: [ActionComponent],
  providers: [{ provide: 'NavigationService', useClass: NavigationService }]
})
export class NavigationModule {}
