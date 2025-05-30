import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL } from '../api';
import { Item} from '../Interface/items';
import { delay } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor( private httpClient:HttpClient){}
// "http://localhost:3000/api"
  loadAllItemsFromApi(){
  let url = `${SERVER_URL}/items`;
    return this.httpClient.get<Item[]>(url).pipe(delay(500));
  }

  loadItemByIdFromApi(id:string){

    if(isNaN(id as any)){
      throw("Invalid id");
    }

    let url = `${SERVER_URL}/items/${id}`;
      return this.httpClient.get<Item>(url, {observe:"response"});
  }

   AddedItemFromAPi(eachItem:Item){
    return this.httpClient.post<Item>(`${SERVER_URL}/items`, eachItem)
   }
   
   updateFromApi(id:string, updateItem:Item){
    return this.httpClient.put<Item>(`${SERVER_URL}/items/${id}`, updateItem, { observe:"response"})
   }


    deletFromApi(id:number){
          return this.httpClient.delete(`${SERVER_URL}/items/${id}`, { observe:"response"})
     }


}
