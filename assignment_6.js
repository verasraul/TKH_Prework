//1) Given the below array, create a function which loops through each name, 
//2) comparing the length of each to determine the longest name,
    // create an empty variable to start lenghts of names (namelengths).
    // count each name's lenthg as they are written and place it in the variable.
    // if the length of the name is lesss then the prior one don't add it to the varibale.
    // else, if the lenght of the name is longert then the prior one update the length in the variable.

//3) save that name to the variable longest_name.
//4) Return longest_name to the another variable called answer
//5) log the answer variable to the screen.


var names = ["Retta", "Vern", "Marica", "Cyrus", "Linette", "Curt", "Nichole", "Jesica", "Wynell", "Michaele"];


function Longest_Name_Length(nameslist){
    var longest_name = ""
    var length = -1
    for (x=0; x<nameslist.length; x++){
        var name = nameslist[x];
        var lengthofnames = name.length
        if (lengthofnames > length){
            length = lengthofnames;
            longest_name = name;
        }
    }
    return longest_name
};

var answer = (Longest_Name_Length(names));

console.log(answer);