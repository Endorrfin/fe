import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from "rxjs";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  /*
  * Разработчик сам решает, что ему нужно видеть из диалога!
  * Subject - получает доступ к сообщениям, которые будут транслироваться уже после подписки.
  * BehaviorSubject - получает доступ к последнему значению с момента подписки (требуется начальное значение)
  * ReplaySubject - получает доступ ко всему диалогу вне зависимости, когда подписываемся (можно задавать буфер,
  *  путишествие во времени).
  * AsyncSubject - получает доступ к последнему сообщению, но после вызова метода complete(), помечающего поток как
  *  завершенный.
  * */
  chatGroupSubject = new Subject();
  chatGroupBehaviorSubject = new BehaviorSubject('Starting point');
  chatGroupReplaySubject = new ReplaySubject();
  chatGroupAsyncSubject = new AsyncSubject();


  constructor() { }

  ngOnInit(): void {
    // ------- SUBJECT -------
    // Отправляем значения в поток
    this.chatGroupSubject.next('1. RIK: It is such a nice day.');
    this.chatGroupSubject.next('2. FORSTMANN: Yes, it is.');
    this.chatGroupSubject.next('3. RIK: It looks like it may rain soon.');
    this.chatGroupSubject.next('4. FORSTMANN: Yes, and I hope that it does.');
    // BELLA вступает в разговор
    this.chatGroupSubject.subscribe((messages) => {
      console.log('-- chatGroupSubject I --', messages);
    });
    this.chatGroupSubject.next('5. RIK: Why is that?');
    this.chatGroupSubject.next('6. FORSTMANN: I really love how rain clears the air.');
    this.chatGroupSubject.next('7. RIK: Me too. It always smells so fresh after it rains.');

    // MARK вступает в разговор
    this.chatGroupSubject.subscribe((messages) => {
      console.log('-- chatGroupSubject II --', messages);
    });

    // ------- BEHAVIOR SUBJECT -------
    // Отправляем значения в поток
    this.chatGroupBehaviorSubject.next('1. RIK: It is such a nice day.');
    this.chatGroupBehaviorSubject.next('2. FORSTMANN: Yes, it is.');
    this.chatGroupBehaviorSubject.next('3. RIK: It looks like it may rain soon.');
    this.chatGroupBehaviorSubject.next('4. FORSTMANN: Yes, and I hope that it does.');
    // BELLA вступает в разговор
    this.chatGroupBehaviorSubject.subscribe((messages) => {
      console.log('-- chatGroupBehaviorSubject I --', messages);
    });
    this.chatGroupBehaviorSubject.next('5. RIK: Why is that?');
    this.chatGroupBehaviorSubject.next('6. FORSTMANN: I really love how rain clears the air.');
    this.chatGroupBehaviorSubject.next('7. RIK: Me too. It always smells so fresh after it rains.');

    // MARK вступает в разговор
    this.chatGroupBehaviorSubject.subscribe((messages) => {
      console.log('-- chatGroupBehaviorSubject II --', messages);
    });


    // ------- REPLAY SUBJECT -------
    // Отправляем значения в поток
    this.chatGroupReplaySubject.next('1. RIK: It is such a nice day.');
    this.chatGroupReplaySubject.next('2. FORSTMANN: Yes, it is.');
    this.chatGroupReplaySubject.next('3. RIK: It looks like it may rain soon.');
    this.chatGroupReplaySubject.next('4. FORSTMANN: Yes, and I hope that it does.');
    // BELLA вступает в разговор
    this.chatGroupReplaySubject.subscribe((messages) => {
      console.log('-- chatGroupReplaySubject I --', messages);
    });
    this.chatGroupReplaySubject.next('5. RIK: Why is that?');
    this.chatGroupReplaySubject.next('6. FORSTMANN: I really love how rain clears the air.');
    this.chatGroupReplaySubject.next('7. RIK: Me too. It always smells so fresh after it rains.');

    // MARK вступает в разговор
    this.chatGroupReplaySubject.subscribe((messages) => {
      console.log('-- chatGroupReplaySubject II --', messages);
    });


    // ------- ASYNC SUBJECT -------
    // Отправляем значения в поток
    this.chatGroupAsyncSubject.next('1. RIK: It is such a nice day.');
    this.chatGroupAsyncSubject.next('2. FORSTMANN: Yes, it is.');
    this.chatGroupAsyncSubject.next('3. RIK: It looks like it may rain soon.');
    this.chatGroupAsyncSubject.next('4. FORSTMANN: Yes, and I hope that it does.');
    // BELLA вступает в разговор
    this.chatGroupAsyncSubject.subscribe((messages) => {
      console.log('-- chatGroupAsyncSubject I --', messages);
    });
    this.chatGroupAsyncSubject.next('5. RIK: Why is that?');
    this.chatGroupAsyncSubject.next('6. FORSTMANN: I really love how rain clears the air.');
    this.chatGroupAsyncSubject.next('7. RIK: Me too. It always smells so fresh after it rains.');
    this.chatGroupAsyncSubject.complete();

    // MARK вступает в разговор
    this.chatGroupAsyncSubject.subscribe((messages) => {
      console.log('-- chatGroupAsyncSubject II --', messages);
    });

  }

}
