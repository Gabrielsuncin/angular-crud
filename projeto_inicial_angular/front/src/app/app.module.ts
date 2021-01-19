import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';

import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'
import { NavComponent } from './components/template/nav/nav.component'
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component'

import { MatCardModule } from '@angular/material/card';
import { ProductsComponent } from './views/products/products.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { OrcamentosComponent } from './views/orcamentos/orcamentos.component';
import { NewsComponent } from './views/news/news.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductsComponent,
    ProductCreateComponent,
    OrcamentosComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
