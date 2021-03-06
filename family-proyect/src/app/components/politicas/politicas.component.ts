import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.css']
})
export class PoliticasComponent implements OnInit {

  public politicas:any;
  private url  = environment.apiUrl;

  constructor(public _http: HttpClient,private route: ActivatedRoute) { 

  }
  ngOnInit(): void {
    this.getPoliticas(this._http);
  }

  getPoliticas(_http:HttpClient){
    this._http.get(this.url+'/api/getPoliticas/')
    .subscribe(
      (data)=>{
        this.politicas=data;
        console.log(data)
      }
      ,(err: HttpErrorResponse)=>{console.log("Un error ha ocurrido")}
      ,()=>console.log("solicitud finalizada OK")
      )
  }

}
