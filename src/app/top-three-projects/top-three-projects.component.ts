import { Component } from '@angular/core';

import { Chart } from 'angular-highcharts';
import AccessibilityModule from 'highcharts/modules/accessibility';


@Component({
  selector: 'app-top-three-projects',
  templateUrl: './top-three-projects.component.html',
  styleUrls: ['./top-three-projects.component.css']
})
export class TopThreeProjectsComponent {

  createChart(){}


  chart = new Chart({
    chart: {
      type: 'bar',
      height: 225
    },
    title: {
      text: 'Top 3 Projets'
    },
    xAxis: {
      categories: [
        'Smart Home Control',
        'Eco-Friendly Energy Solutions',
        'Healthcare Data Analytics',
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
     {
      type: 'bar',
      showInLegend: false,
      data: [
        {
          name: 'Smart Home Control',
          y: 395,
          color: '#044342',
        },
        {
          name: 'Eco-Friendly Energy Solutions',
          y: 385,
          color: '#7e0505',
        },
        {
          name: 'Healthcare Data Analytics',
          y: 275,
          color: '#ed9e20',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

  constructor() {

  }



}
