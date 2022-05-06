import { Component, EventEmitter, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { FoodData } from 'src/app/Modules/food-data';
import { ServicesService } from 'src/app/Services/services.service';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  //Constructor general and the dependence injectable
  constructor(private servicesService: ServicesService) { }

  //Some instances of variables or constructor
  foodList: Array<string> = []
  InputValue: string = ''
  deliveryData: FoodData | any

  //My component how run on Init the application
  ngOnInit(): void {

    //Instance of FoodList provide by services
    this.foodList = this.servicesService.FoodList();
    
    //Event subscribed of component create the action 
    this.servicesService.emitEvent.subscribe(
      res => alert(`Adcionado valor => ${res}`),
      error => error
    )

  //Call altomatic the search comunication data from my services class
   this.LoadDadaFromService()

  }

    //-----------------------------External data manegment-------------------//
  public LoadDadaFromService(){

    return this.servicesService.getDadaServer().subscribe(
      res =>  this.deliveryData =    res ,
      error => error
      );
  }








  //Method add data and clear the inputs
  public foodListAdd(value: string) {
    this.servicesService.foodListAdd(value)
    this.InputValue = " "
    return
  }

  



//Method to print the length at the scream
public ImprimeTamanho() {
  let Z = this.servicesService.ContaTamanho()
  console.log(Z)
  return
}


fitrado: any = 'Filtrando Por'

public Filtrar(val: any) {
  console.log('Estou vendo' + val)


}

















}
