function duplicateChecker(number, list) {
  for (var i = 0; i < list.length; i++) {
    if (number == list[i]) {
      return true;
    }
  }
  return false;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function sortNumber(a, b) {
  return a - b;
}

function clearTicketArea() {
  $("#ticketarea").html("");
}

function getXLottoTicket() {
  var count = 0;
  var max = 6;
  var list = [];
  while (count < max) {
    var number = getRandomNumber(1,45);
    if (!duplicateChecker(number, list)) {
      list.push(number);
      count += 1;
    }
  }
  list.sort(sortNumber);
  return list;
}

function xLotto(quantity) {
  for (var i = 0; i < quantity; i++) {
    var ticket = getXLottoTicket();
    var text = "X Lotto Ticket " + (i + 1) + ": Your numbers are " + ticket[0] + ", " + ticket[1] + ", " + ticket[2] + ", " + ticket[3];
    text += ", " + ticket[4] + " and " + ticket[5] + ".";
    $("<p>").text(text).appendTo("#ticketarea");
  }
}

function getOzLottoTicket() {
  var count = 0;
  var max = 7;
  var list = [];
  while (count < max) {
    var number = getRandomNumber(1,45);
    if (!duplicateChecker(number, list)) {
      list.push(number);
      count += 1;
    }
  }
  list.sort(sortNumber);
  return list;
}

function ozLotto(quantity) {
  for (var i = 0; i < quantity; i++) {
    var ticket = getOzLottoTicket();
    var text = "Oz Lotto Ticket " + (i + 1) + ": Your numbers are " + ticket[0] + ", " + ticket[1] + ", " + ticket[2] + ", " + ticket[3];
    text += ", " + ticket[4] + ", " + ticket[5] + " and " + ticket[6] + ".";
    $("<p>").text(text).appendTo("#ticketarea");
  }
}

function getPowerballTicket() {
  var count = 0;
  var max = 7;
  var list = [];
  var powerball = getRandomNumber(1,20);
  while (count < max) {
    var number = getRandomNumber(1,35);
    if (!duplicateChecker(number, list)) {
      list.push(number);
      count += 1;
    }
  }
  list.sort(sortNumber);
  return {list: list, powerball: powerball}
}

function powerball(quantity) {
  for (var i = 0; i < quantity; i++) {
    var ticket = getPowerballTicket();
    var numbers = ticket.list;
    var powerball = ticket.powerball;
    var text = "Powerball Ticket " + (i + 1) + ": Your numbers are " + numbers[0] + ", " + numbers[1] + ", " + numbers[2] + ", " + numbers[3];
    text += ", " + numbers[4] + ", " + numbers[5] + " and " + numbers[6] + ". Your Powerball is " + powerball + ".";
    $("<p>").text(text).appendTo("#ticketarea");
  }
}

function generateTickets() {
  var xLottoQty = document.getElementById("XLottoQty").value;
  var ozLottoQty = document.getElementById("OzLottoQty").value;
  var powerballQty = document.getElementById("PowerballQty").value;
  clearTicketArea();
  xLotto(xLottoQty);
  ozLotto(ozLottoQty);
  powerball(powerballQty);
}
