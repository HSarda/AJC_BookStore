import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { PanierComponent } from './components/panier/panier.component';
import { PaymentComponent } from './components/payment/payment.component';


const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'books',component: BooksComponent},
  {path:"connexion", component:ConnexionComponent},
  {path:"paiement", component:PaymentComponent},
  {path:"panier", component:PanierComponent},
  {path: 'books/:id',component: BookDetailComponent},
  {path: '',redirectTo: 'home',pathMatch: 'full' },
  {path: '**',redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
