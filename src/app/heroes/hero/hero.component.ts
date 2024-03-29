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

 getBaseHealth(){
  return this.hero.base_health + (this.hero.base_str * 20)
 }

 getHealthRegen(){
	// return Math.round((this.hero.base_health_regen + (this.hero.base_str * 0.1)) * 10) / 10
	return (Math.floor((this.hero.base_health_regen + (this.hero.base_str * 0.1)) * 10) / 10)
 }

 getRoles(){
	// console.log((this.hero.roles[0]))
	// console.log(`are you sure`)
	console.log(this.hero.roles.join(' | '))
	return this.hero.roles
 }

 getArmor(){
	// return Math.floor((this.hero.base_agi / 6) + (this.hero.base_armor) * 10) / 10
  return Math.floor(((this.hero.base_agi / 6) + (this.hero.base_armor)) * 10) / 10
 }

 getAttackSpeed(){
	if(this.hero.attack_rate === 1.7){
		return Math.floor((this.hero.base_attack_time + this.hero.base_agi))
	} else{
		return Math.floor((this.hero.base_attack_time + this.hero.base_agi) * (1.7 / this.hero.attack_rate))
	}
 }

 getMaxManaPool(){
  return (this.hero.base_int * 12) + this.hero.base_mana
 }

 getManaRegen(){
  return Math.floor((this.hero.base_int * 0.05) * 10) / 10
 }

 getPsysicalResistance(){
  const armor =  Math.floor(((this.hero.base_agi / 6) + (this.hero.base_armor)) * 10) / 10
  return Math.round((0.052 * armor) / (0.9 + 0.048 * armor) * 100) + '%'
 }

 getTurnRate(){
  if(this.hero.turn_rate === null){
    return 0.6
  }else{
    return this.hero.turn_rate
  }
 }

}

// 0,208 3,792

// (Intelligence Growth × (Current Level - 1) ➜ rounded down) + Base Intelligence + Bonus Intelligence × 12 = Mana from Intelligence + 75 Base Mana = Total Mana

// 18 + 

// "base_int": 18,
// "base_mana": 75,
// "base_mana_regen": 0.25,

// "int_gain": 3.6,


