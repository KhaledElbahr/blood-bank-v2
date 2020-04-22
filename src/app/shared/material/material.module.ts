import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material Modules
import {MatInputModule, MatGridListModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    CommonModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatSelectModule,
  ]
})
export class MaterialModule { }
