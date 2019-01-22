var arry = [1,7,4,9,3,5];
var loop = arry.length;

function index1(number) {
    var i
    for(i = 0; i < loop; i++){
        if(arry[i] == number){
            return i
        }
    }
     return -1        
    }

console.log('index1: ' + index1(3))

var listObjec = [ {id:"001",
                    Name:"Duong" },
                    {id:"002",
                    Name:"Liem" },
                    {id:"003",
                    Name:"Hung" },
                    {id:"004",
                    Name:"Hieu" },
                    {id:"005",
                    Name:"Minh" },
                ]
var length = listObjec.length

function index2(id) {
    var i
    for(i = 0; i < loop; i++){
        if(listObjec[i].id == id){
            return i
        }
    }
     return -1
}
console.log('index2: ' + index2(002))