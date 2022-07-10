import { useEffect, useState } from "react";
import Chart from 'react-apexcharts'

export default function Analys({props}){
    const [state, setState] = useState({
      
        series: [...props],
        options: {
          labels:['Task completed', 'Total task'],

          chart: {
            type: 'radialBar',
          },
          legend: {
            show: false,
            labels: {
                  colors: '#888',
                  useSeriesColors: false
              },
          },
          plotOptions: {
            radialBar: {
              
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                  formatter: function (val) {
                    return val
                  }
                },
                total: {
                  show: true,
                  label: 'Percent completed',
                  colors: '#fff',
                  formatter: function (w) {
                    return Math.round(w.globals.initialSeries[0] /w.globals.initialSeries[1] * 100 ) + '%'
                  }
                }
              }
            }
          },
          
          
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom',
                
              }
            }
          }]
        },
      
      
    })
    useEffect(() => {
      setState({...state, 'series': [...props]})
      
    },[props])
    return (
      <div className="chart-wrapper">
        <Chart
              options={state.options}
              series={state.series}
              type="radialBar"
              width="400"
        />
        
      </div>
    )
    /* return (
        
      ); */
}


    

     
    

  

   

