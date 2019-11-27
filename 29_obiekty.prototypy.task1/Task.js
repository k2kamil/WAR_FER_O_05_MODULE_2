function Task (subject) {
    this.subject = subject;
    this.status = "not started";
    this.operations = [];
    this.client = client.addTask(this);
}

Task.prototype.addOperation = function (description, employee, minutes) {
    if (tis.status == "finished"){
        return false;
    } else if (this.status == "not started") {
        this.status = "in progress";
    }
}

Task.prototype.getTotalTime = function () {
    let sumMinutes = 0;

    this.operations.forEach(function (v){
        sumMinutes = sumMinutes + v.minutes;
    });
    return sumMinutes;
}

Task.prototype.calcCost = function () {
    let sumMinutes = 0;

    this.operations.forEach(function (v){
        sumCost = sumCost + v.minutes/60*v.employee.salary;
    });
    return sumCost;
}