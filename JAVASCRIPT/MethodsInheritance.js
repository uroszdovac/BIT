function Person(name, surname){
    this.name = name,
    this.surname = surname
}

Person.prototype.getFullName = function(){
    return this.name + ' ' + this.surname;
}

function Employee(name, surname, job, salary){
    Person.call(this, name, surname)
    this.job = job,
    this.salary = salary
}

Employee.prototype.getData = function(){
    return this.name + ' ' + this.surname + ' ' + this.salary;
}

Employee.prototype.getSalary = function(){
    return 'The salary is ' + this.salary;
}

Employee.prototype.increaseSalary = function(){
    this.salary += this.salary / 10;
}

function Developer(name, surname, job, salary, specialization){
    Employee.call(this, name, surname, job, salary)
    this.specialization = specialization
}

Developer.prototype.getSpecialization = function(){
    return this.specialization;
}

function Manager(name, surname, job, salary, department){
    Employee.call(this, name, surname, job, salary)
    this.department = department
}

Manager.prototype.getDepartment = function(){
    return this.department;
}

Manager.prototype.changeDepartment = function(dep){
    this.department = dep;
}

var urosDev = new Developer('Uros', 'Mijatovic', 'FrontEnd', 750, 'JavaScript')
console.log(urosDev.getSpecialization())
