import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { red } from "@mui/material/colors";

import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
import axios from "axios";

export default function OrderCard({
  name,
 seat,
  username,
  img,
  total,
  time,
  id,
  isUser,
}) {

  return (
    <>
    {/* <Card
      sx={{
        width: "40%",
        margin: "auto",
        mt: 2,
        padding: 2,
        boxShadow: "5px 5px 10px #ccc",
        ":hover:": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
    
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {username}
          </Avatar>
        }
        title={username}
        subheader={time}
      />
      {/* <CardMedia component="img" height="194" image={image} alt="Paella dish" /> */}
      
    <Card style={{backgroundImage: 'linear-gradient(to left bottom, #3d10f2, #bf00bf, #f10087, #ff0053, #fe0c24)'}}
    sx={{

      width: "59%",
      margin: "auto",
      mt: 2,
      padding: 2,
      boxShadow: "5px 5px 10px #ccc",
      ":hover:": {
        boxShadow: "10px 10px 20px #ccc",
      },
    }}
  >
<Grid container spacing={2}>
<Grid item xs={12} md={2}>
  <CardMedia component="img" height="100%" image={img} alt="Paella dish" />

</Grid>
<Grid item xs={12} md={8}>




<CardContent>

<Grid container spacing={2}>
<Grid item xs={12}>

<Typography variant="h5" color="white">
Name : {name}
</Typography>
</Grid>
<Grid item xs={12}>
<Typography variant="h6" color="white">
Time : {time}
</Typography>
</Grid>
<Grid item xs={12}>
<Typography variant="h6" color="white">
Seat : {seat}
</Typography>
</Grid>


  <Grid item xs={12}>
    <Typography variant="h6" color="white">
      Total : Rs. {total}
    </Typography>
  </Grid>


</Grid>


</CardContent>
</Grid>

</Grid>
    
  </Card>
  </>
  );
}