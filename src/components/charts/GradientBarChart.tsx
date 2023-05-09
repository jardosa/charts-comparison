import React, { useRef, useEffect } from 'react';
import { ChartDataset, Chart } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { TypedChartComponent } from 'react-chartjs-2/dist/types';
import annotationPlugin from 'chartjs-plugin-annotation'
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(annotationPlugin, zoomPlugin)

const GradientBarChart: React.FC<React.ComponentProps<TypedChartComponent<"bar">>> = ({ data, options, ...rest }) => {
  const chartRef = useRef<any>(null);


  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current?.ctx;
      const gradient = ctx?.createLinearGradient(0, 0, 0, 400);
      const hoverGradient = ctx?.createLinearGradient(0, 0, 0, 400);
      gradient?.addColorStop?.(0, 'rgba(202, 202, 202, 1)');
      gradient?.addColorStop?.(1, 'rgba(132, 145, 152, 1)');
      hoverGradient?.addColorStop?.(0, 'rgba(140, 179, 255, 1)');
      hoverGradient?.addColorStop?.(1, 'rgba(13, 148, 136, 1)');

      chartRef.current?.data.datasets?.forEach((dataset: ChartDataset) => {
        dataset.backgroundColor = gradient;
        dataset.hoverBackgroundColor = hoverGradient
      });
      chartRef.current?.update(null);
    }
  }, [data]);

  return <Bar {...rest} ref={chartRef} data={data} options={{
    ...options,
    plugins: {
      ...options?.plugins,
      tooltip: {
        callbacks: {
          title: () => '',
          label: ({ dataset, dataIndex, label }) => {
            const _label = label
            const value = dataset.data[dataIndex]
            return `${_label}: ${value}`;
          },
        },
        position: 'average',
        yAlign: "bottom",
        padding: 10,
        displayColors: false,
        bodyColor: 'rgba(63, 63, 70, 1)',
        bodyFont: {
          weight: '700', size: 10
        },
        backgroundColor: 'rgba(228, 228, 231, 1)',
        titleColor: 'rgba(63, 63, 70, 1)',
        titleFont: {
          weight: '400',
          lineHeight: '24px',
          size: 10
        },

      }
    }, onClick(event, elements, chart) {
      console.log({ event })
      console.log({ elements })
      console.log({ chart })
    },
  }} />;
};

export default GradientBarChart;