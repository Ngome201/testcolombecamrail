import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  // url = "http://localhost:3000/colombe/api/v0/"                   //to index the local server
  // url = "http://192.168.43.161:3000/colombe/api/v0/"                   //to index the local server
  url = "https://colombe-api.onrender.com/colombe/api/v0/"     //to index the web server
  
  constructor() { }
}
