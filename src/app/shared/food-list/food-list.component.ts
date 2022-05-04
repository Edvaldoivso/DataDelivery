import { Component, EventEmitter, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  constructor(private servicesService: ServicesService) { }

  public foodList: Array<string> = []
  public InputValue: string = ''
  public ComparaValor: Array<string> = []

  ngOnInit(): void {

    this.ComparaValor = this.servicesService.Compara()

    this.foodList = this.servicesService.FoodList();

    this.servicesService.emitEvent.subscribe(
      res => alert(`Adcionado valor => ${res}`),
      error => error
    )

  }

  //Method add data
  public foodListAdd(value: string) {
    this.servicesService.foodListAdd(value)

    this.InputValue = " "
    return
  }





public ComparaListas(){
  if(this.ComparaValor.length < this.servicesService.TamList.length ){
    console.log("vares diferem")
  }else{
    console.log("Não diferem "  + this.ComparaValor.length +' --- ' +this.servicesService.TamList.length)
  }
}















}
