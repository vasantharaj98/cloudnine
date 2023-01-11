import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {ShoppingCartOutlined} from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import { Divider } from '@mui/material';
import './style.css';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {FmdGoodOutlined, LocalPhoneOutlined} from '@mui/icons-material';
import { Mainbutton } from '../../Components/Button';
import { Link } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({cartcount, dishes, setDishes, setLoader}) {
  const [open, setOpen] = React.useState(false);
  const [detail, setDetail] = React.useState(false);
  const [order, setOrder] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [failure, setFailure] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setDetail(false);
    setOrder(false);
  };

  const totalAmount = dishes.reduce((accumulator, object) =>{return accumulator + (object.qty * object.price)}, 0).toFixed(2);

  const [dishdata, setDishdata] = React.useState({name:'', phone:'', email:'', message:'', order: [], total: ""});

  React.useEffect(()=>{
      const updateDish = dishes.filter((e)=> e.qty !== 0 )
      setDishdata({...dishdata, order: updateDish, total: totalAmount})
  },[dishes]);

  const submitData = (e) =>{
    setLoader(true);
    e.preventDefault();
      fetch('https://cloud-9-bar-grill.onrender.com/dish', {
         method: 'POST',
         body: JSON.stringify(dishdata),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((res) => {
         res.json();
         setOrder(true);
         setDishes([]);
         setDishdata({name:'', phone:'', email:'', message:'', order: [], total: ""});
         setLoader(false);
         setSuccess(true);
         }
         )
         .catch((err) => {
            console.log(err.message);
            setSuccess(false);
            setLoader(false);
         });
   };

if(!detail && !order)
  return (
    <div>
        <Button sx={{color: '#000', textTransform: 'none'}} onClick={handleClickOpen}>
        <Typography variant="p" component="h3" sx={{marginRight: 1}}> Cart</Typography>
        <Badge color="primary" badgeContent={cartcount} showZero>
        <ShoppingCartOutlined sx={{color: '#DB241E'}}></ShoppingCartOutlined>
      </Badge>  </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth="true"
        maxWidth="md"
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Cart
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom component="h4" variant='p' sx={{paddingBottom: 1}}>
            Your Orders
          </Typography>
          <Divider/>
          {dishes.length === 0 && 
          <Typography component="h4" variant='p' sx={{padding: 4, textAlign:'center'}}>
          No Orders
        </Typography>
        }
          {dishes.map((e, index)=>{
            return(
                <div key={index}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 0px"}}>
                    <div>
                        <Typography component="h4" variant='p'>
                        {e.dishname}
                        </Typography>
                        <Typography component="p" variant='p'>
                        {e.price}
                        </Typography>
                    </div>
                    <div>
                        <div style={{display: "flex", justifyContent: "space-between", gap: 5, alignItems: "center"}}>
                    <Paper elevation={0} sx={{color:'#fff', width: "80px", height:"32px", lineHeight:"19px", background:'#DB241E', display: "flex", justifyContent:"space-between", alignItems:"center"}}>
                            <Button sx={{minWidth: 0}} onClick={()=>{const newState = dishes.map((obj)=>{if(obj.dishname === e.dishname){return {...obj, qty: Math.max(e.qty-1, 0) }} return obj}); setDishes(newState)}}
                            ><RemoveIcon fontSize="small" sx={{color: "#fff"}}/></Button>
                            {e.qty}
                            <Button sx={{minWidth: 0}} onClick={()=>{setDishes(dishes.map((obj)=>{if(obj.dishname === e.dishname){return {...obj, qty: e.qty+1}} return obj}))}}><AddIcon sx={{color: "#fff"}} fontSize="small" /></Button>
                    </Paper>
                    <Button variant="text" size="small" onClick={()=>{setDishes(current => current.filter(dish => {return dish.dishname !== e.dishname}))}}>
                        <HighlightOffIcon/>
                    </Button>
                    </div>
                    </div>
                </div>
                <Divider/>
              </div>
            )
          })}
        </DialogContent>
        <DialogActions sx={{my: 2}}>
        <div style={{marginRight: 30}}>
        <Typography component="h4" variant='p'>
                    Total Items ({cartcount}) :
                    </Typography>
                    <Typography component="p" variant='p'>
                    ${totalAmount}
                    </Typography>
        </div>
        <Button disabled={dishes.length === 0 ? "disabled" : ""} sx={{color:'#fff',px: 7, py:1.5, background:'#DB241E', "&:hover": {backgroundColor: "#b61510"}}} onClick ={ ()=> {setDetail(true)}}>Proceed</Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
if(detail && !order)
  return (
    <div>
        <Button sx={{color: '#000', textTransform: 'none'}} onClick={handleClickOpen}>
        <Typography variant="p" component="h3" sx={{marginRight: 1}}> Cart</Typography>
        <Badge color="primary" badgeContent={cartcount} showZero>
        <ShoppingCartOutlined sx={{color: '#DB241E'}}></ShoppingCartOutlined>
      </Badge>  </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth="true"
        maxWidth="md"
      >
        <BootstrapDialogTitle id="customized-dialog-title" sx={{display: "flex", alignItems: "center"}} onClose={handleClose}>
          <KeyboardBackspaceIcon sx={{marginBottom: 0, cursor:"pointer"}} onClick={()=>{setDetail(false)}}/> Cart
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom component="h4" variant='p' sx={{paddingBottom: 1, textAlign:"center"}}>
            Details
          </Typography>
          <Box
                component="form"
                sx={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems: 'center',
                    flexDirection:'column',
                 '& > :not(style)': { m: 1, maxWidth: '35ch', width:'100%' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="outlined-basic" required type="text" label="Name" variant="outlined" onChange={(e)=> setDishdata({...dishdata, name: e.target.value})}/>
                <TextField id="outlined-basic" required type="email" label="Email" variant="outlined" onChange={(e)=> setDishdata({...dishdata, email: e.target.value})}/>
                <TextField id="outlined-basic" required type="number" label="Phone Number" variant="outlined"  onChange={(e)=> setDishdata({...dishdata, phone: e.target.value})}/>
                <TextField id="outlined-basic" multiline rows={3} maxRows={5} label="Got Something To Say" variant="outlined"  onChange={(e)=> setDishdata({...dishdata, message: e.target.value})}/>
            </Box>
        </DialogContent>
        <DialogActions sx={{my: 2}}>
        <div style={{marginRight: 30}}>
        <Typography component="h4" variant='p'>
                    Total Items ({cartcount}) :
                    </Typography>
                    <Typography component="p" variant='p'>
                    ${totalAmount}
                    </Typography>
        </div>
        <Button disabled={dishdata.name === "" || dishdata.email === "" || dishdata.phone === "" ? "disabled" : ""} sx={{color:'#fff',px: 7, py:1.5, background:'#DB241E', "&:hover": {backgroundColor: "#b61510", }}} type="submit" onClick ={submitData}>Place Order</Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
  if(order)
  return (
    <div>
        <Button sx={{color: '#000', textTransform: 'none'}} onClick={handleClickOpen}>
        <Typography variant="p" component="h3" sx={{marginRight: 1}}> Cart</Typography>
        <Badge color="primary" badgeContent={cartcount} showZero>
        <ShoppingCartOutlined sx={{color: '#DB241E'}}></ShoppingCartOutlined>
      </Badge>  </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth="true"
        maxWidth="md"
      >
        <BootstrapDialogTitle id="customized-dialog-title" sx={{display: "flex", alignItems: "center"}} onClose={handleClose}>
        Cart
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom component="h4" variant='p' sx={{paddingBottom: 1, textAlign:"center"}}>
          {success ? "Thanks for Ordering!" : "Oops! Order is failed"}  
          </Typography>
          <Typography gutterBottom component="h4" variant='p' sx={{padding: 1, textAlign:"center", color: "#DB241E", background:"#ffdfdd", py: 2}}>
           {success ? "Your order has been placed" : "Order is Not Placed"} 
          </Typography>
          <Typography component="p" variant='p' sx={{padding: 1, textAlign:"center", color: "#DB241E", lineHeight: 2}}>
           {success && "An email has been sent for your reference. You will get a notification to your mobile number regarding status of your order."}
          </Typography>
          <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', gap: 5, margin: 15, flexDirection: 'column'  }}>
            <div style={{display: 'flex', justifyContent: 'spaceBetween'}}>
                <FmdGoodOutlined/>
                <Typography variant="p" component="p" sx={{ lineHeight: 2, marginLeft: 1}}>1801 96 St #1899, North Battleford, SK S9A 0J1, Canada</Typography>
            </div>
            <div style={{display: 'flex', justifyContent: 'spaceBetween' }}>
                <LocalPhoneOutlined/>
                <Typography variant="p" component="p" sx={{ lineHeight: 1.5, marginLeft: 1}}>+19876543210</Typography>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39117.31034872958!2d-101.73132388919485!3d57.88694552935808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52452c333d24e933%3A0x6610ab595a2e0222!2sBrochet%2C%20MB%2C%20Canada!5e0!3m2!1sen!2sin!4v1671423478037!5m2!1sen!2sin" width="300px" height="200px" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', marginTop: 25}}>
        <Link href='https://goo.gl/maps/he4DSmJFNSpXfGUu6' target="_blank" sx={{textDecoration:"none"}}>
            <Mainbutton text="View on map"/>
            </Link>
        </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}