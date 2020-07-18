import React, { useEffect, useRef } from 'react';

import * as d3 from 'd3';

const circle = (x, y, r, c, svg) => {
  svg.append('circle').attr('cx', x).attr('cy', y).attr('r', r).style('fill', c);
};

const halfcircle = (x, y, rad, rot, c, svg) => {
  const arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(rad)
    .startAngle(-Math.PI * 0.5)
    .endAngle(Math.PI * 0.5);

  svg
    .append('path')
    .attr('transform', 'translate(' + [x, y] + ')rotate(' + rot + ')')
    .attr('d', arc)
    .style('fill', c);
};

const line = (x1, y1, x2, y2, w, svg) => {
  svg
    .append('line')
    .attr('x1', x1)
    .attr('y1', y1)
    .attr('x2', x2)
    .attr('y2', y2)
    .attr('stroke-width', w)
    .attr('stroke', 'black');
};

const rect = (x, y, w, h, c, svg) => {
  svg.append('rect').attr('x', x).attr('y', y).attr('width', w).attr('height', h).style('fill', c);
};

const triangle = (p, c, svg) => {
  svg.append('polygon').attr('points', p).attr('fill', c);
};

const BirdBox = () => {
  const chartContainer = useRef();

  useEffect(() => {
    if (chartContainer.current) {
      createBarChart();
    }
  }, []);

  const createBarChart = () => {
    const width = 360,
      height = 656,
      centerWidth = width / 2,
      centerHeight = height / 2,
      leftWingX = centerWidth - 25,
      leftWingY = centerHeight - 75,
      rightWingX = centerWidth + 75,
      rightWingY = centerHeight - 75,
      bottomLeftWing = leftWingY + 240,
      bottomRightWing = rightWingY + 240;

    const topMouth =
      '' +
      (leftWingX + 22) +
      ',' +
      (leftWingY - 25) +
      ' ' +
      (leftWingX + 78) +
      ',' +
      (leftWingY - 25) +
      ' ' +
      (leftWingX + 50) +
      ',' +
      (leftWingY - 53);
    const bottomMouth =
      '' +
      (leftWingX + 22) +
      ',' +
      (leftWingY - 23) +
      ' ' +
      (leftWingX + 78) +
      ',' +
      (leftWingY - 23) +
      ' ' +
      (leftWingX + 50) +
      ',' +
      (leftWingY - 5);
    const tail =
      '' +
      leftWingX +
      ',' +
      (leftWingY - 42) +
      ' ' +
      leftWingX +
      ',' +
      0 +
      ' ' +
      (leftWingX - 75) +
      ',' +
      0;

    const svg = d3
      .select(chartContainer.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Bird legs
    line(leftWingX, bottomLeftWing, leftWingX, bottomLeftWing + 160, 3, svg);
    line(rightWingX, bottomRightWing, rightWingX, bottomRightWing + 160, 3, svg);
    circle(leftWingX, bottomLeftWing + 40, 7, 'black', svg);
    circle(rightWingX, bottomRightWing + 40, 7, 'black', svg);

    // Make a thicc bird bod
    circle(centerWidth + 25, centerHeight + 25, 150, '#f6552e', svg);

    // Add wings to this thicc bird
    halfcircle(centerWidth + 75, centerHeight + 25, 100, 90, '#eb342c', svg);
    halfcircle(centerWidth - 25, centerHeight + 25, 100, -90, '#eb342c', svg);

    // Bird wings
    line(leftWingX, leftWingY, leftWingX - 75, leftWingY + 165, 2, svg);
    line(leftWingX, leftWingY, leftWingX - 95, leftWingY + 130, 2, svg);
    line(leftWingX, leftWingY, leftWingX - 100, leftWingY + 110, 2, svg);

    line(rightWingX, rightWingY, rightWingX + 75, rightWingY + 165, 2, svg);
    line(rightWingX, rightWingY, rightWingX + 95, rightWingY + 130, 2, svg);
    line(rightWingX, rightWingY, rightWingX + 100, rightWingY + 110, 2, svg);

    // Bird head
    const headHeight = 125;
    rect(leftWingX, leftWingY - headHeight, rightWingX - leftWingX, headHeight, '#f6552e', svg);

    halfcircle(centerWidth + 125, centerHeight - 203, 100, -90, 'white', svg);
    halfcircle(centerWidth - 75, centerHeight - 203, 100, 90, 'white', svg);

    // Bird face
    rect(leftWingX + 20, leftWingY - 55, rightWingX - leftWingX - 40, 50, 'black', svg);

    halfcircle(
      centerWidth + 25,
      centerHeight - 81,
      (rightWingX - leftWingX - 40) / 2,
      180,
      'black',
      svg
    );
    triangle(topMouth, '#f8a539', svg);
    triangle(bottomMouth, '#f8a539', svg);

    circle(centerWidth + 59, centerHeight - 133, 5, 'black', svg);
    circle(centerWidth - 9, centerHeight - 133, 5, 'black', svg);

    // Bird tail
    triangle(tail, '#f6552e', svg);

    line(leftWingX, leftWingY - 42, leftWingX - 20, 0, 2, svg);
    line(leftWingX, leftWingY - 42, leftWingX - 40, 0, 2, svg);
    line(leftWingX, leftWingY - 42, leftWingX - 55, 0, 2, svg);
    line(leftWingX, leftWingY - 42, leftWingX - 65, 0, 2, svg);
  };

  return <div id="bird-box" ref={chartContainer} />;
};
export default BirdBox;
