import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard(props) {
  return (
    <Card
      sx={{
        width: 345,
        p: 1,
        m: 1,
        "&:hover": {
          boxShadow: "5px 5px 5px grey",
        },
      }}
    >
      {/* <CardMedia
        component="img"
        alt="crypto icon"
        height="140"
        image={props.image}
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        {/* <Typography variant="h6" color="text.secondary">
          {props.symbol}
        </Typography> */}
        <Typography variant="body2" color="text.secondary" fontWeight="bold">
          Price:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.priceUsd.slice(0, 10)}
        </Typography>

        <Typography variant="body2" color="text.secondary" fontWeight="bold">
          Volume (24H):
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.volumeUsd24Hr.slice(0, 15)}
        </Typography>

        <Typography variant="body2" color="text.secondary" fontWeight="bold">
          Percent change (24H):
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.changePercent24Hr.slice(0, 10)}
        </Typography>
      </CardContent>
    </Card>
  );
}
