import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Curso } from '../models/curso';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Select2OptionData } from 'ng-select2';

@Injectable()
export class CursoService  extends BaseService {
  

  public cursos: Curso[] = [];

  public cursoRetorno: Observable<Curso[]>;

  public templateList: Select2OptionData[] = [];

  constructor(public http: Http) { 
    super(); 
  
  }

  obterCursos(): Observable<Curso[]> {

    return this.http.get(this.UrlServiceV1 + "cursosposgraduacao")
    .map((res: Response) => <Curso[]>res.json())
      .catch(super.serviceError);

   }


   cursosTemplateList(): Observable<Array<Select2OptionData>> {

    

    return Observable.create((obs) => {
      obs.next([
        {
          id: 'dyn1',
          text: 'Dynamic 1'
        },
        {
          id: 'dyn2',
          text: 'Dynamic 2'
        },
        {
          id: 'dyn3',
          text: 'Dynamic 3'
        },
        {
          id: 'dyn4',
          text: 'Dynamic 4'
        }
      ]);
      obs.complete();
    });
  }
 


}
