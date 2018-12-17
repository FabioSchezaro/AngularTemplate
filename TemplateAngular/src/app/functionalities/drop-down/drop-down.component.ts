import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import { Http } from '@angular/http';
import { CursoService } from 'src/app/services/curso.service';
import { Options } from 'select2';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html'
})
export class DropDownComponent implements OnInit {

  public exampleData: Array<Select2OptionData>;
  public options: Options;
  public value: string[];

  constructor(

    public http: Http, 
    private cursoService : CursoService

  ) { }

  ngOnInit() {

   // this.cursoSingularData = [];

    this.obterCursos();

  

    this.options = {
      width: '1000',
      multiple: true,
      tags: true
    };
    

  }

  obterCursos(){

    this.cursoService.obterCursos()
        .subscribe(x => {

          let dArray: Array<Select2OptionData> = [];

          for(let curso of x)
          {
           
            dArray.push({ id: curso.codigoCurso.toString(), text: curso.nome  })
          }

          this.exampleData = dArray;

         
      });

  }



}
