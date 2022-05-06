import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { FoodData } from '../Modules/food-data';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }

  public URLDB: string = "http://localhost:3000/list-City"
  public URLTempo: string = "https://apiadvisor.climatempo.com.br/api/v1/anl/synoptic/locale/BR?token=51a4173d9feffc51771fd70398960ec1"

  public emitEvent = new EventEmitter();



  //------------------External data manegement------------------------//
  public getDadaServer(){
    
    return this.httpClient.get<FoodData[]>(this.URLDB)
      .pipe(
        tap(console.log)
      )
  }






  private list: Array<string> = [
    "Arroz",
    "Frango",
    "Ovo",
    "Agua"
  ]





  //Method Get Data local
  public FoodList() {
    return this.list;
  }
  //Method Return the length of my Local List
  public ContaTamanho(): any {
    return this.list.length
  }
  //Method save new itens at the list local
  public foodListAdd(value: string) {
    this.foodListAlert(value)
    return this.list.push(value)
  }
  //Create a event using a the emit by AngularCore
  public foodListAlert(value: string) {
    return this.emitEvent.emit(value)
  }



















}
