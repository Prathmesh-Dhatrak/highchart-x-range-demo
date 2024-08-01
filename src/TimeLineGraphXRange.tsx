// TimeLineGraphXRange.tsx
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import xrange from 'highcharts/modules/xrange';

xrange(Highcharts);

interface TimeLineGraphXRangeProps {
  navs?: any;
}

const TimeLineGraphXRange: React.FC<TimeLineGraphXRangeProps> = ({ }) => {
  const getConfig = () => ({
    chart: {
      type: 'xrange'
    },
    title: {
      text: 'Highcharts X-range'
    },
    xAxis: {
      type: 'datetime'
    },
    yAxis: {
      title: {
        text: ''
      },
      categories: ['Prototyping', 'Development', 'Testing'],
      reversed: true
    },
    series: [{
      name: 'Project 1',
      pointWidth: 20,
      data: [{
        x: Date.UTC(2014, 10, 21),
        x2: Date.UTC(2014, 11, 2),
        y: 0,
        partialFill: 0.25
      }, {
        x: Date.UTC(2014, 11, 2),
        x2: Date.UTC(2014, 11, 5),
        y: 1
      }, {
        x: Date.UTC(2014, 11, 8),
        x2: Date.UTC(2014, 11, 9),
        y: 2
      }, {
        x: Date.UTC(2014, 11, 9),
        x2: Date.UTC(2014, 11, 19),
        y: 1
      }, {
        x: Date.UTC(2014, 11, 10),
        x2: Date.UTC(2014, 11, 23),
        y: 2
      }],
      dataLabels: {
        enabled: true
      }
    }]
  });

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={getConfig()}
      />
    </div>
  );
};

export default TimeLineGraphXRange;