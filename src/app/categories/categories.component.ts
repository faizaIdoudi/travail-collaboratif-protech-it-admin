import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit  {
  public chart: any;

  constructor(){}

  ngOnInit(): void {
    this.createChart();
  }
  createChart(){

    this.chart = new Chart("MChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Cloud', 'Projets','Formation','Services','Logiciels','Matériel', ],
	       datasets: [{
    label: 'My First Dataset',
    data: [300, 240, 100, 432, 253, 34],
    backgroundColor: [
      'red',
      'pink',
      'green',
			'yellow',
      'orange',
      'blue',
    ],
    hoverOffset: 4
  }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Répartition des Dépenses par Catégorie',
          },
          legend: {
            position: 'bottom',
          },
        },
      }

    });
  }

}










































