import React from "react";
import { Box, Typography } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

interface CommonTableEmptyStateProps {
  message?: string;
  icon?: React.ReactElement;
}

const CommonTableEmptyState: React.FC<CommonTableEmptyStateProps> = ({
  message = "No data available",
  icon = <InsertDriveFileIcon sx={{ fontSize: 60, color: "grey.400" }} />,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      py={6}
      textAlign="center"
    >
      {icon}
      <Typography
        variant="h6"
        color="textSecondary"
        sx={{ mt: 2 }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default CommonTableEmptyState;
