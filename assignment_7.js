// Create a function that takes the below array of names, 
    // 

// separates them into two arrays.
    // Create 2 variables.
    // Place the even numbers (those that can be dived by 2 with no remainders) in one variable usin the; x % 2 == 0.
    // place the odd numbers (those that don't fit the above condition) in the other variable.

// one of the names with an even number of letters.

// one with an odd number of letters.

// Then take the first letter of each of the names in the even array and make it the letter "b". 
    // using the index function slice [0] = "b."

// take the last letter in each of the names in the odd array and make them a “c.”
    // using the index function slice the .lenght of the array -1 
    
// Print both arrays.

// then return the even one to a variable named even_array.

// print it again.


var names_array = ["bob","jimmy","max b", "bernie", "jordan", "future hendrix"]


function Change_Characters_Of_Name(list_of_names){
    var even_numberNames = []
    var odd_numberNames = []
    for (x=0; x<list_of_names.length; x++){
        var name = list_of_names[x]
        var length_of_name = name.length
        if (length_of_name % 2 == 0){
            even_numberNames.push(name);
        }
        else {
            odd_numberNames.push(name);
        }
    }
    for (x=0; x<even_numberNames.length; x++){
        var oldname = even_numberNames[x]
        var newname = "b" + oldname.slice(1, oldname.length);
        even_numberNames[x] = newname;
    }
    for (x=-0; x<odd_numberNames.length; x++){
        var oldname = odd_numberNames[x]
        var newname = oldname.slice(0, -1) + "c";
        odd_numberNames[x] = newname;
    }
    console.log(even_numberNames);
    console.log(odd_numberNames);
    return even_numberNames
};

even_array = Change_Characters_Of_Name(names_array);

console.log(even_array);
