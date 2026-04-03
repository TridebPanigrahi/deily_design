import { Box, Typography } from "@mui/material";
import React from "react";

type lableComponentProps = {
  primaryTypo: string;
  children: React.ReactNode;
};

const LableComponent: React.FC<lableComponentProps> = ({
  primaryTypo,
  children,
}) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h3" color="textPrimary">
        {primaryTypo}
      </Typography>
      <Box>{children}</Box>
    </Box>
  );
};

export default LableComponent;
