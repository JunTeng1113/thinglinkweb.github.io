import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { alpha } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import { InfoCard, ConsoleCard } from './component/Card.js';
import { ChartCard } from './component/Chart.js';
import { useState, useEffect } from 'react';
import { useMergeState } from 'react-hooks-lib'
import Service from './component/service.js';
import ApexChart from './component/ApexChart.js';
import { flower as chartData } from './component/data-vizualization.js';
import {ChartContainer} from './component/ChartCard.js';
import '@progress/kendo-theme-default/dist/all.css';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const [controls, setControls] = useState(null);

  
  const onDataChange = (items) => {
    let tutorials = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      tutorials.push({
        key: key,
        value: data
      });
    });

    setControls(tutorials);
  }

  const updateData = (e, index) => {
    console.log(controls)
    const data = controls[index];
    data['value'][e.target.value] = e.target.checked;
    // setControls(data)
    Service.update(data['key'], data['value'])
      .then(() => {
        console.log('The Data was updated successfully!');
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    Service.getAll().on("value", onDataChange);
  }, [])
  return (
    <>
      <Grid container spacing={1} sx={{p: 2}} columns={{ xs: 4, sm: 4, md: 10}}>
        <Grid item xs={4} sm={4} md={3}>
          {controls && <InfoCard data={controls} />}
        </Grid>
        <Grid item xs={4} sm={4} md={7}>
          {controls && <ConsoleCard data={controls} updateData={updateData}/>}
        </Grid>
        <Grid item xs={4} sm={2} md={5}>
          <ChartContainer data={chartData} title={"溫度資訊圖表"} field={'temp'} fieldName={"溫度"} style={'step'}/>
          {/* <ChartCard data={chartData} field={'temp'} fieldName={"溫度"} title={"溫度資訊圖表"} /> */}
        </Grid>
        <Grid item xs={4} sm={2} md={5}>
          <ChartContainer data={chartData} title={"濕度資訊圖表"} field={'humidity'} fieldName={"濕度"} style={'step'}/>
        </Grid>
      </Grid>
      <Box>
      </Box>
    </>
  );
}

export default App;
