import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookTriPipe } from './pipes/book-tri.pipe';
import { NewComponent } from './components/new/new.component';
import { BestComponent } from './components/best/best.component';
import { PanierComponent } from './components/panier/panier.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    NavbarComponent,
    HomeComponent,
    BookDetailComponent,
    BookTriPipe,
    NewComponent,
    BestComponent,
    PanierComponent,
    ConnexionComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
