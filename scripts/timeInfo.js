const month_arr = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
const day_arr = ['일요일','월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const meal_arr = ['[조식]', '[중식]', '[석식]'];

const today = new Date();
const month = today.getMonth();
const date = today.getDate();
const day = today.getDay();
const hour = today.getHours();
const minute = today.getMinutes();


const mealTime = document.querySelector('.time_info > .meal')
// 아침 : 전날 20시~10시 점심 :10~14 저녁: 14:00 ~ 20:00
if (10 <= hour && hour <= 14) mealTime.innerText = meal_arr[1];
else if(14 < hour && hour <= 20) mealTime.innerText = meal_arr[2];
else mealTime.innerText = meal_arr[0];

const bigDate = month_arr[month] + ' ' + date + '일' + ' ' + day_arr[day] + ' ';

const currentTime = document.querySelector('.time_info > .date');
currentTime.innerText =  bigDate;

