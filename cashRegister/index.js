const exchanges = [
    {key:'ONE HUNDRED', value: 100},
    {key:'TWENTY', value: 20},
    {key:'TEN', value: 10},
    {key:'FIVE', value: 5},
    {key:'ONE', value: 1},
    {key:'QUARTER', value: 0.25},
    {key:'DIME', value: 0.10},
    {key:'NICKEL', value: 0.05},
    {key:'PENNY', value: 0.01},
];
function checkCashRegister(price, cash, cid){
    let change = {status: '', change: []};
    let change_due = cash - price; // change amount
    // cid sum total
    let total_cid = 0;
    cid.forEach(currency => {total_cid += currency[1]});
    total_cid = parseFloat(total_cid.toFixed(2));

    // check if change is greater than sum of cid
    if(change_due > total_cid){
        change.status = 'INSUFFICIENT_FUNDS';
        change.change = [];
        return change; 
    }
    // reverse the array, so we can get the cid array sorted in highest to lowest order
    cid = cid.reverse();
    let currentValue = 0;
    // find the change due in coins an bills
    let changes_array = exchanges.reduce((accumulator, nextItem, i) => {
        let currValArray = 0;
        if(cid[i][1] !== 0){
            if(change_due >= nextItem.value){
                while(change_due >= nextItem.value && cid[i][1] >= nextItem.value){
                    change_due -= nextItem.value;
                    change_due = Math.round(change_due * 100)/100;
                    cid[i][1] = Math.round(cid[i][1]*100) / 100;
                    cid[i][1] -= nextItem.value; 
                    currValArray += nextItem.value;
                }
                currentValue = currValArray;
                accumulator.push([nextItem.key, Math.round(currValArray * 100)/100]);
                return accumulator;
            }else{
                return accumulator;
            }

        }else{
            accumulator.push(cid[i]);
            return accumulator;
        }

    }, []); // end change array

    if( change_due > 0){
        change.status = 'INSUFFICIENT_FUNDS';
        change.change = [];
        return change;
    }
    if(total_cid - Math.round(currentValue * 100) /100 === 0){
        change.status = "CLOSED";
        change.change = changes_array.reverse();
        return change;
    }
    change.status = "OPEN";
    change.change = changes_array;
    return change;

}

console.log(typeof checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) === 'object');

//should return an object.
console.log(typeof checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) === 'object') 

//should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) )
//should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

//should return {status: "INSUFFICIENT_FUNDS", change: []}.
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) );

//should return {status: "INSUFFICIENT_FUNDS", change: []}.
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) )

//should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) )
