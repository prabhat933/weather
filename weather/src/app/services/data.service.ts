import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}
  getData() {
    let _url: string = ` https://openweathermap.org/api`;
    return this.http.get(_url);
  }
}
