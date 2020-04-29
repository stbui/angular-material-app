import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../@stbui/shared/shared.module';
import {
  PaginationModule,
  GithubButtonModule,
  LoadingModule
} from '../component';
import { FileSizePipe } from '../component/file-upload/file-size.pipe';
import { BaseLayoutModule } from '../layouts';

import { PagesRoutingModule } from './pages.routing';
import { UserModule } from './user/user.module';
import { PagesComponent } from './pages.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

import { BlogComponent } from './blog/blog.component';
import { BlogArticleComponent } from './blog/article/article.component';
import { BlogService } from './blog/blog.service';

import { ProfileComponent } from './profile/profile.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { FileManagerFirebase } from './file-manager/file-manager.firebase';
import { FileManagerService } from './file-manager/file-manager.service';
import { ProjectComponent } from './project/project.component';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    PaginationModule,
    PagesRoutingModule,
    BaseLayoutModule,
    GithubButtonModule,
    LoadingModule,
    UserModule
  ],
  declarations: [
    PagesComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    BlogComponent,
    BlogArticleComponent,
    ProfileComponent,
    FileManagerComponent,
    ProjectComponent,
    FileSizePipe
  ],
  providers: [FileManagerFirebase, FileManagerService, BlogService]
})
export class PagesModule { }
