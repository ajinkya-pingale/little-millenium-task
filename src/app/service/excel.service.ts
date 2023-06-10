import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  generateExcel(header,data, name){
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Sheet 1');
    //Add Row and formatting
    let titleRow = worksheet.addRow(header);
    titleRow.eachCell(cell => {
      cell.font = { name: 'Calibri', bold: true }
      }
    )
    worksheet.getColumn(1).width = 30;
    worksheet.getColumn(2).width = 30;
    worksheet.getColumn(3).width = 30;
    worksheet.getColumn(4).width = 30;
    worksheet.getColumn(5).width = 30;
    worksheet.getColumn(6).width = 30;
    worksheet.getColumn(7).width = 30;
    // @ts-ignore
    data.forEach(d => {
        let row = worksheet.addRow(d);
      }
    );

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, name+'.xlsx');
    })
  }
}
