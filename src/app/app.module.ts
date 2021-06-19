import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { registerLocaleData } from '@angular/common';
import localePL from '@angular/common/locales/pl';
registerLocaleData(localePL);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
