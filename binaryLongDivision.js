

function binaryLongDivision(divident = 0, divisor = 0) {

    let quotient = 0;
    let remainingDivident = divident;

    while(remainingDivident >= divisor) {
        let howManyShifts = 0;

        while((divisor << howManyShifts +1) <= remainingDivident) {
            howManyShifts++;
        }

        remainingDivident -= divisor << howManyShifts;
        quotient |= 1 << howManyShifts;
        
    }

    reminder = remainingDivident;

    return `${quotient.toString(2)}r${reminder.toString(2)}`;
}

const res = binaryLongDivision(0b100010111, 0b1101);
console.log(res);