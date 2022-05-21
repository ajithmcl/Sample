import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataTableComponent } from './data-table/data-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './helpers/search.pipe';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoaderInterceptor } from './loader.interceptor';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    SearchPipe,
    EditUserComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
