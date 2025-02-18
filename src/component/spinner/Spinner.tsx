import { CircularProgress, Box } from '@mui/material';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ justifyContent: "center", alignItems: "center" }}>
      <CircularProgress />
    </Box>
  );
}
