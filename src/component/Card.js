import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';


export function InfoCard(props) {
  const { data } = props;
  const sensor = data[1]['value'];
  const temp = sensor['tvalue'];
  const humidity = sensor['hvalue'];
  return (
    <Card sx={{ minWidth: '400px' }} {...props}>
      <CardContent>
        <Typography variant="h5" component="div">
          即時資訊
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" component={'legend'}>
          RealTime Infomation
        </Typography>
        <hr/>
        <Paper sx={{p: 2, m: 1, mt: 2, flexGrow: 1}} variant="outlined" >
          <Typography variant="h6" component="div">
            溫度：{temp} 度
          </Typography>
          <Typography variant="h6" component="div">
            濕度：{humidity} %
          </Typography>
        </Paper>
      </CardContent>
    </Card>
  );
}

export function ConsoleCard(props) {
    const { updateData } = props;
    const { data } = props;
    const control = data[0]['value'];
    const index = 0;
    return (
      <Card sx={{ minWidth: '400px', ml: '16px', flexGrow: 1 }} {...props}>
        <CardContent>
          <Typography variant="h5" component="div">
            控制面板
          </Typography>
          <Typography sx={{ fontSize: 12 }} color="text.secondary" component={'legend'}>
          Console Panel
          </Typography>
          <hr/>
          <Box  sx={{display: 'flex', justifyContent: 'space-around'}}>
            <Paper sx={{p: 2, m: 1, flexGrow: 1}} variant="outlined" >
              <FormControl>
                  <FormLabel component="legend">亮度控制</FormLabel>
                  <FormGroup aria-label="position" row sx={{mt: 2}}>
                      <FormControlLabel
                      value="LED1"
                      control={<Switch color="primary" checked={control['LED1']}/>}
                      label="LED1"
                      labelPlacement="top"
                      onChange={(e) => updateData(e, index)}
                      />
                      <FormControlLabel
                      value="LED2"
                      control={<Switch color="primary" checked={control['LED2']} />}
                      label="LED2"
                      labelPlacement="top"
                      onChange={(e) => updateData(e, index)}
                      />
                  </FormGroup>
              </FormControl>
            </Paper>
            <Paper sx={{p: 2, m: 1, flexGrow: 1}} variant="outlined" >
              <FormControl>
                  <FormLabel component="legend">風扇控制</FormLabel>
                  <FormGroup aria-label="position" row sx={{mt: 2}}>
                      <FormControlLabel
                      value="fan1"
                      control={<Switch color="primary" checked={control['fan1']} />}
                      label="FAN1"
                      labelPlacement="top"
                      onChange={(e) => updateData(e, index)}
                      />
                      <FormControlLabel
                      value="fan2"
                      control={<Switch color="primary" checked={control['fan2']}/>}
                      label="FAN2"
                      labelPlacement="top"
                      onChange={(e) => updateData(e, index)}
                      />
                      <FormControlLabel
                      value="fan3"
                      control={<Switch color="primary" checked={control['fan3']}/>}
                      label="FAN3"
                      labelPlacement="top"
                      onChange={(e) => updateData(e, index)}
                      />
                  </FormGroup>
              </FormControl>
            </Paper>
            <Paper sx={{p: 2, m: 1, flexGrow: 1}} variant="outlined" >
              <FormControl>
                  <FormLabel component="legend">窗簾</FormLabel>
                  <FormGroup aria-label="position" row sx={{mt: 2}}>
                      <FormControlLabel
                      value="window"
                      control={<Switch color="primary" checked={control['window']}/>}
                      label="WINDOW"
                      labelPlacement="top"
                      onChange={(e) => updateData(e, index)}
                      />
                  </FormGroup>
              </FormControl>
            </Paper>
          </Box>
        </CardContent>
      </Card>
    );
  }
