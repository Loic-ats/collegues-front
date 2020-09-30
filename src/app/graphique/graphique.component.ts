import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graphique',
  templateUrl: './graphique.component.html',
  styleUrls: ['./graphique.component.css']
})
export class GraphiqueComponent implements OnInit {
 constructor() { }

  ngOnInit(): void {
    Highcharts.chart('courbe', this.courbe);
           
  }

  public courbe: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: {
      text: 'Evolution des ventes par salariés (K€/Ans)'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      tickmarkPlacement: 'on',
      title: {
          enabled: false
      }
  },
    series: [{
      name: 'Gelaron',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
  }, {
      name: 'Dhalor',
      data: [200, 203, 276, 408, 547, 729, 628]
  }, {
      name: 'kroche',
      data: [180, 315, 540, 400, 339, 818, 1201]
  }]
  }

}
