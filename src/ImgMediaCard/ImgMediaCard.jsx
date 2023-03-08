import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard(props) {
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
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.priceUsd}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {props.volumeUsd24Hr}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {props.changePercent24Hr}
        </Typography>
      </CardContent>
    </Card>
  );
}
