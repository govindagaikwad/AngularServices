import { Injectable} from '@angular/core';

@Injectable()
export class StudentService{
    public StudentData=[
        {name:"Aappasaheb",city:"Shevgaon",age:21,id:"s1"},
        {name:"Suraj",city:"Kolhapur",age:25,id:"s2"},
        {name:"Govinda",city:"kopargaon",age:22,id:"s3"},
        {name:"Shankar",city:"Vaijapur",age:22,id:"s4"}
    ];

    public getStudentData(id:String):any{
        let Student;
        for(let i=0;i<this.StudentData.length;i++){
            if(id===this.StudentData[i].id){
                Student=this.StudentData[i];
            }
        }
        return Student;
    }
}
