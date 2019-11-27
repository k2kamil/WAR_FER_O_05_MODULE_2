function Client (shortcut, fullName, tasks) {
    this.shortcut = shortcut;
    this.fullName = fullName;
    this.tasks = tasks;
}

Client.prototype.addTasks = function (tasks) {
    this.tasks.push(task);
}

Client.prototype.printTask = function () {
    this.tasks.forEach(function (v){
        console.log(v.subject + " " + "czas wykonania: " + getTotalTime().toString() + " koszt całkowity: " + v.calcCost().toString() + "$");
    });
}