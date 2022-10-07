"use strict";

function getRoomRate(event) {
    event.preventDefault();
    let checkinDate = new Date(document.getElementById("check-in-date").value);
    const numNights = document.querySelector(".num-of-days").value;
    let price = 0;
    let roomType = document.querySelector("input[name='radioRoomField']:checked").value;
    
    
    const date = new Date(checkinMonthvalue);
    const month = date.getMonth();

    let roomPerNightCost = 0;
    console.log(month);
   

    
    document.getElementById("estimatedRoomRate").innerText ;
 
  }
  
  function getOriginalRoomCost() {
    RoomRate = getRoomRate();

  }
  console.log(getOriginalRoomCost(event));

  function getDiscount(params) {
    let seniorDiscount = document.getElementById("seniorSelect").checked;
    let militaryDiscount = document.getElementById("militarySelect").checked;
    
    
  }