import * as React from 'react';
import { useState } from 'react';
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
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function InfoCard(props) {
  const { data } = props;
  const [ , sensor, light ] = data; 
  const sensorValue = sensor['value'];
  const lightValue = light['value'];
  const { tvalue: temp, hvalue: humidity } = sensorValue;
  const { value: lightUp } = lightValue;
  return (
    <Card sx={{height: '100%'}} {...props}>
      <CardContent>
        <Stack direction="row" spacing={2} sx={{ minHeight: '60px'}}>
          <Box>
            <Typography variant="h5" component="div">
              即時資訊
            </Typography>
            <Typography sx={{ fontSize: 12 }} color="text.secondary" component={'legend'}>
              RealTime Infomation
            </Typography>
          </Box>
        </Stack>
        <hr/>
        <Paper sx={{ minHeight: '110px', p: 2, m: 1, mt: 2, flexGrow: 1}} variant="outlined" >
          <Typography variant="h6" component="div">
            溫度：{temp} °C
          </Typography>
          <Typography variant="h6" component="div">
            濕度：{humidity} %
          </Typography>
          <Typography variant="h6" component="div">
            亮度：{lightUp.toFixed(2)} Lux
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
    const index = 0; //網頁只控制 control 資料表, 0代表control資料表
    const [isAuto, setIsAuto] = useState(control['IsAuto']);
    function AutoControl(e) { 
      updateData(e, index)
      setIsAuto(e.target.checked);
    }
    return (
      <Card sx={{height: '100%'}} {...props}>
        <CardContent >
          <Stack direction="row" spacing={2} sx={{ minHeight: '60px'}}>
            <Box>
                <Typography variant="h5" component="div">
                  控制面板
                </Typography>
                <Typography sx={{ fontSize: 12 }} color="text.secondary" component={'legend'}>
                Console Panel
                </Typography>
            </Box>
            <Box>
                <FormControl>
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                        value="IsAuto"
                        control={<Switch color="primary" checked={control['IsAuto']} />}
                        label="自動控制"
                        labelPlacement="top"
                        onChange={(e) => AutoControl(e)}
                        />
                    </FormGroup>
                </FormControl>
            </Box>
          </Stack>
          <hr/>
          <Grid container columns={{ xs: 1, sm: 5}}>
            <Grid item xs={1} sm={3} md="auto">
              <Paper sx={{ p: 2, m: 1, flexGrow: 1}} variant="outlined" >
                <FormControl>
                    <FormLabel component="legend">亮度控制</FormLabel>
                    <FormGroup aria-label="position" row sx={{mt: 2}}>
                        <FormControlLabel
                        value="LED1"
                        control={<Switch color="primary" checked={control['LED1']} disabled={isAuto} />}
                        label="藍光"
                        labelPlacement="top"
                        onChange={(e) => updateData(e, index)}
                        />
                        <FormControlLabel
                        value="LED2"
                        control={<Switch color="primary" checked={control['LED2']} disabled={isAuto} />}
                        label="白光"
                        labelPlacement="top"
                        onChange={(e) => updateData(e, index)}
                        />
                    </FormGroup>
                </FormControl>
              </Paper>
            </Grid>
            <Grid item xs={1} sm={2} md="auto">
              <Paper sx={{ p: 2, m: 1, flexGrow: 1}} variant="outlined" >
                <FormControl>
                    <FormLabel component="legend">窗簾</FormLabel>
                    <FormGroup aria-label="position" row sx={{mt: 2}}>
                        <FormControlLabel
                        value="window"
                        control={<Switch color="primary" checked={control['window']} disabled={isAuto} />}
                        label="WINDOW"
                        labelPlacement="top"
                        onChange={(e) => updateData(e, index)}
                        />
                    </FormGroup>
                </FormControl>
              </Paper>
            </Grid>
            <Grid item xs={1} sm={5} md="auto" sx={{flexGrow: 1}}>
              <Paper sx={{ p: 2, m: 1, flexGrow: 1}} variant="outlined" >
                <FormControl>
                    <FormLabel component="legend">風扇控制</FormLabel>
                    <FormGroup aria-label="position" row sx={{mt: 2}}>
                        <FormControlLabel
                        value="fan1"
                        control={<Switch color="primary" checked={control['fan1']} disabled={isAuto} />}
                        label="FAN1"
                        labelPlacement="top"
                        onChange={(e) => updateData(e, index)}
                        />
                        <FormControlLabel
                        value="fan2"
                        control={<Switch color="primary" checked={control['fan2']} disabled={isAuto}/>}
                        label="FAN2"
                        labelPlacement="top"
                        onChange={(e) => updateData(e, index)}
                        />
                        <FormControlLabel
                        value="fan3"
                        control={<Switch color="primary" checked={control['fan3']} disabled={isAuto} />}
                        label="FAN3"
                        labelPlacement="top"
                        onChange={(e) => updateData(e, index)}
                        />
                    </FormGroup>
                </FormControl>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
