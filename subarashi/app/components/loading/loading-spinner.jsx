
import { CircularProgress, Box } from '@mui/material';

export default function LoadingSpinner() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '300px',
        width: '100%',
      }}
    >
      <CircularProgress sx={{ color: '#005244' }} size={50} thickness={4} />
    </Box>
  );
}
