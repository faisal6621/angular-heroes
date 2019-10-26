import { Injectable } from '@angular/core';
import { HEROES } from "../app/mock-heroes";
import { Hero } from './Hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor(
        private messageService: MessageService
    ) { }

    getHeroes(): Observable<Hero[]> {
        this.messageService.addMessage('HeroService: fetched heroes')
        return of(HEROES)
    }

    getHero(id: number): Observable<Hero> {
        this.messageService.addMessage(`HeroService: fetched hero id=${id}`)
        return of(HEROES.find(hero => hero.id === id))
    }
}
