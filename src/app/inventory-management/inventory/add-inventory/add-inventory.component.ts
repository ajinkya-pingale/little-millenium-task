import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import { CommonService } from 'src/app/service/common.service';
import { createFormJson } from '../form-json';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  formDataJson = createFormJson
  errors:any;
  storeOption = []
  products = [
    {
      name: 'Piya Mukharjee',
      zone: 'West',
      region: 'Mum',
      team_type: 'Marketing',
      month:'Jan',
      royaly_sk:41655078,
      enrolments: 3461
    },
    {
      name: 'Piya Mukharjee',
      zone: 'West',
      region: 'Mum',
      team_type: 'Marketing',
      month:'Feb',
      royaly_sk:41655078,
      enrolments: 3461
    },
    {
      name: 'Piya Mukharjee',
      zone: 'West',
      region: 'Mum',
      team_type: 'Marketing',
      month:'Mar',
      royaly_sk:41655078,
      enrolments: 3461
    },
    {
      name: 'Piya Mukharjee',
      zone: 'West',
      region: 'Mum',
      team_type: 'Marketing',
      month:'Apr',
      royaly_sk:41655078,
      enrolments: 3461
    },
    {
      name: 'Piya Mukharjee',
      zone: 'West',
      region: 'Mum',
      team_type: 'Marketing',
      month:'May',
      royaly_sk:41655078,
      enrolments: 3461
    },

  ]
  typeOption = [
    {name:'credit'},
    {name:'debit'}
  ]
  constructor() {
   }

   data: any;

    options: any;
  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Third Dataset',
                    data: [12, 51, 62, 33, 21, 62, 45],
                    fill: true,
                    borderColor: documentStyle.getPropertyValue('--orange-500'),
                    tension: 0.4,
                    backgroundColor: 'rgba(255,167,38,0.2)'
                }
            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
  }



}
