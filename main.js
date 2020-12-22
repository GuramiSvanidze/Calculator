const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.textArea');
const equal = document.querySelector('.btn-equal');
const clear = document.querySelector('.btn-clear');



for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
    let number = btns[i].getAttribute('data-num');
    screen.value += number;
  });
}


equal.addEventListener('click', function() {
  if(screen.value === ''){
    alert('input is empty');
  }
  else
  {
   let output = eval(screen.value);
   screen.value = output;
  }
});



clear.addEventListener('click', function() {
  screen.value = '';
})


