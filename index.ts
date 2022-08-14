import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { StockChart } from '@syncfusion/ej2-charts';
import { chartData } from './indicator-data';
import {
  DateTime,
  AreaSeries,
  CandleSeries,
  HiloOpenCloseSeries,
  HiloSeries,
  LineSeries,
  SplineSeries,
} from '@syncfusion/ej2-charts';
import {
  AccumulationDistributionIndicator,
  AtrIndicator,
  BollingerBands,
  EmaIndicator,
  MomentumIndicator,
} from '@syncfusion/ej2-charts';
import {
  MacdIndicator,
  RsiIndicator,
  Trendlines,
  SmaIndicator,
  StochasticIndicator,
} from '@syncfusion/ej2-charts';
import {
  IAxisLabelRenderEventArgs,
  IStockChartEventArgs,
  ChartTheme,
  Export,
} from '@syncfusion/ej2-charts';
import {
  TmaIndicator,
  RangeTooltip,
  Tooltip,
  ColumnSeries,
  Crosshair,
  ITooltipRenderEventArgs,
} from '@syncfusion/ej2-charts';
StockChart.Inject(
  DateTime,
  AreaSeries,
  CandleSeries,
  HiloOpenCloseSeries,
  HiloSeries,
  LineSeries,
  SplineSeries
);
StockChart.Inject(
  AccumulationDistributionIndicator,
  AtrIndicator,
  BollingerBands,
  EmaIndicator,
  MomentumIndicator
);
StockChart.Inject(
  MacdIndicator,
  RsiIndicator,
  SmaIndicator,
  StochasticIndicator,
  Export
);
StockChart.Inject(
  Trendlines,
  TmaIndicator,
  RangeTooltip,
  Tooltip,
  Crosshair,
  ColumnSeries
);

/**
 * Sample for Area Series with Empty Point
 */

let stockChart: StockChart = new StockChart({
  rows: [{ height: '30%' }, { height: '70%' }],
  chartArea: { border: { width: 0 } },
  primaryXAxis: {
    valueType: 'DateTime',
    majorGridLines: { width: 0 },
    crosshairTooltip: { enable: true },
  },
  primaryYAxis: {
    lineStyle: { color: 'transparent' },
    majorTickLines: { color: 'transparent', width: 0 },
  },
  axes: [
    {
      name: 'yAxis1',
      rowIndex: 1,
      opposedPosition: true,
      labelPosition: 'Inside',
      tickPosition: 'Inside',
      lineStyle: { color: 'transparent' },
      majorTickLines: { color: 'transparent' },
    },
  ],
  series: [
    {
      dataSource: chartData,
      type: 'Candle',
      yAxisName: 'yAxis1',
    },
    
    {
      dataSource: chartData,
      type: 'Column',
      yName: 'volume',
      enableTooltip: false,
    },
  ],
  crosshair: { enable: true },
  tooltip: { enable: true },
  stockEvents: [
    {   date: new Date(2012, 3, 1), text: 'Q2', description: '2012 Quarter2', type: 'Flag',
        background: 'red', border: { color: '#6c6d6d' }
    },
    {
        date: new Date(2012, 3, 20), text: 'Open', description: 'Markets openeds', textStyle: { color: 'white' },
        background: 'red', border: { color: '#f48a21' }
    },
    {
        date: new Date(2017, 6, 1), text: 'Q3', description: '2013 Quarter3', type: 'Flag',
        textStyle: { color: 'white' }, background: '#6c6d6d', border: { color: '#6c6d6d' }
    },
    {
        date: new Date(2012, 9, 1), text: 'Q4', description: '2013 Quarter4', type: 'Flag',
        textStyle: { color: 'white' }, background: '#6c6d6d', border: { color: '#6c6d6d' }
    },
    {
        date: new Date(2012, 7, 30), text: 'G', description: 'Google Stock',
        textStyle: { color: 'white' }, background: '#f48a21', border: { color: '#f48a21' }
    },
    {
        date: new Date(2012, 10, 1), text: 'Y', description: 'Yahoo Stock', type: 'Square',
        textStyle: { color: 'white' }, background: '#841391', border: { color: '#841391' }
    },
    {
        date: new Date(2012, 12, 0), text: 'Y2', description: 'Year 2013', type: 'Pin', showOnSeries: false,
        textStyle: { color: 'white' }, background: '#6322e0', border: { color: '#6322e0' }
    },
    {
        date: new Date(2013, 3, 1), text: 'Q2', description: '2013 Quarter2', type: 'Flag',
        textStyle: { color: 'white' }, background: '#6c6d6d', border: { color: '#6c6d6d' }
    },
    {
        date: new Date(2013, 3, 20), text: 'Q2', description: 'Surge in Stocks', type: 'ArrowUp',
        textStyle: { color: 'white' }, background: '#3ab0f9', border: { color: '#3ab0f9' }
    },
    {
        date: new Date(2013, 6, 1), text: 'Q3', description: '2013 Quarter3', type: 'Flag',
        textStyle: { color: 'white' }, background: '#6c6d6d', border: { color: '#6c6d6d' }
    },
    {
        date: new Date(2013, 9, 1), text: 'Q4', description: '2013 Quarter4', type: 'Flag',
        textStyle: { color: 'white' }, background: '#6c6d6d', border: { color: '#6c6d6d' }
    },
    {
        date: new Date(2013, 12, 0), text: 'Y3', description: 'Year 2014', type: 'Pin', showOnSeries: false,
        textStyle: { color: 'white' }, background: '#6322e0', border: { color: '#6322e0' }
    },
    {
        date: new Date(2014, 3, 1), text: 'Q2', description: '2014 Quarter2', type: 'Flag',
        textStyle: { color: 'white' }, background: '#6c6d6d', border: { color: '#6c6d6d' }
    },
    {
        date: new Date(2014, 6, 1), text: 'Q3', description: '2014 Quarter3',
        textStyle: { color: 'white' }, background: '#f48a21', border: { color: '#f48a21' }
    },
    {
        date: new Date(2014, 9, 1), text: 'Q4', description: '2014 Quarter4', type: 'Flag',
        textStyle: { color: 'white' }, background: '#6c6d6d', border: { color: '#6c6d6d' }
    },
    {
        date: new Date(2014, 12, 0), text: 'Y4', description: 'Year 2015', type: 'Pin', showOnSeries: false,
        textStyle: { color: 'white' }, background: '#6322e0', border: { color: '#6322e0' }
    },
    {
        date: new Date(2014, 2, 2), text: 'End', description: 'Markets closed', type: 'ArrowDown',
        textStyle: { color: 'white' }, background: '#3ab0f9', border: { color: '#3ab0f9' }
    },
    {
        date: new Date('2015-01-07'), text: 'A', description: 'Amazon Stock',
        textStyle: { color: 'white' }, background: '#f48a21', border: { color: '#f48a21' }
    },
    {
        date: new Date(2015, 1, 2), text: 'Q1', description: 'AAPL Stock',
        textStyle: { color: 'white' }, background: '#dd3c9f', border: { color: '#dd3c9f' }, type: 'Text'
    },
    {
        date: new Date(2015, 2, 12), text: 'Close', description: 'Markets closed',
        textStyle: { color: 'white' }, background: '#f48a21', border: { color: '#f48a21' }
    }
],

  tooltipRender: (args: ITooltipRenderEventArgs) => {
    if (args.text.split('<br/>')[4]) {
      let target: number = parseFloat(
        args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0]
      );
      let value: string = (target / 100000000).toFixed(1) + 'B';
      args.text = args.text.replace(
        args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0],
        value
      );
    }
  },
  axisLabelRender: (args: IAxisLabelRenderEventArgs) => {
    let text: number = parseFloat(args.text);
    if (args.axis.name === 'primaryYAxis') {
      args.text = text / 100000000 + 'B';
    }
  },
  title: 'AAPL Historical',
  load: (args: IStockChartEventArgs) => {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.stockChart.theme = <ChartTheme>(
      (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
        .replace(/-dark/i, 'Dark')
        .replace(/contrast/i, 'Contrast')
    );
  },
});
stockChart.appendTo('#container');
