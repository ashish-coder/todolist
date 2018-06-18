import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {InformationInterface} from './models/information.interface';

const todoapi:string='http://localhost:3000/Information'


@Injectable()
export class DateService {

  constructor(private http: HttpClient) {
  }


  getData():Observable<InformationInterface[]>{
    return this.http
      .get('http://localhost:3000/Information')
      .map((response: InformationInterface[])=> response);
  }

  deletetodo(information:InformationInterface):Observable<InformationInterface>{
    return this.http
      .delete(`${todoapi}/${information.id}`)
      .map((response:InformationInterface) => response );
  }

  updatetodo(information:InformationInterface):Observable<InformationInterface>{
    return this.http
      .put(`${todoapi}/${information.id}`,information)
      .map((response:InformationInterface) => response );
  }

}
