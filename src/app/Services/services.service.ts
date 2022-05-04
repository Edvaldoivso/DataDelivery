import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  public URLTempo: string = "https://apiadvisor.climatempo.com.br/api/v1/anl/synoptic/locale/BR?token=51a4173d9feffc51771fd70398960ec1"

  constructor(private httpClient: HttpClient) { }

  public emitEvent = new EventEmitter();
  public NovaLista : Array<string> = []
  private list: Array<string> = [
    "Arroz",
    "Frango",
    "Ovo",
    "Agua"
  ]


  //Method Get Data
  public FoodList() {
    return this.list;
  }

  public TamList(){
    return this.list.length
  }



  public foodListAdd(value: string) {
    this.foodListAlert(value)
    return this.list.push(value)
  }

  public Compara(){
    
    return this.NovaLista
  }








  public foodListAlert(value: string) {
    return this.emitEvent.emit(value)
  }















}
