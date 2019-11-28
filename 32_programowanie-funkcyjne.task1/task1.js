
function randomize(param1, param2, callback){
    if (typeof callback === "function") {
        let random = Math.floor(Math.random() * (param2 - param1 + 1) + param1);
        callback(random);
    }
}



