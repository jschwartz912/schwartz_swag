import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';

import { ProductService } from './services/product.service';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ProductsComponent],
  imports: [BrowserModule, HttpClientModule, RoutingModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
