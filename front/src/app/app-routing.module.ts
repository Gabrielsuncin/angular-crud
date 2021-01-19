import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import './views/home/home.component';
import { HomeComponent } from './views/home/home.component';
import './views/products/products.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { NewsComponent } from './views/news/news.component';
import { OrcamentosComponent } from './views/orcamentos/orcamentos.component';



const routes: Routes = [{
  path: "",
  component: HomeComponent
}, 
{
  path: "products",
  component: ProductsComponent
},
{
  path: "noticias",
  component: NewsComponent
},
{
  path: "orcamentos",
  component: OrcamentosComponent
},

{
  path: "products/create",
  component: ProductCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
