import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface DataItem {
  name: string;
  value: number;
}

interface BarChartProps {
  data: DataItem[];
}

function D3BarChart({ data }: BarChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Set the dimensions and margins of the graph
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    // Set the scale for the x and y axes
    const x = d3.scaleLinear().range([0, width]);
    const y = d3.scaleBand().range([height, 0]);

    // Set the domain of the x and y scales
    x.domain([0, d3.max(data, (d) => d.value)!]);
    y.domain(data.map((d) => d.name)).padding(0.1);

    // Add the x axis to the chart
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    // Add the y axis to the chart
    svg.append('g').call(d3.axisLeft(y));

    // Add the bars to the chart
    svg
      .selectAll<SVGRectElement, DataItem>('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('y', (d) => y(d.name)!)
      .attr('width', (d) => x(d.value)!)
      .attr('height', y.bandwidth());
  }, [data]);

  return (
    <svg ref={svgRef}>
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
}


export default D3BarChart