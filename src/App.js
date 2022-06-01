import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { alpha } from '@mui/material/styles';
import { InfoCard, ConsoleCard } from './component/Card.js';
import { ChartCard } from './component/Chart.js';
import { useState, useEffect } from 'react';
import { confidence as data } from './component/data-vizualization.js';
import { useMergeState } from 'react-hooks-lib'
import Service from './component/service.js';
import ApexChart from './component/ApexChart.js';
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
      <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'background.paper', py: '10px', px: '20px' }} >
        <Box sx={{ display: 'flex', py: '10px' }}>
          {controls && 
            <>
              <InfoCard data={controls} />
              <ConsoleCard data={controls} updateData={updateData}/>
            </>
          }
        </Box>
        <Box sx={{ display: 'flex', py: '10px', justifyContent: 'space-around', mx: -1 }} >
          <ChartCard data={data} title={"空氣溫度資訊圖表"} />
          {/* <ApexChart /> */}
        </Box>
      </Box>
    </>
  );
}

export default App;
