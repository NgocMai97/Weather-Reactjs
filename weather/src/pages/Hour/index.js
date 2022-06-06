import { useEffect, useRef } from "react";
import Chart from 'chart.js/auto'
import weatherApi from '~/api/weatherApi'


function Hour() {
    let chartHour = null;

    useEffect(() => {
        const fetProduct = async () => {
            const weatherApir = await weatherApi.getAll();
            console.log('api',weatherApir);
        }
        fetProduct();
    }, [])

    useEffect(() => {
        const ctx = document.getElementById('Canvas').getContext("2d");

        const config = {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: 'Temp (°C )',
                    data: [12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3],
                    backgroundColor: 'transparent',
                    borderColor: 'red',
                    borderWidth: 4
                },
                {
                    label: 'Feel like (°C )',
                    data: [6, 14, 5, 5, 3, 2,6, 4, 5, 5, 3, 2,6, 14, 5, 5, 3, 2,6, 14, 5, 5, 3, 2],
                    backgroundColor: 'transparent',
                    borderColor: 'green',
                    borderWidth: 4
                }
            ]
            },
            options: {
                elements: {
                    line: {
                        tension: 0
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }

        if (chartHour !== null) {
            chartHour.destroy();
        }
        chartHour = new Chart(ctx, config);
    
}, [])

    return (
        <div className="chart-wrap">
            <canvas id="Canvas" width="900" height="600"></canvas>
        </div>
    )
}



export default Hour