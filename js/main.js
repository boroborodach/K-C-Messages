$(function () {
  
});

const tableMessages = document.querySelectorAll('.messadge-in__table-message');

for (let i = 0; i < tableMessages.length; i++){
  if (i === 0) {
    tableMessages[i].addEventListener('mouseover', function () {
      tableMessages[i].style.borderTop = '1px solid #d89351';
      tableMessages[i].style.borderBottom = '1px solid #d89351';
    });
    tableMessages[i].addEventListener('mouseout', function () {
      tableMessages[i].style.borderTop = '1px solid #212121';
      tableMessages[i].style.borderBottom = '1px solid #212121';
    });
  } else {
    tableMessages[i].addEventListener('mouseover', function () {
      tableMessages[`${i - 1}`].style.borderBottom = '1px solid #d89351';
      tableMessages[i].style.borderBottom = '1px solid #d89351';
    });
    tableMessages[i].addEventListener('mouseout', function () {
      tableMessages[`${i - 1}`].style.borderBottom = '1px solid #212121';
      tableMessages[i].style.borderBottom = '1px solid #212121';
    });
  }
}


document.querySelector('.menu-btn').addEventListener('click', function (){
  document.querySelector('.messadge-in__aside').classList.toggle('messadge-in__aside--active');
});

