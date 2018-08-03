import {Injectable} from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CountryService{

    constructor(private _http:Http){

    }
    public GetCountryDetail(cn:String){
        let _url='https://restcountries.eu/rest/v2/name/'+cn+'?fullText=true';
        return this._http.get(_url);
    }
} 