import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoaderInterceptor } from './loader.interceptor';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsModule } from './posts/posts.module';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';
import { SearchPipe } from './helpers/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent,
    DataBindingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PostsModule,
    UsersModule,
    SharedModule
  ],
  providers: [
    SearchPipe,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
