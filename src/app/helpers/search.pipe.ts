import { Pipe, PipeTransform } from '@angular/core';
import { IUserRegistration } from '../login/models/user.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(dataToShow: any[], searchText: string) {
    if(searchText){
    let users: any[] = dataToShow.filter(rowData => {
      let valuesArr = Object.values(rowData);
      if(valuesArr.find((word: string) => word.toString().toLowerCase().startsWith(searchText.toLowerCase()))) {
        return true
      }else {
        return false;
      }
    });
    console.log(users);
    return users as Array<any>;}
    else{
      return dataToShow;
    }
  }

}
