import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material';
import { Typography, Box, Grid, TextField, InputAdornment, Button } from '@mui/material';
import banner_1 from '../../Assets/Images/bookTable.png';
import FabButton from '../../Components/fabButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './style.css';

const Menu = ({setSelectid, setLoader}) => {

  const [dishdata, setDishdata] = React.useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    noOfPeople: "",
    dateOfEvent: "",
    timeOfEvent: ""
  });

  const [open, setOpen] = React.useState(false);

  const submitData = (e) => {
    e.preventDefault();
    // https://cloudninebarandgrill.com/api/dish
    if(dishdata.email !== ""){
    setLoader(true);
    fetch("https://cloudninebarandgrill.com/api/event", {
      method: "POST",
      body: JSON.stringify(dishdata),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        res.json();
        setDishdata({
          name: "",
          phone: "",
          email: "",
          eventType: "",
          noOfPeople: "",
          dateOfEvent: "",
          timeOfEvent: ""
        });
        setLoader(false);
        setOpen(true);
      })
      .catch((err) => {
        console.log(err.message);
        setLoader(false);
      });
    }
  };

    const handleClose = () => {
    setOpen(false);
  };

  console.log("data", dishdata);

  return (
    <>
    <FabButton setSelectid={setSelectid} path={'/ourmenu'} value={"Order Now"}/>
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Your request has been submitted"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
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
                value={dishdata.name}
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
                value={dishdata.email}
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
                value={dishdata.phone}
                sx={{
                  background:'#fff'
                }}
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 10);
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+1</InputAdornment>
                  )
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
                value={dishdata.eventType}
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
                <Typography variant='p' component='p' style={{marginBottom: 7}}>Count</Typography>
              <TextField
                id="outlined-basic"
                required
                type="number"
                placeholder='0'
                variant="outlined"
                value={dishdata.noOfPeople}
                onInput={(e) => {
                  e.target.value = Math.max(1, parseInt(e.target.value))
                    .toString()
                    .slice(0, 10);
                }}
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
                <Typography variant='p' component='p' style={{marginBottom: 7}}>Event Date</Typography>
                <TextField
                id="outlined-basic"
                required
                type="date"
                placeholder='Event Date'
                value={dishdata.dateOfEvent}
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
                <Typography variant='p' component='p' style={{marginBottom: 7}}>Event Time</Typography>
                <TextField
                id="outlined-basic"
                required
                placeholder='Event Time'
                type="time"
                variant="outlined"
                value={dishdata.timeOfEvent}
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
              type="submit" 
              onClick ={submitData}

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