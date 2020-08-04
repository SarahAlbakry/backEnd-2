import { User} from './../user';
// import { UpdateUser } from './../user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServesEmploeeService {

  constructor(private http:HttpClient) { }

 private AllUserUrl='https://backend-people-crud-app.herokuapp.com/users';
 private deleteUserUrl='https://backend-people-crud-app.herokuapp.com/users/';
 private getOneUser='https://backend-people-crud-app.herokuapp.com/users/';
 private addUserUrl='https://backend-people-crud-app.herokuapp.com/users/add';
 private updateUrl='https://backend-people-crud-app.herokuapp.com/users/update';
 private rigesterUrl='https://backend-people-crud-app.herokuapp.com/users/register';
 private loginUrl='https://backend-people-crud-app.herokuapp.com/users/login';
 private detailsUrl='https://backend-people-crud-app.herokuapp.com/users/details';

 
getUser()
{
  return this.http.get<any>(this.AllUserUrl); 
}
deleteUser(id:string)
{
  return this.http.delete<any>(this.deleteUserUrl+id);
}
addUser(user:User)
{
 return this.http.post<any>(this.addUserUrl,user);
}
OneUser(id:string)
{
  return this.http.get<any>(this.getOneUser+id)
}
UpdateUser(user:User)
{
  return this.http.put<any>(this.updateUrl,user);
}
DetailseUser(user:User)
{
  return this.http.put<any>(this.detailsUrl,user);
}
RegisterAdmin(user:User)
{
  return this.http.post<any>(this.rigesterUrl,user);
}
LoginAdmin(user:User)
{
  return this.http.post<any>(this.loginUrl,user);
}
islogind()
{
  let stor=localStorage.getItem("mystore");
  if(stor)
  {
    return true;
  }
  else
  {
    return false;
  }

}
}


