import {Injectable} from '@angular/core'

@Injectable()

export class empolyeeService{

    public employeeRecord=[
        {name:"sachin",city:"pune",age:25,id:"e1"},
        {name:"rahul",city:"mumbai",age:23,id:"e2"},
        {name:"ramesh",city:"pune",age:24,id:"e3"},
        {name:"suyog",city:"delhi",age:21,id:"e4"}
    ]

    public getEmployee(id:string):any{
        let employee:any;
        for(let i=0;i<this.employeeRecord.length;i++){
            if(id===this.employeeRecord[i].id){
            employee=this.employeeRecord[i];
            }
        }
        return employee;
    }
}