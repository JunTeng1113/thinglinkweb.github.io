import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { styled } from '@mui/material/styles';
import { Animation } from '@devexpress/dx-react-chart';


const PREFIX = 'Demo';

const classes = {
  chart: `${PREFIX}-chart`,
};

const format = () => tick => tick;

const Root = props => (
  <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const Label = props => (
  <Legend.Label sx={{ pt: 1, whiteSpace: 'nowrap' }} {...props} />
);
const Item = props => (
  <Legend.Item sx={{ flexDirection: 'column' }} {...props} />
);

const ValueLabel = (props) => {
  const { text } = props;
  return (
    <ValueAxis.Label
      {...props}
      text={`${text}%`}
    />
  );
};

const TitleText = props => (
  <Title.Text {...props} sx={{ whiteSpace: 'pre' }} />
);

const StyledChart = styled(Chart)(() => ({
  [`&.${classes.chart}`]: {
    paddingRight: '20px',
  },
}));

export function ChartCard(props) {
    const { title } = props;
    const { data: chartData } = props;
    const { field } = props;
    const { fieldName } = props;
    return (
        <Paper sx={{ flexGrow: 1, minWidth: '300px'}}>
            <StyledChart
                data={chartData}
                className={classes.chart}
            >
                {/* <ArgumentAxis tickFormat={format} />
                <ValueAxis
                max={50}
                labelComponent={ValueLabel}
                /> */}

                <LineSeries
                name={fieldName}
                valueField={field}
                argumentField="time"
                />
                <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
                <Title
                text={title}
                textComponent={TitleText}
                />
                <Animation />
            </StyledChart>
        </Paper>
    )
}
