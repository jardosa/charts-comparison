import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react'
import { chartJSData, plotlyBarData, plotlyBarData2, plotlyData, sampledata } from '@/resources/data'
import dynamic from 'next/dynamic';
import _ from 'lodash'
import { Bar, Bubble, Doughnut, Line, Pie, PolarArea, Radar, Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  registerables
} from 'chart.js';
import ChartJSAuto from 'chart.js/auto';



import { Data, Layout } from 'plotly.js';
import { Chance } from 'chance';
import { TypedChartComponent } from 'react-chartjs-2/dist/types';
import D3BarChart from '@/components/charts/D3BarChart';


ChartJS.register(...registerables);

const GradientBarChart = dynamic(() => import('@/components/charts/GradientBarChart'), { ssr: false })
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })


const Chart = ({ type }: { type: string }) => {

  const [width, setWidth] = useState(640)
  const [height, setHeight] = useState(480)
  const [plotlyBarmode, setPlotlyBarmode] = useState<Layout['barmode']>('group')
  const [chartjsBarMode, setBarjsBarMode] = useState()
  const barRef = useRef(null)
  const gradientRef = useRef(null)
  const hoverGradientRef = useRef(null)

  const plotlyChartData = plotlyData[type as keyof typeof plotlyData]

  const chartJSChartData = chartJSData[type as keyof typeof chartJSData]

  useEffect(() => {
    if (barRef && barRef.current?.canvas) {
      var ctx = barRef?.current?.canvas?.getContext?.('2d');
      console.log(ctx)
      var gradient = ctx?.createLinearGradient(0, 0, 0, 400);
      gradient?.addColorStop?.(0, 'rgba(202, 202, 202, 1)');
      gradient?.addColorStop?.(1, 'rgba(132, 145, 152, 1)');
      gradientRef.current = gradient
      console.log(gradient)
    }
  })

  useEffect(() => {
    if (barRef && barRef.current?.canvas) {
      var ctx = barRef?.current?.canvas?.getContext?.('2d');
      console.log(ctx)
      var gradient = ctx?.createLinearGradient(0, 0, 0, 400);
      gradient?.addColorStop?.(1, 'rgba(140, 179, 255, 1)');
      gradient?.addColorStop?.(0, 'rgba(13, 148, 136, 1)');
      hoverGradientRef.current = gradient
      console.log(gradient)
    }
  })
  const chance = new Chance()




  const chartJsBarData = {
    datasets: [{
      data: sampledata,
    }],
    labels: sampledata.map(() => chance.name())
  }

  const chartJsChart = useMemo(() => {
    switch (type as keyof typeof chartJSData) {
      case 'bar':
        return <GradientBarChart data={chartJsBarData} width={width} height={height}
          options={{
            plugins: {
              zoom: {
                zoom: {
                  wheel: {
                    enabled: true,
                  },
                  pinch: {
                    enabled: true
                  },
                  mode: 'xy',
                }
              }
            }
          }} />
      case 'pie':
        return <Pie data={chartJSChartData} width={width} height={height} />
      case 'scatter':
        return <Scatter data={chartJSChartData} width={width} height={height} />
      case 'line':
        return <Line data={chartJSChartData} width={width} height={height} />
      case 'bubble':
        return <Bubble data={chartJSChartData} width={width} height={height} />
      case 'doughnut':
        return <Doughnut data={chartJSChartData} width={width} height={height} />
      case 'polarArea':
        return <PolarArea data={chartJSChartData} width={width} height={height} />
      case 'radar':
        return <Radar data={chartJSChartData} width={width} height={height} />
    }

  }, [chartJSChartData, chartJsBarData, height, type, width])

  return (
    <div className='p-5'>
      <div className='text-3xl font-bold'>{_.upperCase(`${type} Charts`)}</div>
      <div className='flex flex-wrap justify-evenly'>
        <div className='space-y-5 text-2xl '>
          <div className='w-full text-center'>Plotly</div>
          <Plot
            data={[plotlyBarData2 as Data]}
            layout={{
              width, height,
              title: 'Bar Chart with Gradient Colors',
              xaxis: { title: 'X Axis Label' },
              yaxis: { title: 'Y Axis Label' },
            }}
          />
        </div>
        <div className='space-y-5 text-2xl '>
          <div className='w-full text-center'>ChartJS</div>
          {chartJsChart}
        </div>
        <div className='space-y-5 text-2xl '>
          <div className='w-full text-center'>D3</div>
          <D3BarChart data={[
            { name: 'Apples', value: 20 },
            { name: 'Bananas', value: 15 },
            { name: 'Grapes', value: 25 },
            { name: 'Oranges', value: 10 },
            { name: 'Pears', value: 18 },
          ]} />
        </div>
      </div>
    </div>
  )
}

export default Chart
