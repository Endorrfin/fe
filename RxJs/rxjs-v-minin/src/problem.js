import {interval, scan} from "rxjs";
import {filter, map, take} from 'rxjs/operators';

// OPTION I - USUALLY WAY
const btn = document.getElementById('interval')
const rxjsBtn = document.getElementById('rxjs')
const display = document.querySelector('#problem .result')

const people = [
  {name: 'Vladilen', age: 25},
  {name: 'Elena', age: 17},
  {name: 'Ivan', age: 18},
  {name: 'Igor', age: 14},
  {name: 'Lisa', age: 32},
  {name: 'Irina', age: 23},
  {name: 'Oleg', age: 20}
]

btn.addEventListener("click", () => {
  btn.disabled = true;
  let i = 0;
  const canDrink = [];

  const interval = setInterval(() => {
    if (people[i]) {
      if (people[i].age >= 18) {
        canDrink.push(people[i].name)
      }
      display.textContent = canDrink.join(' ')
      i++
    } else {
      clearInterval(interval)
      btn.disabled = false;
    }
  }, 300)
})


// OPTION II - USE RxJs
/*
 C помощью функции интервал заводим новый стрим в RxJs на выходе мы получаем стрим.
 У любых стримов есть метод pipe, куда мы можем передавать различные операторы для манипуляции данным стримом
 В последствии, когда проработаем что-то через pipe можно обратить к фукнции subscribe для того, чтобы подписаться на данный стрим, и получить опеределенные результаты.
 */

rxjsBtn.addEventListener('click', () => {
  rxjsBtn.disabled = true;
  interval(1000)
      .pipe(
          take(people.length),
          filter(v => people[v].age >= 18),
          map(v => people[v].name),
          scan((acc, v) => acc.concat(v), []) // добавляем результирующие значения в массив
      )
      .subscribe(res => {
        display.textContent = res.join(' ')
      }, null, () => rxjsBtn.disabled = false)
})
