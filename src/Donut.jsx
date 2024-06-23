import { Doughnut } from "react-chartjs-2";
import React from 'react';
import { Chart as ChartJS, defaults } from "chart.js/auto";
function Donut(){

    return(
        <Doughnut data={
            {
                labels:["a","b","c"],
                datasets:[
                    {
                    label:"My First dataset",
                    data:[10,20,30],
                    backgroundColor:[
                               'rgb(255, 99, 132, 0.2)',
                               'rgb(54, 162, 235, 0.2)',
                               'rgb(255, 206, 86, 0.2)'
                                    ],
                    borderColor:[
                        'rgb(255, 99, 132, 0.2)',
                        'rgb(54, 162, 235, 0.2)',
                        'rgb(255, 206, 86, 0.2)'
                             ],                
                    },    
                         ],
            }
                  }>
            
        </Doughnut>
    )
}


export default Donut;