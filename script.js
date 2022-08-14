
let bill=0;
document.getElementById('bill').addEventListener('keyup', billChanged);
function billChanged(e) {
    
    document.getElementById('bill').value = this.value;
    bill = this.value;
    calculate();
}



 // for tip % buttons and custom input
 
let percents = document.getElementsByClassName('percent');
let percentChosen = 0;
for (input of percents) {
    if (input.id != 'custom') {
        input.onclick= tipChanged;
    } else {
        input.addEventListener('keyup', tipChanged)
    }
}

 function tipChanged() {
     for (button of percents) {
         if (button.id != 'custom' && button.id==this.id) {
            document.getElementById(button.id).classList.add('active');        
         } else {
            document.getElementById(button.id).classList.remove('active');
         }
     }
     document.getElementById('custom').value = this.value;
     percentChosen = this.value;
     calculate();
 }



// number of people
let people = 0;
document.getElementById('people').addEventListener('keyup', function() {
    document.getElementById('people').value = this.value;
    people = this.value;
    calculate();
});



// calculate
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

let tipPer = 0;
let totalPer = 0;
function calculate() { 
    if (people != 0) {
        tipPer = bill*percentChosen*.01/people;
        totalPer = (bill/people)+tipPer;
    }
        document.getElementById('tip-per').innerHTML = formatter.format(tipPer);
        document.getElementById('total-per').innerHTML = formatter.format(totalPer);

}

document.getElementById('reset').onclick  = function() {
    document.getElementById('tip-per').innerHTML = '$0.00';
    document.getElementById('total-per').innerHTML = '$0.00';
    document.getElementById('people').value = 0;
    for (input of percents) {
        if (input.id != 'custom') {
            input.classList.remove('active');
        } else {
            input.value = '';
        }
    }
    document.getElementById('bill').value = 0;
}