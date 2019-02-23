'use strict';

$('.selectpicker').selectpicker();

var form = document.forms.calculator;
document.addEventListener("DOMContentLoaded", function () {
    form.amount.oninput = calculate;
    form.duration.onchange = calculate;
    form.currency.onchange = calculate;
    form.payment.onchange = calculate;
    calculate();
});

function calculate() {
    var amount = parseInt(form.amount.value);
    if (!amount) return;
    var duration = parseInt(form.duration.value);
    if (!duration) return;
    var currency = parseInt(form.currency.value);
    if (!currency) return;
    var payment = parseInt(form.payment.value);
    if (!payment) return;
    var percent = void 0,
        earnings = void 0,
        totalAmount = void 0;

    switch (payment) {
        case 1:
            switch (currency) {
                case 1:
                    switch (duration) {
                        case 6:
                            percent = 5;
                            break;
                        case 12:
                            percent = 10;
                            break;
                        case 24:
                            percent = 10.5;
                            break;
                    }
                    break;
                case 2:
                    switch (duration) {
                        case 6:
                            percent = 0;
                            break;
                        case 12:
                            percent = 1;
                            break;
                        case 24:
                            percent = 1.5;
                            break;
                    }
            }
            break;
        case 2:
            switch (currency) {
                case 1:
                    switch (duration) {
                        case 6:
                            percent = 6;
                            break;
                        case 12:
                            percent = 10.4;
                            break;
                        case 24:
                            percent = 11;
                            break;
                    }
                    break;
                case 2:
                    switch (duration) {
                        case 6:
                            percent = 0;
                            break;
                        case 12:
                            percent = 1.5;
                            break;
                        case 24:
                            percent = 2;
                            break;
                    }
            }
            break;
    }

    earnings = amount * percent / 100 * duration / 12;
    totalAmount = amount + earnings;
    document.getElementById('result__cost-js').innerHTML = earnings;
    document.getElementById('result__amount-js').innerHTML = totalAmount;
}
