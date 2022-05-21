import { Pipe, PipeTransform } from '@angular/core';
import { IUserRegistration } from '../login/models/user.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(usersList: IUserRegistration[], searchText: string) {
    if(searchText){
    let users: IUserRegistration[] = usersList.filter(rowData => {
      let valuesArr = Object.values(rowData);
      if(valuesArr.find((word: string) => word.toString().startsWith(searchText))) {
        return true
      }else {
        return false;
      }
    });
    console.log(users);
    return users as Array<IUserRegistration>;}
    else{
      return usersList;
    }
  }

}
