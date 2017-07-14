import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { QuoteItemComponent } from './quote-stuff/quote-item/quote-item.component';
import { QuoteListComponent } from './quote-stuff/quote-list/quote-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    QuoteItemComponent,
    QuoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
