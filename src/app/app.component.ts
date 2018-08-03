import { Component } from '@angular/core';
import { StudentService} from './service/student.service';
import { CountryService } from './service/restcountries.service';
import { ProfileService } from './service/profile.service'
import { empolyeeService} from './service/employe.services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StudentService,CountryService,ProfileService,empolyeeService]
})
export class AppComponent {
  title="Service Demo";
  StudObj:any[]=[];
  StudId:String;
  public data:any[0]=[0];
  constructor(private ssrv:StudentService,private csrv:CountryService,private psrv:ProfileService,private esrv:empolyeeService){
  }
 
getdata(){
  this.psrv.postdata().subscribe(res =>{this.data=res;
    console.log(this.data)  
  })
}


  /*******student get service */
  public GetStudentDetail(){
    this.StudObj=this.ssrv.getStudentData(this.StudId)
  }


  /************HTTP GET Services ***********/

title1="HTTP Service";
public CountryObj:any[]=[];
public CN:String;

public GetCountryInfo(){
 this.csrv.GetCountryDetail(this.CN).subscribe(res => this.CountryObj=res.json());
//  console.log(this.CountryObj)
}
public empid:string;
public empobj:string[]=[];

public DisplayEmployeeData(){
this.empobj=this.esrv.getEmployee(this.empid)
}
/*********HTTP POST Service ******************/
}

