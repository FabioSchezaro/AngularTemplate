import { Component, OnInit } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import emailMask from 'text-mask-addons/dist/emailMask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'
import { conformToMask } from 'text-mask-core';

@Component({
  selector: 'app-mascara',
  templateUrl: './mascara.component.html'
})
export class MascaraComponent implements OnInit {

  public cpfModel = '';
  public maskcpf = [ /\d/, /\d/, /\d/, '.', ' ', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'-', /\d/, /\d/];
  public maskfone = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/,  /\d/,'-', /\d/, /\d/, /\d/, /\d/];
  public maskdinheiro = ['R$', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/,  /\d/,'-', /\d/, /\d/, /\d/, /\d/];
  public maskEmail = emailMask;

 

  public numberMask = createNumberMask({
    prefix: 'R$ ',
    suffix: '' ,
    includeThousandsSeparator: true,
    allowDecimal: true,
    decimalLimit: 2,
    requireDecimal: true
  })

  public autoCorrectedDatePipe = createAutoCorrectedDatePipe('dd/mm/yyyy')

  constructor() { }

  ngOnInit() {
  }

}
