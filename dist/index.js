"use strict";
;
let mySize = 2;
console.log(mySize);
let employee = {
    id: 1,
    name: 'Darius',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kg');
//# sourceMappingURL=index.js.map