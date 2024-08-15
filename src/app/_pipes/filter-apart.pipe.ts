import { Pipe, PipeTransform } from '@angular/core';
import { Apart } from '../interfaces/interfacesMgn';

@Pipe({
  name: 'filterApart'
})
export class FilterApartPipe implements PipeTransform {


  transform(items: Apart[], searchText: string): Apart[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item.name.toLowerCase().includes(searchText) ||    item.direction.toLowerCase().includes(searchText);
    });
  }

}
