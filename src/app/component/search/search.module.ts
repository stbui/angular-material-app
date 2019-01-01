import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [CommonModule, FormsModule, MatIconModule],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class SearchModule {}
