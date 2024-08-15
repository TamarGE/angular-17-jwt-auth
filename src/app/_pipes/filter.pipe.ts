import { Pipe, PipeTransform } from '@angular/core';
import { Apart } from '../interfaces/interfacesMgn';

@Pipe({
  name: 'filterAparts'
})
export class FilterPipe implements PipeTransform {

  // se ingresa uin json y un texto y devuelce el valor filtrado



    transform(items: Apart[], searchText: string): any {
      if (!items) {
        return [];
      }
      if (!searchText) {
        return items;
      }
      searchText = searchText.toLowerCase();
      return items.filter(item => {
        item.name.toLowerCase().includes(searchText) ||
        item.direction.toLowerCase().includes(searchText)
      });
    }







}
