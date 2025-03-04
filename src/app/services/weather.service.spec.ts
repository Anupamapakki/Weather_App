

import { NgModule} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";
import { AppComponent } from "../app.component";
import { WeatherService } from "./weather.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClient,
    WeatherService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
