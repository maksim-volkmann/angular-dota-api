import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit{

  constructor( private activatedRoute: ActivatedRoute, private apiService: ApiService){}

  @Input() hero: any

  ngOnInit(): void {
    this.getHero()
  }

 getHero(): void{
  // console.log(this.activatedRoute.snapshot.paramMap.get('id'))
  const id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
  this.apiService.getHeroById(id).subscribe(hero => (this.hero = hero));
  console.log(id)
 }


}
