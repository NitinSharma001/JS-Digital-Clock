let clock = () => {;

    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
let period = 'AM';

if (hrs == 0){
    hrs = 12;
}
else if (hrs >= 12){
hrs = hrs -12;
period = 'PM'
}
hrs = hrs <10 ? '0' + hrs : hrs;
mins = mins <10 ? '0' + mins : mins;
secs = secs <10 ? '0' + secs :secs;

let time = `${hrs}:${mins}:${secs}:${period}`;
document.getElementById('clock').innerText = time;
setTimeout(clock, 1000);
};
clock();

// const array = [1, 2, 30, 4];
//  let sum = 0; for (let i = 0; i < array. length; i++) 
//  { sum += array[i]; 
// console.log(sum)} 