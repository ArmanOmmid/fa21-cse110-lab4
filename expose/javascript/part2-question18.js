function myCallback(){
    console.log(
        new Date().toLocaleTimeString()
    );
};
var intervalID = setInterval(myCallback, 1000);