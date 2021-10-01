const month = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
const day = ['일요일','월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const meal = ['<아침>', '<점심>', '<저녁>'];

const today = new Date();
const bigDate = month[today.getMonth()] + ' ' + today.getDate() + '일' + ' ' + day[today.getDay()] + ' ';
const smallDate = today.getHours() + '시' + ' ' + today.getMinutes() + '분';

let currentTime = document.querySelector('.time_info > .date');
currentTime.innerText =  bigDate + smallDate;

let mealTime = document.querySelector('.time_info > .meal')
// 아침 : 전날 20시~10시 점심 :10~15 저녁: 15:00 ~ 20:00

const hour = today.getHours();

let currentMeal = '';
if (10 < hour && hour < 15) currentMeal = meal[0];
else if(15 < hour && hour < 20) currentMeal = meal[1];
else currentMeal = meal[2];
mealTime.innerText = currentMeal;