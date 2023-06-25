import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface ErrorAlertProp{
  alertMessage: string;
}
export default function ErrorAlert({alertMessage}:ErrorAlertProp) {
  return (
    <Stack sx={{ width: '200px', display:'flex',justifyContent:'center' }} spacing={2}>
      <Alert severity="error">{alertMessage}</Alert>
    </Stack>
  );
}