import { useEffect, useRef, useState } from "react";
import Chart from 'chart.js/auto'
import weatherApi from '~/api/weatherApi'
import styles from './Hour.module.scss'
import classNames from "classnames/bind";

function Hour() {
    let chartHour = null;
    const cx = classNames.bind(styles)

    var hourArray = [],
        d = new Date(),
        h = d.getHours(),

        ampm = h >= 12 ? 'PM' : 'AM';

        for (var i = h; i < 24; i++) {
            hourArray.push((i%12 + ':' + '00') + ' ' +  ampm);
        }

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
                labels: hourArray,
                datasets: [{
                    label: 'Temp (°C )',
                    data: [12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3],
                    backgroundColor: 'transparent',
                    borderColor: '#3cba9f',
                    borderWidth: 4
                },
                {
                    label: 'Feel like (°C )',
                    data: [6, 14, 5, 5, 3, 2,6, 4, 5, 5, 3, 2,6, 14, 5, 5, 3, 2,6, 14, 5, 5, 3, 2],
                    backgroundColor: 'transparent',
                    borderColor: '#8e5ea2',
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
                animations: {
                    tension: {
                        duration: 1000,
                        easing: 'linear',
                        from: 1,
                        to: 0,
                        loop: true
                    }
                }
                ,
                scales: {
                    y: {
                        beginAtZero: true,
                          steps: 2,
                          stepValue: 6,
                          max: 60 //max value for the chart is 60
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
        <div className={cx('chart-wrap', 'bg-white')}>
            <canvas id="Canvas" width="900" height="600"></canvas>
        </div>
    )
}



export default Hour