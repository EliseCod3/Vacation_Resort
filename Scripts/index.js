"use strict";


function getRoomRate(event) {
    event.preventDefault();
    let checkinDate = new Date(document.getElementById("check-in-date").value);
    const numberOfNights = document.querySelector("num-of-days");

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
    displayResults(discountRoomCost, taxCost, totalCost)

}

function displayResults(discountRoomCost, taxCost, totalCost) {
    //   const originalRoomCost = document.getElementById("estimatedOriginalRoomCost");
      const appliedDiscount = document.getElementById("estimatedDiscounts");
      const roomCostWithDiscount = document.getElementById("discountedRoomCost");
      const taxTotalCost = document.getElementById("taxCostTotal");
      const stayingCost = document.getElementById("estimatedTotalStayCost");
      
      //originalRoomCost.innerText = `$ `;
      appliedDiscount.innerText = `$ ${discount}`;
      roomCostWithDiscount.innerText = `$ ${discountRoomCost.toFixed(2)}`;
      taxTotalCost.innerText = `$ ${taxCost.toFixed(2)}`;
      stayingCost.innerText = `$ ${totalCost.toFixed(2)}`;
    
  }
  
