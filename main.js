let priceInput = document.querySelector('#tip > input');
let FifteenInput = document.querySelector('#fifteens > input');
let TwentyInput = document.querySelector('#twenties > input');

function roundnum(num){
  return Math.round(num*100)/100;
}
function price(){
  const prices = parseFloat(priceInput.value);
  const fifteen = (prices*0.15);
  const twenty = (prices*0.20);
  FifteenInput.value = roundnum(fifteen);
  TwentyInput.value = roundnum(twenty);
}
function main(){
  priceInput.addEventListener('input', price);
}

main();
