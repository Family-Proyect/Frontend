import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import{ActivatedRoute} from "@angular/router";

declare var jQuery: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css',]
})
export class IndexComponent implements OnInit {

  constructor(public _http: HttpClient,private route: ActivatedRoute) { 

  }


  ngOnInit(): void {
    console.log("aquie");
    this.getTemasPrincipales(this._http);
  }
  url: any = "http://127.0.0.1:8000/";
  url_image: any = "http://127.0.0.1:8000";

  temas=[];
  // persons: { [id: string] :  } = {};

  getTemasPrincipales(_http:HttpClient){
    this._http.get(this.url+'getPrincipalesTemas/')
    .subscribe(
      (data)=>{console.log(data);
          for(let key in data){
            console.log(key);
            console.log(data[key]);
            this.temas.push(data[key]);
          }
      }
      ,(err: HttpErrorResponse)=>{console.log("Un error ha ocurrido")}
      ,()=>console.log("solicitud finalizada OK")
      )
  }
        
}
