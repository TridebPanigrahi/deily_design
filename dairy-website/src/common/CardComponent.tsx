import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import React from "react";

type cardCompProps = {
  image: string;
  name: string;
  children: React.ReactNode;
  action: React.ReactNode;
};

const CardComponent: React.FC<cardCompProps> = ({
  image,
  name,
  children,
  action,
}) => {
  return (
    <Grid size={{ xs: 12, md: 3, xl: 3 }} sx={{ mt: 2 }}>
      <Card
      // sx={{ maxWidth: 150 }}
      >
        <CardActionArea>
          <CardMedia component="img" height={150} image={image} alt={name} />
          <CardContent>{children}</CardContent>
          {action && <CardActions>{action}</CardActions>}
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CardComponent;
