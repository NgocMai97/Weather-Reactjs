import { useEffect, memo } from "react";
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

    const temps = []
    const feelLike = []

    useEffect(() => {
        const fetProduct = async () => {
            const weatherApir = await weatherApi.getAll();

            const hourly = weatherApir.hourly

            hourly.forEach((time, index) => {
                
                temps.push(time.temp)
                feelLike.push(time.feels_like)
            })

            // console.log('Temps', temps);
            // console.log('feel like',feelLike);
        }
        fetProduct();
    }, [])
    
    useEffect(() => {
        const ctx = document.getElementById('Canvas').getContext("2d");
            console.log('Temps', temps);
            console.log('feel like',feelLike);

        const config = {
            type: 'line',
            data: {
                labels: hourArray,
                datasets: [{
                    label: 'Temp (°C )',
                    data: temps,
                    backgroundColor: 'transparent',
                    borderColor: '#3cba9f',
                    borderWidth: 4
                },
                {
                    label: 'Feel like (°C )',
                    data: feelLike,
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
                        beginAtZero: false,
                        min: 15,
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



export default memo(Hour)