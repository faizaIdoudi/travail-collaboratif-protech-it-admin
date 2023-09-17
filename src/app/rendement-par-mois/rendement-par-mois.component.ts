import { Component, OnInit, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-rendement-par-mois',
  templateUrl: './rendement-par-mois.component.html',
  styleUrls: ['./rendement-par-mois.component.css']
})
export class RendementParMoisComponent implements OnInit{

  public chart: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        datasets: [
          {
            label: "développement",
            data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196],
            borderColor: '#044342',
            borderWidth: 2,
            pointBackgroundColor: '#044342',
            fill: false
          },
          {
            label: 'Taux de rétention ',
            data: [47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159],
            borderColor: '#7e0505',
            borderWidth: 2,
            pointBackgroundColor: '#7e0505',
            fill: false
          },
          {
            label: 'projets achevés ',
            data: [17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59],
            borderColor: '#ed9e20',
            borderWidth: 2,
            pointBackgroundColor: '#ed9e20',
            fill: false
          },
        ]
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Rendement en $'
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position:  'bottom'
          },
          title: {
            display: true,
            text: 'Rendement par mois'
          }
        }
      }
    });



  }


}












