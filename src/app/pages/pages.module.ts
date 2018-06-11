import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PaginationModule } from '../component/pagination';
import { BaseLayoutModule } from '../layouts/index';

import { PagesRoutingModule } from './pages.routing';
import { PagesComponent } from './pages.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { BlogArticleComponent } from './blog/article/article.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { FileManagerFirebase } from './file-manager/file-manager.firebase';
import { ProjectComponent } from './project/project.component';

@NgModule({
  imports: [
    SharedModule,
    PaginationModule,
    PagesRoutingModule,
    BaseLayoutModule
  ],
  declarations: [
    PagesComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    BlogComponent,
    BlogArticleComponent,
    ProfileComponent,
    UserComponent,
    FileManagerComponent,
    ProjectComponent
  ],
  providers: [
    { provide: 'UserService', useClass: UserService },
    FileManagerFirebase
  ]
})
export class PagesModule {}
