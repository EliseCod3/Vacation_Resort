"use strict";

function getRoomRate(event) {
    event.preventDefault();
    let checkinDate = new Date(document.getElementById("check-in-date").value);
    const numberOfNights = document.querySelector(".num-of-days").value;
    let price = 0;
    let roomTypeSelected = document.querySelector("input[name='radioRoomField']:checked").value;
    let currentMonth = checkinDate.getMonth();
    let inSeason = false;
    switch (currentMonth) {
        case 5:
        case 6:
        case 7:
            inSeason = true;
            break;
        default:
            inSeason = false;
            break;
    }
    if (inSeason) {
        if(roomTypeSelected == "king" || roomTypeSelected == "queen") {
            price = 250 * numberOfNights;
        } else {
            price = 350 * numberOfNights;
        }
    } else {
        if (roomTypeSelected == "king" || roomTypeSelected == "queen") {
            price = 150 * numberOfNights;
        } else {
            price = 210 * numberOfNights;
        }
    }
    
    let discount = 0;
    const selectedDiscount = document.querySelector("input[name='radioDiscountField']:checked");
    if (selectedDiscount && selectedDiscount.value == "senior") {
        discount += 0.1 * price;
    }
    if (selectedDiscount && selectedDiscount.value == "military") {
        discount += 0.2 * price;
    }
    let discountRoomCost = price - discount;
    let taxCost = discountRoomCost * 0.12;
    let totalCost = discountRoomCost + taxCost;

    document.getElementById("estimatedOriginalRoomCost").innerText = `$ ${price}`;
    document.getElementById("estimatedDiscounts").innerText = `$ ${discount}`;
    document.getElementById("discountedRoomCost").innerText = `$ ${}`
 
  }
  
