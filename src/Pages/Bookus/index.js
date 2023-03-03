import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material';
import { Typography, Box, Grid, TextField, InputAdornment, Button } from '@mui/material';
import banner_1 from '../../Assets/Images/cloud1.JPG';
import FabButton from '../../Components/fabButton';
import './style.css';

const Menu = ({setSelectid}) => {

  const [dishdata, setDishdata] = React.useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    noOfPeople: "",
    dateOfEvent: "",
    timeOfEvent: ""
  });

  return (
    <>
    <FabButton setSelectid={setSelectid} path={'/ourmenu'} value={"Order Now"}/>
    <Container sx={{marginTop: 20}}>
    <Box
                sx={{
                width: "100%",
                height: "100%",
                marginTop: 2,
                backgroundColor: '#080808',
                padding: 3,
                color: '#fff'
      }}
    >
        <Typography className='un_line' variant="h" component="h2">Need to Book a Table?</Typography>
        <Grid container spacing={2} sx={{marginTop: 3}}>
          <Grid item md={6}>
              <img src={banner_1} width="100%" height="500px" alt='banner' style={{objectFit:'cover'}}></img>
          </Grid>
          <Grid item md={6} sx={{width: '100%'}}>
          <Box
              component="form"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <Typography variant='p' component='p' style={{marginTop: 0, marginBottom: 0}}>Name</Typography>
              <TextField
                id="outlined-basic"
                required
                type="text"
                placeholder='Enter Name'
                variant="outlined"
                sx={{
                  background:'#fff'
                }}
                onChange={(e) =>
                  setDishdata({ ...dishdata, name: e.target.value })
                }
              />
              <Typography variant='p' component='p' style={{marginBottom: 0}}>Email</Typography>
              <TextField
                id="outlined-basic"
                required
                type="email"
                placeholder='Enter Email'
                variant="outlined"
                sx={{
                  background:'#fff'
                }}
                onChange={(e) =>
                  setDishdata({ ...dishdata, email: e.target.value })
                }
              />
              <Typography variant='p' component='p' style={{marginBottom: 0}}>Mobile Number</Typography>
              <TextField
                id="outlined-basic"
                required
                type="number"
                variant="outlined"
                placeholder='Mobile Number'
                sx={{
                  background:'#fff'
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+1</InputAdornment>
                  ),
                }}
                onChange={(e) =>
                  setDishdata({ ...dishdata, phone: e.target.value })
                }
              />
              <Typography variant='p' component='p' style={{marginBottom: 0}}>Event Type</Typography>
              <TextField
                id="outlined-basic"
                required
                type="text"
                placeholder='Name of the event'
                variant="outlined"
                sx={{
                  background:'#fff'
                }}
                onChange={(e) =>
                  setDishdata({ ...dishdata, eventType: e.target.value })
                }
              />
              <div className='book_us'>
                <div style={{width: '100%'}}>
                <Typography variant='p' component='p' style={{marginBottom: 3}}>Count</Typography>
              <TextField
                id="outlined-basic"
                required
                type="number"
                placeholder='0'
                variant="outlined"
                sx={{
                  background:'#fff',
                  width: '100%'
                }}
                onChange={(e) =>
                  setDishdata({ ...dishdata, noOfPeople: e.target.value })
                }
              />
                </div>
                <div style={{width: '100%'}}>
                <Typography variant='p' component='p' style={{marginBottom: 3}}>Event Date</Typography>
                <TextField
                id="outlined-basic"
                required
                type="date"
                placeholder='Event Date'
                variant="outlined"
                sx={{
                  background:'#fff',
                  width:'100%'
                }}
                onChange={(e) =>
                  setDishdata({ ...dishdata, dateOfEvent: e.target.value })
                }
              />
                </div>
                <div style={{width: '100%'}}>
                <Typography variant='p' component='p' style={{marginBottom: 3}}>Event Time</Typography>
                <TextField
                id="outlined-basic"
                required
                placeholder='Event Time'
                type="time"
                variant="outlined"
                sx={{
                  background:'#fff',
                  width:'100%'
                }}
                onChange={(e) =>
                  setDishdata({ ...dishdata, timeOfEvent: e.target.value })
                }
              />
                </div>
              </div>
              <Button
              sx={{
                color: "#fff",
                px: 7,
                py: 1.5,
                background: "#DB241E",
                "&:hover": { backgroundColor: "#b61510" },
              }}
            >
              Request Booking
            </Button>
            </Box>
          </Grid>
      </Grid>
    </Box>
    </Container>
    </>
  )
}

export default Menu;