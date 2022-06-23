const Employee = require('./employee')

class Manager extends Employee {
constructor(id, name, email, officeNum){
    super(id, name, email);
this.officeNumber = officeNum;
}

    getRole(){
        return "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber; 
    }

}

module.exports = Manager