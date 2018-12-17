import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName, FormsModule } from '@angular/forms';
import { CursoService } from 'src/app/services/curso.service';
import { ThrowStmt } from '@angular/compiler';
import { Curso } from 'src/app/models/curso';
import { Http } from '@angular/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})

export class TableComponent implements OnInit {

  message = '';
  dtOptions: DataTables.Settings = {};
  dtOptions_evento_linha: DataTables.Settings = {};
  public cursos: Curso[] = [];

  constructor(

    public http: Http, 
    private cursoService : CursoService
   
  ) { }


  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.obterCursos();

    this.dtOptions_evento_linha.data = this.cursos;

    this.dtOptions_evento_linha  = {
     
      columns: [{
        title: 'Código do Curso',
        data: 'codigoCurso'
      }, {
        title: 'Código ERP',
        data: 'codigoErp'
      }, {
        title: 'Nome',
        data: 'nome'
      }],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          self.someClickHandler(data);
        });
        return row;
      }
    };

    
  

  }

  someClickHandler(info: any): void {
    this.message = info.codigoCurso + ' - ' + info.nome;
  }


  obterCursos(){

    this.cursoService.obterCursos()
        .subscribe(x => {

          for(let curso of x)
          {
            this.cursos.push({ codigoCurso: curso.codigoCurso, codigoErp: curso.codigoErp, nome: curso.nome, linkExterno: curso.linkExterno  })
          }

         
      });

  }

}
