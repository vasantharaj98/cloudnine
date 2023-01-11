import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import './style.css';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({tab, tabPanel, dishes, dish, setDish, menu}) {
  const [value, setValue] = React.useState(0);

  const updatedDish = dishes.map((e)=> e.dishname);
  const updatedQty = dishes.map((e)=> e.qty);

  React.useEffect(()=>{
    setValue(menu);
  },[menu])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100%", my: 4 }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ background: '#fafafa', paddingRight: 1, py: 2, overflow:"initial"}}
      >
        {tab.map((val, index)=>{
            return(
            <Tab label={val.name} {...a11yProps(index)} />
            )
        })}
      </Tabs>
      {tabPanel.map((val, index)=>{
        return(
            <TabPanel value={value} index={index} style={{width: '100%'}}>
            <div>
                <div>
                <Typography variant="h" component="h3" sx={{color:'#DB241E'}}>{val.name}</Typography>
                <Typography variant="p" component="p" sx={{ lineHeight: 2}}>{val.tag}</Typography>
                </div>
                {val.menu.map((v)=>{
                    return(
                        <div className='tabPanel' style={{display:'flex', justifyContent:'space-between' ,alignItems:'flex-start', marginTop: 20}}>
                        <div>
                    <Typography variant="h" component="h3">{v.menuName}</Typography>
                    <Typography variant="p" component="p" sx={{ lineHeight: 1.7}}>{v.menuCoice}        
                     </Typography>
                        </div>
                        <div className='adddish' style={{display: "flex", justifyContent:"center", gap:"15px", alignItems:"center"}}>
                        {v?.price && v?.price.map((pr, index)=>{
                              return(
                              <div key={index}  style={{display: "flex", justifyContent:"center",flexDirection:"column", alignItems:"center"}}>
                                {(!updatedDish.includes(`${v.menuName} ${pr.size}`)) ?
                                <Button sx={{color:'#fff', width: "80px", height:"32px", lineHeight:"19px", background:'#DB241E', "&:hover": {backgroundColor: "#b61510", }}} onClick={() => {
                                  setDish({dishname: `${v.menuName} ${pr.size}`, qty: 1, price: pr.price});
                                }}>Add</Button>
                                  :
                                  <Paper elevation={0} sx={{color:'#fff', width: "80px", height:"32px", lineHeight:"19px", background:'#DB241E', display: "flex", justifyContent:"space-between", alignItems:"center"}}>
                                  <Button sx={{minWidth: 0}}
                                   onClick={() => {
                                     setDish({dishname: `${v.menuName} ${pr.size}`, qty: Math.max(updatedQty[updatedDish.indexOf(`${v.menuName} ${pr.size}`)] - 1, 0), price: pr.price});
                                   }}
                                  ><RemoveIcon fontSize="small" sx={{color: "#fff"}}/></Button>
                                  {(dishes?.filter((e)=> e.dishname === `${v.menuName} ${pr.size}`))[0]?.qty}
                                  {/* {updatedQty[updatedDish.indexOf(`${v.menuName} - ${pr.size}`)]} */}
                                  <Button sx={{minWidth: 0}} onClick={() => {
                                    setDish({dishname: `${v.menuName} ${pr.size}`, qty:  Math.max(updatedQty[updatedDish.indexOf(`${v.menuName} ${pr.size}`)] + 1), price: pr.price});
                                  }}><AddIcon sx={{color: "#fff"}} fontSize="small" /></Button>
                                  </Paper>
                                }
                              <Typography variant="h" component="h4" sx={{whiteSpace:"nowrap"}}>{pr.size} ${pr.price} 
                             </Typography>
                            </div>
                              )
                            })
                            }
                        </div>
                    </div>
                    )
                })}
            </div>
          </TabPanel>
        )
      })}
    </Box>
  );
}