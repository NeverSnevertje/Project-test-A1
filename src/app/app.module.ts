import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GeneratorComponent } from './generator/generator.component';
import { LeuksComponent } from './leuks/leuks.component'

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, GeneratorComponent, LeuksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
