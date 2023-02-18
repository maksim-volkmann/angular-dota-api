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
}
