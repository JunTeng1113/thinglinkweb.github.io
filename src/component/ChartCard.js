
import { flower as chartData } from './data-vizualization.js';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartLegend,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from "@progress/kendo-react-charts";
import Paper from '@mui/material/Paper';
// import "hammerjs";
const series = [
    20, 1, 18, 3, 15, 5, 10, 6, 9, 6, 10, 5, 13, 3, 16, 1, 19, 1, 20, 2, 18, 5,
    12, 7, 10, 8,
];

export const ChartContainer = (props) => {
    const { style } = props;
    const { title } = props;
    const { fieldName } = props;
    const { field } = props;
    const { data } = props;
    const time = data.map(function(value) {return value.time});
    const temp = data.map(function(value) {return value.temp});
    const humidity = data.map(function(value) {return value.humidity});
    const series = {
        temp: temp,
        humidity: humidity
    }
    return (
    <Paper>
        <Chart>
            <ChartTitle
            text={title}
            font="19pt sans-serif"
            />
            <ChartCategoryAxis>
              <ChartCategoryAxisItem
                title={{
                  text: "Time",
                }}
                categories={time}
                type={'date'}
              />
            </ChartCategoryAxis>
            <ChartLegend position="custom" offsetX={40} offsetY={25} />
            <ChartSeries>
                <ChartSeriesItem
                    name={fieldName}
                    type="line"
                    data={series[field]}
                    markers={{
                        visible: false,
                    }}
                    style={style}
                />
            </ChartSeries>
        </Chart>
    </Paper>
    );
}
