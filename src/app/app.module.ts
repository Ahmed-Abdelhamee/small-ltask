import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './admin/dash-board/dash-board.component';
import { HomeComponent } from './home/home.component';
import { ShopsComponent } from './shops/shops.component';
import { ShopsProductsComponent } from './shops-products/shops-products.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideStorage,getStorage, StorageModule } from '@angular/fire/storage';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import {HttpClientModule} from '@angular/common/http'
import {AngularFireModule, FIREBASE_OPTIONS} from '@angular/fire/compat'// write this special code for upload img 
import {AngularFireStorageModule} from '@angular/fire/compat/storage';// write this special code for upload img 
import { CategoryComponent } from './category/category.component'
import { HashLocationStrategy ,LocationStrategy  } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ZfooterComponent } from './zfooter/zfooter.component';
import { UrlSafePipe } from './pipes/url-safe.pipe';
import { ChatUsComponent } from './chat-us/chat-us.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    HomeComponent,
    ShopsComponent,
    ShopsProductsComponent,
    CategoryComponent,
    HeaderComponent,
    ZfooterComponent,
    UrlSafePipe,
    ChatUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideFunctions(() => getFunctions()),
    StorageModule,
    // write this special code for upload img 
    AngularFireModule,
    AngularFireStorageModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    
  ],
  providers: [
    // write this special code for upload img 
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
