import { Component } from '@angular/core';

@Component({
  selector: 'app-arquivos',
  templateUrl: './arquivos.component.html',
  styleUrls: ['./arquivos.component.css']
})
export class ArquivosComponent {
  title = 'Upload'
  file?: File;

  onSubmit(){
    console.log(this.file?.name)
  }
}
