import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}
  getData(pincode = "") {
    let _url: string = `api.openweathermap.org/data/2.5/weather?zip=${pincode},us`;
    return this.http.get(_url);
  }
}
