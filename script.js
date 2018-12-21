//Problem Eleven
function firstLast6(arr){
    if(arr[0] == 6||arr[arr.length - 1] == 6){
        return true;
    }else{
        return false;
    }

}

//Problem Twelve
function has23 (arr){
    if (arr[0] == 2 || arr[1] == 2 || arr[0] == 3 || arr[1] == 3) {
        return true;
    } else {
        return false;
    }
}


//Problem Thirteen
function fix23 (arr){
    if (arr[0] == 2 && arr[1] == 3){
         arr[1] = 0;
    }
    if (arr[1] == 2 && arr[2] == 3){
        arr[2] = 0;
    }
    return arr;
}


//Problem Fourteen
function countYZ(arr) {
    var count = 0;
    arr = arr.toLowerCase();
    for (i = 0; i <= arr.length - 1; i++) {
        if ((arr[i] == "y" || arr[i] == "z") && arr[i + 1 ] == " "){
            count += 1;
        }
        if ((arr[i] == "y" || arr[i] == "z") && i == arr.length - 1){
            count += 1;
        }
    }
return count;
}

//Problem Fifteen
function endOther(stringOne, stringTwo){
    stringOne = stringOne.toLowerCase();
    stringTwo = stringTwo.toLowerCase();
    if(stringOne.length >= stringTwo.length){
        if(stringTwo == stringOne.substring(stringOne.length - stringTwo.length, stringOne.length)){
            return true;
        } else {
            return false;
        }
    }
    if(stringOne.length < stringTwo.length){
        if(stringOne == stringTwo.substring(stringTwo.length - stringOne.length, stringTwo.length)){
            return true;
        } else {
            return false;
        }
    }
    if(stringOne == stringTwo){
        return true;
    }
}

//Problem Sixteen
function starOut(string) {
    var newString = "";
    for (i = 0; i < string.length; i++) {
        if (string[i] != "*") {
            if (string[i-1] != "*") {
                if (string[i+1] != "*") {
                    newString += string[i];
                }
            }
        }
    }
    return newString;
}

//Problem Seventeen
function getSandwich(string){
    var breadCount = 0;
    for(var i = 0; i < string.length; i++){
        if(string.substring(i, i+5) == "bread"){
            breadCount += 1;
        }
    }
    if(breadCount >= 2){
        return string.substring(string.indexOf("bread")+5, string.lastIndexOf("bread"));
    }else{
        return "";
    }
}

//Problem Eighteen
function canBalance(arr){
    var sumOne = 0;
    var sumTwo = 0;
    for(var i = 0; i < arr.length; i++) {
        sumOne = sumOne + arr[i];
        for (var j = i + 1; j < arr.length; j++) {
            sumTwo = sumTwo + arr[j];
        }
        if (sumOne == sumTwo) {
            return true;
        } else {  sumTwo =  0; }
    }
    return false;
}

//Problem Nineteen
function countClumps (arr){
    var num = 0;
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i + 1] && arr[i] == arr[i - 1]) {
            num += 1;
        }
    }
    return num;
}

//Problem Twenty
function  evenlySpaced (a,b,c){
    if (c-a == b-c || b-a == a-c || a-b == b-c || a-c == c-b || c-b == b-a || c-a == a-b) {
        return true;
    }else{
        return false;
    }
}































-