 compare two JSON have the same properties without order

var obj1 = {"name":"Sam","class":"MCA"};
var obj2 = {"class":"MCA","name":"Sam1"};

var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(var key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("is object equal"+flag);