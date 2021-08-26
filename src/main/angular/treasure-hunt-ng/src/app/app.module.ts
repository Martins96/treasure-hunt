import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { HomeuserEnigmatextComponent } from './home-user/enigma/homeuser-enigma-text/homeuser-enigmatext.component';
import { HomeuserEnigmaimageComponent } from './home-user/enigma/homeuser-enigma-image/homeuser-enigmaimage.component';
import { HomeuserResourcefileComponent } from './home-user/resource/homeuser-resourcefile/homeuser-resourcefile.component';
import { HomeuserResourceTextComponent } from './home-user/resource/homeuser-resource-text/homeuser-resource-text.component';
import { HomeuserResourceImageComponent } from './home-user/resource/homeuser-resource-image/homeuser-resource-image.component';
import { HomeuserResourcePdfComponent } from './home-user/resource/homeuser-resource-pdf/homeuser-resource-pdf.component';
import { HomeuserEnigmafileComponent } from './home-user/enigma/homeuser-enigmafile/homeuser-enigmafile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLoginComponent,
    HomeUserComponent,
    HomeuserEnigmatextComponent,
    HomeuserEnigmaimageComponent,
    HomeuserResourcefileComponent,
    HomeuserResourceTextComponent,
    HomeuserResourceImageComponent,
    HomeuserResourcePdfComponent,
    HomeuserEnigmafileComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
