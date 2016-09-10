
    //Global variables
var $ = function (id) {
    return document.getElementById(id);
};
    // housekeeping
window.onload = function()
{
    greeting();
    daysToGraduation();
    dateFromGradHS();

};
    // This code controls the date specific greeting in the header
function greeting()
{
    var greetingStatement = "";
    var d = new Date();
    var todaysGreeting = d.getDay();

        switch (todaysGreeting)
         {
            case 0:
            case 6:
                greetingStatement = "Spend as much time with your family as possible, Then homework.";
                break;
            case 1:
                greetingStatement = "Coffee is needed before you speak to anyone. Its Monday";
                break;
            case 2:
                greetingStatement = "Tuesday, the weekend is the light at the end of the tunnel.";
                break;
            case 3:
                 greetingStatement = "Wednesday, the weekend is nearing";
                 break;
            case 4:
                 greetingStatement = "Thursday, Be thankful it is almost Friday";
                 break;
            case 5:
                 greetingStatement= "Friday is the best day of the week.";
                 break;
            default:
                 greetingStatement = "Correct me!!! Something went wrong";
    }
    $("dayOfTheWeek").innerHTML =greetingStatement;
}

    //This code calculates the time till graduation day
function daysToGraduation()
{
        var today = new Date();
        var graduation = new Date("12/17/2016");


        if (today < graduation){
            var timeDiff = Math.abs(graduation.getTime() - today.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            $("countdown").innerHTML = diffDays;
        }
        else {
            $("countdown").innerHTML = "Correct me!!! Something went wrong"
        }
}
    // This code calculates the years and months since I graduated from high school.
function dateFromGradHS()
{
    var date = new Date();
    var currentYr = date.getFullYear();
    var currentMo = (date.getMonth() +1);
    var answerYr = 0;
    var answerMo = 0;
        // finds the difference in years
    answerYr = (currentYr - 1997);
    $("myGradYr").innerHTML = answerYr;
        // finds the difference in months
    if (currentMo > 6)
    {
        answerMo = 12 - currentMo;
    }
    else
    {
        answerMo = 6 - currentMo;
    }
    $("myGradMo").innerHTML = answerMo;

}