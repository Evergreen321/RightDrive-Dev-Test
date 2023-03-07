import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard() {
  const [array, setArray] = useState([]);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  // useEffect(() => {
  //   fetch("https://api.coincap.io/v2/assets", requestOptions)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setArray(data);
  //       console.log(data);
  //     })
  //     .catch((error) => console.log("error", error));
  // }, [requestOptions]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="crypto icon"
        height="140"
        image="/static/images/cards/bitcoin.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Crypto Currency Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          price
        </Typography>

        <Typography variant="body2" color="text.secondary">
          volume
        </Typography>

        <Typography variant="body2" color="text.secondary">
          and/or any other important metrics
        </Typography>
      </CardContent>
    </Card>
  );
}
