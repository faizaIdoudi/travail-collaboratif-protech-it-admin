import { Component, OnInit, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-rendement-par-mois',
  templateUrl: './rendement-par-mois.component.html',
  styleUrls: ['./rendement-par-mois.component.css']
})
export class RendementParMoisComponent implements OnInit{
  @ViewChild('chartContainer')  chartContainer !: ElementRef;

  chart = new Chart({
    chart : {
      type:'line',
      height: 325
    },
    title : {
      text :'Rendement par mois'
    },
    xAxis : {
      categories : [
        'Janvier',
        'Fevrier',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Aout',
        'Septembre',
        'Octobre',
        'Novembre',
        'Decembre'
    ]
    },
    yAxis : {
      title : {
        text : 'Revenus en $'
      }

    },
    series: [
      {
        name: "Ventes",
        type: "line",
        color: '#044342',
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
      },
      {
        name: 'Profit',
        type: 'line',
        color: '#7e0505',
        data: [
          47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159
        ]
      },
      {
        name: 'Dépenses',
        type: 'line',
        color: '#ed9e20',
        data: [
          17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59
        ]
      },
    ],
    credits: {
      enabled: false
    }
  });

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.chart = new Chart({
      chart: {
        type: 'line',
        height: 325,
        renderTo: this.chartContainer.nativeElement
      },
      title: {
        text: 'Rendement par mois'
      },
      xAxis: {
        categories: [
          'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
        ]
      },
      yAxis: {
        title: {
          text: 'Revenus en $'
        }
      },
      series: [
        {
          name: "Ventes",
          type: 'line',
          data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196],
          color: '#044342'
        },
        {
          name: 'Profit',
          type: 'line',
          data: [47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159],
          color: '#7e0505'
        },
        {
          name: 'Dépenses',
          type: 'line',
          data: [17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59],
          color: '#ed9e20'
        }
      ],
      credits: {
        enabled: false
      }
    });

}


}










