import {Component} from '@angular/core';
import {Employee} from './Models/employee';

@Component({
    selector:'employee-root',
    templateUrl:'./Views/employee-app.component.html'
})

export class EmployeeComponent{
    //Two Property Binding
    empObj:Employee = new Employee();

    // employee collection
    employees: Array<Employee> = new Array<Employee>();

    AddEmployee(){
        this.employees.push(this.empObj);
        this.empObj = new Employee();
    }
}