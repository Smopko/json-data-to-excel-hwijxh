import { Component } from '@angular/core';
import {ExcelService} from './services/excel.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  groupData: any;
  name = 'Angular';
  data: any = [{
    case_worked: "abc",
    note: "Test",
    id: "1234"
  },
  {
    case_worked: "def",
    note: "test 1",
    id: "1234"
  },
  {
    case_worked: "def",
    note: "Test 2",
    id: "3456"
  }];
  constructor(private excelService:ExcelService){
    this.groupData = this.organise(this.data);
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.data, 'export-to-excel');
  }
  organise(arr) {
    var headers = [], // an Array to let us lookup indicies by group
      objs = [],    // the Object we want to create
      i, j;
    for (i = 0; i < arr.length; ++i) {
      j = headers.indexOf(arr[i].id); // lookup
      if (j === -1) { // this entry does not exist yet, init
        j = headers.length;
        headers[j] = arr[i].id;
        objs[j] = {};
        objs[j].id = arr[i].id;
        objs[j].data = [];
      }
      objs[j].data.push( // create clone
        {
          case_worked: arr[i].case_worked,
          note: arr[i].note, id: arr[i].id
        }
      );
    }
    return objs;
  }
}
