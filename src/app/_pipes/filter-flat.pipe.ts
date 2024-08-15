import { Pipe, PipeTransform } from '@angular/core';
import { Flat } from '../interfaces/interfacesMgn';

@Pipe({
  name: 'filterFlat'
})
export class FilterFlatPipe implements PipeTransform {

  transform(items: Flat[], searchText: string): Flat[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item.name.toLowerCase().includes(searchText) ||    item.contact.toLowerCase().includes(searchText);
    });
  }


}
