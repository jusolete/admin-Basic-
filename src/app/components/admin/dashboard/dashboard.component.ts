import { Component, OnInit } from '@angular/core';
import {Chart} from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  grafica=[];

  constructor() { }

  ngOnInit() {
    this.llenarGrafica();
  }

  llenarGrafica(){
    this.grafica=new Chart('canvas',{
      type:'bar',
      data:{
        labels:["1","2","3"],
        datasets:[{
          label:"Ventas de hoy",
          data:["500","250","400"],
          backgroundColor: [
            'rgba(255, 99, 132, 0.3)',
            'rgba(54, 162, 235, 0.3)',
            'rgba(255, 206, 86, 0.3)',
            'rgba(75, 192, 192, 0.3)',
            'rgba(153, 102, 255, 0.3)',
            'rgba(255, 159, 64, 0.3)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        }]
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
    });
  }

}
