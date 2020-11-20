import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn:'root',
})

export class mainService {
    private email:String ='';
    constructor(private http: HttpClient){ }

    getApi(path:string) : Observable<any>{
            return this.http.get(environment.basePath+path);

    }
    postApi(path: String, body:any): Observable<any>{
        return this.http.post(environment.basePath+path, body);
    }

}