import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExcelService } from './services/excel.service.ts';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ],
  providers: [ExcelService]
})
export class AppModule { }
