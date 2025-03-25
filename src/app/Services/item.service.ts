import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL } from '../api';
import { Item} from '../Interface/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {


  constructor( private httpClient:HttpClient){}
loadAllItemsFromApi(){
  let url = `${SERVER_URL}/items`;
  return this.httpClient.get<Item[]>(url);
}

AddedItemFromAPi(eachItem:Item){
  return this.httpClient.post<Item>(`${SERVER_URL}/items`, eachItem)
}

}
