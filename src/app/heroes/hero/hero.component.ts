import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  hero:any
  heroName:any

  constructor(private activatedRoute: ActivatedRoute, private ApiService: ApiService){}

  ngOnInit(): void {
      // this.heroName = this.activatedRoute.snapshot.paramMap.get('name')
      // this.ApiService.getHeroes().subscribe((data: any[]) => {
      //   console.log(`single hero component: ${data}` )
      // })
  }

}
