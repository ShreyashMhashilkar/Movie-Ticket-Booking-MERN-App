import { Container, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { add } from '../redux/bookSlice';
// import { MovieContext } from "../context/BookingContext";

import Typography from '@mui/material/Typography';
import { Movies } from '../Movie';
import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const { movieData, setMovieData } = us eContext(MovieContext);

    const handleData = (movie) => {
        console.log("ewret")
        console.log(movie)
        // setMovieData(movie)
        navigate('/book-ticket')
    }
    
    const bookTicket = (item) => {

        dispatch(add(item))
        navigate('/book-ticket')
        // if (isLogin) {
        //   navigate('/create-order')
        // }
        // else {
        //   navigate('/login')
        // }
    
      }

 
    return (
        <>
            <Box container sx={{ flexGrow: 1}}>
                <Grid item container spacing={3} direction={{ xs: 'column', md: 'row' }} mt={2}
                    alignItems="center"
                    justify="space-around"
                >
                    {Movies.map(movie => (
                        <Grid item lg={3} xs={12} s={12} md={3}>

                            <Card sx={{ width: 300,boxShadow: "5px 5px 8px #fff",
        ":hover:": {
          boxShadow: "10px 10px 20px #ccc",
        }, }} key={movie.id}>

                                <CardMedia
                                    sx={{ height: 350 }}
                                    image={movie.image}
                                    title="green iguana"
                                />
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="div" color="darkblue">
                                        {movie.name}
                                    </Typography>
                                    <Typography variant="body2" color="black">
                                        {movie.starring}
                                    </Typography>
                                </CardContent>
                                <CardActions >
                                    <Button onClick={() => bookTicket(movie)}
                                        sx={{
                                            color: 'white', backgroundImage: 'linear-gradient(to right top, #ec146c, #ef035d, #f1004d, #f1003d, #ef0d2b)', width: 300, ':hover': {
                                                bgcolor: 'yellow', // theme.palette.primary.main
                                                color: 'white',
                                            }
                                        }}
                                    >BOOK TICKET

                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            </Box>
        </>
    )
}

export default Home;