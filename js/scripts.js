/*Create a webpage where a user can select the name of a movie, the time of day that
 they would like to see the movie and their age. The webpage should let them know how much their 
 movie ticket will cost, based on those three factors. Consider that non-"first-release" movies, 
 matinee and senior tickets tend to be cheaper than the regular priced ticket.

Your constructor and prototype could be called Ticket and you can come up with the formula
 for determining how the price is calculated depending on the input from the user. */

 //Business Logic
 function Ticket(movieTitle, age, time) {
   this.movieTitle = movieTitle;
   this.age = age;
   this.time = time;
   this.ticketId = 0;
   this.ticketId = this.assignId();
 }

Ticket.prototype.assignId = function() {
  this.ticketId += 1;
  return this.ticketId;
};

 //User Interface Logic
 function movieCost(newTicket) {
  let newTicket1 = newTicket;
  // console.log(newTicket1.age);
  let cost = 0.00;

  if (newTicket1.age === "Old person") {
    cost += 5.00;
    // console.log("Yep, you are old");
  }
  else if (newTicket1.age === "You think you're old but you're not really old") {
    cost += 100.00;
  }
  else if (newTicket1.age === "You think you're young but you are dead inside") {
    cost += 200.00;
  }
  // else {
  //   console.log("No age");
  // }

  if (newTicket1.movieTitle === "I Heart Huckabees") {
    cost += 56.69;
  }
  else if (newTicket1.movieTitle === "Parasite") {
    cost += 1.25;
  }
  else if (newTicket1.movieTitle === "The Truman Show") {
    cost += 18.99;
  }
   else {

   }

  if (newTicket1.time === "Morning") {
    cost += 7.50;
  }
  else if (newTicket1.time === "Afternoon") {
    cost += 25.25;
  }
  else if (newTicket1.time === "Evening") {
    cost += 1000.15;
  }
   else {

 }


console.log(cost);
  return cost;
};

$(document).ready(function() {
  $("form#chooseTicket").submit(function(event) {
    event.preventDefault();
    let movieTitle = $("select#movieTitle").val();
    let timeOfDay = $("select#timeOfDay").val();
    let age = $("select#age").val();

    let newTicket = new Ticket(movieTitle, age, timeOfDay);
    let ticketPrice = movieCost(newTicket);
    console.log(newTicket);
    let ticketCart = [];

    ticketCart.push(newTicket);

    $("#ticketInCart").text(ticketPrice);
    $("input#movieTitle").val("");
    $("input#timeOfDay").val("");
    $("input#age").val("");

  })
})

