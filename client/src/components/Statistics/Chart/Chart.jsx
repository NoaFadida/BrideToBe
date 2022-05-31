import React from 'react';
import './Chart.scss';

const Chart = ({ month, all }) => {
  let barFillHeight = '0%';
  if (all > 0) {
    barFillHeight = Math.round((month / all) * 100) + '%';
  }
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{barFillHeight}</div>
    </div>
  );
};

export default Chart;