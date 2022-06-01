import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Chart, ChartSeries, ChartSeriesItem } from '@progress/kendo-react-charts';
import 'hammerjs';
const series = [20, 1, 18, 3, 15, 5, 10, 6, 9, 6, 10, 5, 13, 3, 16, 1, 19, 1, 20, 2, 18, 5, 12, 7, 10, 8];

export class ChartContainer extends React.Component {
  state = {
    style: 'normal'
  };

  render() {
    const {
      style
    } = this.state;
    return <div>
          <DropDownList data={['normal', 'step', 'smooth']} value={style} onChange={event => {
        this.setState({
          style: event.target.value
        });
      }} />
          <Chart>
            <ChartSeries>
              <ChartSeriesItem type="line" data={series} markers={{
            visible: false
          }} style={style} />
            </ChartSeries>
          </Chart>
        </div>;
  }

}
