
var startmoney = .01;
var totalmoneyafter30 = 0;
var totaldays = 30;
var daystoreach = 0;
var morethan10000flag = false;
var morethanbillionflag = false;
var daystoreachbill = 0;

function getDoubledMoney(amount, numberofdays) {
    var totalafter30 = 0;
    for (var days = 1; days <= numberofdays; days++) {

        amount = doublevalue(amount);
        if (amount >= 10000 && morethan10000flag == false) {
            daystoreach = days;
            morethan10000flag = true;
        }
        if (amount >= 1000000000 && morethanbillionflag == false) {
            daystoreachbill = days;
            morethanbillionflag = true;
        }
        totalafter30 = amount;
    }
    return totalafter30;
}
function doublevalue(num) {
    num = num + num;
    return num;
}

// function ()
// {
//      do until (getDoubledMoney(money)==Infinity)
//      {

//      }
// }

totalmoneyafter30 = getDoubledMoney(startmoney, totaldays);
console.log("30 day total " + totalmoneyafter30);
console.log("10,000 dollar day " + daystoreach);
totalmoneyafter30 = getDoubledMoney(startmoney, 70);
console.log("Billion dollar day " + daystoreachbill);