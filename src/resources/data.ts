import Chance from 'chance'
import { Data } from 'plotly.js'


const chance = new Chance()

const plotlySampleData = [
  { year: 2013, data: [{ name: 'John Michaloudis', value: 586_802 }, { name: 'Homer Simpson', value: 705_884 }, { name: 'Ian Wright', value: 154_227 }] },
  { year: 2014, data: [{ name: 'John Michaloudis', value: 382_884 }, { name: 'Homer Simpson', value: 284_002 }, { name: 'Ian Wright', value: 244_820 }] },
  { year: 2015, data: [{ name: 'John Michaloudis', value: 302_558 }, { name: 'Homer Simpson', value: 862_134 }, { name: 'Ian Wright', value: 169_549 }] }
]

const chartJsSampleData = [
  {
    name: 'John Michaloudis', values: [{ year: 2013, value: 586_802 }, { year: 2014, value: 382_884 }, { year: 2015, value: 302_558 }]
  },
  {
    name: 'Homer Simpson', values: [{ year: 2013, value: 705_884 }, { year: 2014, value: 284_002 }, { year: 2015, value: 862_134 }]
  },
  {
    name: 'Ian Wright', values: [{ year: 2013, value: 154_227 }, { year: 2014, value: 244_820 }, { year: 2015, value: 169_549 }]
  },
]
export const sampledata = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

export const plotlyBarData = plotlySampleData.reduce((acc: any, curr: any) => {
  return [...acc, { name: curr.year, type: 'bar', x: curr.data.map((d: any) => d.name), y: curr.data.map((d: any) => d.value) }]
}, [])

export const plotlyBarData2: Data = {
  type: 'bar', name: 'Sample PlotlyBarChart', x: sampledata.map(() => chance.name()), y: sampledata,
  marker: {
    colorscale: [[0, '#849198'], [1, '#CACACA']],
    color: sampledata,
    colorbar: {
      thickness: 20,
      title: 'Colorbar',
    },
  },
  hovertemplate: '%{y}',
}


const chartJSBarData = {
  labels: chartJsSampleData[0].values.map((val) => val.year as unknown as string),
  datasets: chartJsSampleData.reduce((acc: any, curr: any) => {
    return [...acc, { label: curr.name, data: curr.values.map((val: any) => val.value) }]
  }, [])
}

const chartJSBarData2 = []




export const plotlyData = {
  bar: {
    x: sampledata.map(() => chance.name()),
    y: sampledata,
    type: 'bar',
  },
  scatter: [{
    type: 'scatter',
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
  }, {
    type: 'scatter',
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
  }],
  barpolar: [],
  box: [],
  candlestick: [],
  carpet: [],
  choropleth: [],
  choroplethmapbox: [],
  cone: [],
  contour: [],
  contourcarpet: [],
  densitymapbox: [],
  funnel: [],
  funnelarea: [],
  heatmap: [],
  heatmapgl: [],
  histogram: [],
  histogram2d: [],
  histogram2dcontour: [],
  image: [],
  indicator: [],
  isosurface: [],
  mesh3d: [],
  ohlc: [],
  parcats: [],
  parcoords: [],
  pie: [],
  pointcloud: [],
  sankey: [],
  scatter3d: [],
  scattercarpet: [],
  scattergeo: [],
  scattergl: [],
  scattermapbox: [],
  scatterpolar: [],
  scatterpolargl: [],
  scatterternary: [],
  splom: [],
  streamtube: [],
  sunburst: [],
  surface: [],
  table: [],
  treemap: [],
  violin: [],
  volume: [],
  waterfall: []
}


export const chartJSData = {
  bar: {
    datasets: [{
      data: sampledata,
    }],
    labels: sampledata.map(() => chance.name())
  },
  pie: chartJSBarData,
  scatter: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: Array.from({ length: 100 }, () => ({
        x: chance.integer({ min: 0, max: 100 }),
        y: chance.integer({ min: 0, max: 100 }),
      })) as unknown as number[],
      borderWidth: 1
    }]
  },
  line: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  bubble: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: Array.from({ length: 100 }, () => ({
        x: chance.integer({ min: 0, max: 100 }),
        y: chance.integer({ min: 0, max: 100 }),
      })) as unknown as number[],
      borderWidth: 1
    }]
  },
  doughnut: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  polarArea: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  radar: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
}