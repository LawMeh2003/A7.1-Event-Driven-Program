//a code to play Hi Lo on index page
function playHiLo(){
    console.log("playHiLo() started");
    //step 1. draw a card Ace to King or 1 to 13
    var card1;
 card1= Math.floor(14 * Math.random());
    console.log("card1 is :"+ card1);
    //step 1b. Print results on screen
    document.getElementById("card1Res").innerHTML = card1;
}

    //step 2. player will choose if next card is higher or lower
//If player bet high
function High(){
    console.log("bet high")
    var card1;
    var card2;
    card1= Math.floor(14 * Math.random());
    card2= Math.floor(14 * Math.random());
    console.log("card1 is :"+ card1);
    console.log("card2 is :" + card2);
    document.getElementById("card2Res").innerHTML = card2;
    //Condictions
    if(card2 >= card1){
        document.getElementById("gameRes").innerHTML = "You Win!";}
    
        else if(card2 <= card1){
            document.getElementById("gameRes").innerHTML= "You Lose!";
        }
    
    
    
//If player bet low   
}
function Low(){
    console.log("bet low")
    var card1;
    var card2;
    card1= Math.floor(14 * Math.random());
    card2= Math.floor(14 * Math.random());
    console.log("card1 is :"+ card1);
    console.log("card2 is :" + card2);
    document.getElementById("card2Res").innerHTML = card2;
    //condictions
    if(card2<=card1){
        document.getElementById("gameRes").innerHTML = "You Win!";}
        else if(card2 >= card1){
            document.getElementById("gameRes").innerHTML= "You Lose!";
        }
    
}
    /*if(condictions for true){
        do this if condictions are true
    }else if (another condictions for true){
        do this if condictions are true
    }else{
        do this if none are true
    }}*/

//checkCreds function for sting.html
function checkCreds(){
    console.log("checkCreds() started...");
    document.getElementById("loginStatus").innerHTML = "Status of Login";
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    
    //this will place the characters under the fName id in the firstName variable
    firstName = document.getElementById("fName").value;
    console.log("The first name is imputted as " + firstName);
    //this will place the characters under the lname in the lastName variable
    lastName = document.getElementById("lName").value;
    console.log("The last name is imputted as " + lastName);
    //this wull place the characters under the zipCode(id) in the zipCode variable
    zipCode = document.getElementById("zipCode").value;
    console.log("The zipcode is imputted as " + zipCode);
    //this adds firstName and lastName input to show fullName
    fullName = firstName + " " + lastName;
    console.log("The full name is " + fullName);
    //this shows how many characters are in fullName
    fullNameLength= fullName.length;
    console.log("The full name has " + fullNameLength + " characters")
    
    zipCodeNumb = parseInt(zipCode);
        console.log("The zipcode number is " + zipCodeNumb);
    //this sets the rules which are the full name cannot be more than 20 chracters and the zipcode must be 5 characters
    if(fullNameLength > 20){
        document.getElementById("loginStatus").innerHTML = "Invalid name, please try again";
    } else if(zipCode.length != 5){
        document.getElementById("loginStatus").innerHTML = "Invalid zipcode, please try again";
    } else{
        alert("user credientals passes, welcome to the site, " + fullName);
    }
}
//start button
function startFun(){
    console.log("startFun() started");
    document.getElementById("startButton").disabled = true;
    //turns start button gray if clicked, means being used
    document.getElementById("stopButton").disabled = false;
    document.getElementById('mymarquee').start();
    //start marquee motion
}
//stop button
function stopFun(){
    console.log("stopFun() started");
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    //turns stop button gray if clicked, means being used
    document.getElementById('mymarquee').stop();
    //stop marquee motion
}
