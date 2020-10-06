import { Component } from '@angular/core';
import { DocumentScanner, DocumentScannerOptions } from '@ionic-native/document-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public url:any;
  constructor(private scan: DocumentScanner) {}

  Scan(){

    let fileURI:any;
    let imageSrc:any;
    let opts: DocumentScannerOptions = {
      sourceType: 1,
      returnBase64: true,
      //del 1 al 5. 1 = mejor calidad 5 = peor
      quality: 1.0,};
      console.log(this.scan.scanDoc);
      
      this.scan.scanDoc(opts).then((res: string) =>{

        this.url = fileURI = res; 
        console.log(res);             
      })
    .catch((error: any) => console.error("error en el scaner: "+ error));

  }

  

}
