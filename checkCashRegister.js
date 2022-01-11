/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let total = 0;
  let tender = [];

  let drawer = [
    [ 'PENNY', 0 ],
    [ 'NICKEL', 0 ],
    [ 'DIME', 0 ],
    [ 'QUARTER', 0 ],
    [ 'ONE', 0 ],
    [ 'FIVE', 0 ],
    [ 'TEN', 0 ],
    [ 'TWENTY', 0 ],
    [ 'ONE HUNDRED', 0 ]
  ];

  for (let i = cid.length - 1; i > 0; i--) {
    if (total < change) {
      if (cid[i][0] === 'ONE HUNDRED') {
        let units = cid[i][1] / 100;
        while (units > 0 && total + 100 <= change) {
          total += 100;
          drawer[i][1] += 100;
          cid[i][1] -= 100;
          units -= 1;
        }
      }
      if (cid[i][0] === 'TWENTY') {
        let units = cid[i][1] / 20;
        while (units > 0 && total + 20 <= change) {
          total += 20;
          drawer[i][1] += 20;
          cid[i][1] -= 20;
          units -= 1;
        }
      }
      if (cid[i][0] === 'TEN') {
        let units = cid[i][1] / 10;
        while (units > 0 && total + 10 <= change) {
          total += 10;
          drawer[i][1] += 10;
          cid[i][1] -= 10;
          units -= 1;
        }
      }
            if (cid[i][0] === 'FIVE') {
        let units = cid[i][1] / 5;
        while (units > 0 && total + 5 <= change) {
          total += 5;
          drawer[i][1] += 5;
          cid[i][1] -= 5;
          units -= 1;
        }
      }
            if (cid[i][0] === 'ONE') {
        let units = cid[i][1] / 1;
        while (units > 0 && total + 1 <= change) {
          total += 1;
          drawer[i][1] += 1;
          cid[i][1] -= 1;
          units -= 1;
        }
      }
            if (cid[i][0] === 'QUARTER') {
        let units = cid[i][1] / .25;
        while (units > 0 && total + .25 <= change) {
          total += .25;
          drawer[i][1] += .25;
          cid[i][1] -= .25;
          units -= 1;
        }
      }
            if (cid[i][0] === 'DIME') {
        let units = cid[i][1] / .1;
        while (units > 0 && total + .1 <= change) {
          total += .1;
          drawer[i][1] += .1;
          cid[i][1] -= .1;
          units -= 1;
        }
      }
            if (cid[i][0] === 'NICKEL') {
        let units = cid[i][1] / .05;
        while (units > 0 && total + .05 <= change) {
          total += .05;
          drawer[i][1] += .05;
          cid[i][1] -= .05;
          units -= 1;
        }
      }
            if (cid[i][0] === 'PENNY') {
        let units = cid[i][1] / .01;
        while (units > 0 && total + .01 <= change) {
          total += .01;
          drawer[i][1] += .01;
          cid[i][1] -= .01;
          units -= 1;
        }
      }

    }
  }
  total = total.toFixed(2);
  for (let j = 0; j < drawer.length; j++) {
    if (drawer[j][1] === 0) {
      drawer.splice(j, 1);
      j--;
    }
  }
  console.log(cid, 'solution:', drawer, 'change:', change, 'cash:', cash)
  if (total < change) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  // if (total == change) {
  //   return {status: 'CLOSED', change: drawer};
  // }

  return {status: 'OPEN', change: drawer};


}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);