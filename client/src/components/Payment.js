// import { useContext } from "react";
// import { MovieContext } from "../context/BookingContext";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom"
import { Grid, Divider,CardMedia } from "@mui/material";
import Swal from 'sweetalert2'
import { useSelector} from "react-redux";
import axios from "axios";
const Payment = () => {
    const navigate = useNavigate();
    const { orderItem } = useSelector((state) => state.order)
    console.log(orderItem[0].seat);
    let isLogin = useSelector((state) => state.isLogin);
    let id =  localStorage.getItem("userId");
    // const { totalAmount, movieData, checkedList } = useContext(MovieContext);
    let result = orderItem[0].total
    let total = result + 160;
    let seat = JSON.stringify(orderItem[0].seat)
    // const moviedetails = movieData;
    // let seats = checkedList.join(" ")


    const handleSubmit = () => {
        Swal.fire({
            title: 'Booking Successful',

            icon: 'success',
            width: '300px'
        });
        setTimeout(navigateTO, 600)

    };

    const handleOrder = async (e) => {
        // e.preventDefault();
        // console.log(inputs);
        try {
          const { data } = await axios.post("https://movie-ticket-booking-mern-app.onrender.com/api/v1/order/create-order", {
            name: orderItem[0][0].name,
            seat:seat,
            total:orderItem[0].total,
            img:orderItem[0][0].image,
            user: id,
          });
          if (data?.success) {
            Swal.fire({
                title: 'Booking Successful',
    
                icon: 'success',
                width: '300px'
            });
            setTimeout(navigateTO, 600)
            // toast.success("Hotel successfully booked");
            // navigate("/");
          }
        } catch (error) {
          console.log(error);
        }
      };

    const navigateTO = () => {
        navigate('/')
        window.location.reload();
    }
    return (

        <>
            <Grid
                container
                spacing={1}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
                mt={6}
            >

                <Grid item xs={12}>
                    <Card sx={{ width: 400 }} alignItems="center" mb={3}
                        justify="center">
                            
                        <CardContent>
                            
                            <Grid item xs={8}>
                            <CardMedia
                                    sx={{ height: 370,width:320,margin:3 }}
                                    image={orderItem[0][0].image}
                                    title="green iguana"
                                />
                                </Grid>
                                <Typography variant="h4" component="div" align='center' style={{ color: '#1a0699' }} gutterBottom>
                                BOOKING SUMMARY
                            </Typography>
                            <Typography variant="h4" component="h4" align='center' style={{ color: '#7a0896' }} gutterBottom>
                            {orderItem[0][0].name}
                            </Typography>
                            {/* <Typography variant="h6" component="h6" style={{ color: 'black' }}>
                                Selected Seats : {orderItem[0].seat}
                            </Typography> */}
                            <Grid container spacing={2}>
                            
                                <Grid item xs={8}>
                                <Typography variant="h5" component="h5" color="black">
                                Selected Seats :
                                </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                <Typography variant="h6" component="h6" color="blue">
                                {orderItem[0].seat}
                                </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                <Typography variant="h5" component="h5" color="black">
                                Amount :
                                </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                <Typography variant="h6" component="h6" color="blue">
                                Rs. {orderItem[0].total}
                                </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                <Typography variant="h5" component="h5" color="black">
                                Booking Charge :
                                </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                <Typography variant="h6" component="h6" color="blue">
                                Rs. 160
                                </Typography>
                                </Grid>
                                <Divider />
                                <Divider />
                                <Grid item xs={8}>
                                <Typography variant="h5" component="h5" color="black">
                               Total :
                               </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                <Typography variant="h6" component="h6" color="blue">
                                Rs. {total}
                                </Typography>
                                </Grid>
                               </Grid>
                            
                            
                            
                            <Box textAlign='center' mt={3}>
                                <Button  onClick={() => handleOrder()}
                                    sx={{
                                        color: 'white', backgroundImage: 'linear-gradient(to right top, #ec146c, #ef035d, #f1004d, #f1003d, #ef0d2b)', width: 300, ':hover': {
                                            bgcolor: 'yellow',
                                            color: 'white',
                                        }
                                    }}
                                >CONFIRM BOOKING

                                </Button>
                            </Box>
                        </CardContent>

                    </Card>
                </Grid>
            </Grid>
                     <br/>               
        </>
    )
}

export default Payment;