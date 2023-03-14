import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  heroes: any[] = []

  constructor(private ApiService: ApiService){}

  ngOnInit(){
    this.ApiService.getHeroes().subscribe((data: any[]) => {
      this.heroes = data
      console.log(data)
    })
  }

  getTotalHeroCount(){
    return this.heroes.length
  }

  getStrHeroCount(){
    return this.heroes.filter(hero => hero.primary_attr === 'str').length
  }

  getAgiHeroCount(){
    return this.heroes.filter(hero => hero.primary_attr === 'agi').length
  }

  getIntHeroCount(){
    return this.heroes.filter(hero => hero.primary_attr === 'int').length
  }

  heroCountRadioButton: string = 'All'

  onChangeFilterSelectedInputValue(data: string){
    this.heroCountRadioButton = data
  }
  

  searchText: string = ''

  onSearchTextEntered(value: string){
    this.searchText = value
    console.log(this.searchText)
  }

  selectedHero?: any
  displayHeroDetail(hero: any){
    this.selectedHero = hero
  }


}
