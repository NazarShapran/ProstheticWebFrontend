import React from 'react';
import { Snackbar } from '@mui/material';
import Alert from './Alert';
import PropTypes from 'prop-types';

const SnackbarAlert = ({
  open,
  onClose,
  message,
  severity = 'info',
  title,
  autoHideDuration = 6000,
  variant = 'filled',
  ...props
}) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    onClose();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'center', horizontal: 'left' }}
      sx={{
        '& .MuiSnackbar-root': {
          left: '1000px'
        },
        '& .MuiAlert-root': {
          minWidth: '300px',
          maxWidth: '400px'
        }
      }}
      {...props}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant={variant}
        title={title}
        sx={{
          width: '100%',
          backgroundColor: severity === 'error' ? 'rgba(211, 47, 47, 0.2)' : 
                          severity === 'warning' ? 'rgba(237, 108, 2, 0.2)' :
                          severity === 'success' ? 'rgba(46, 125, 50, 0.2)' :
                          'rgba(2, 136, 209, 0.2)',
          color: 'white',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          '& .MuiAlert-icon': {
            opacity: 0.9
          },
          '& .MuiAlert-message': {
            padding: '8px 0'
          },
          '& .MuiAlert-action': {
            padding: '0 8px'
          }
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

SnackbarAlert.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.node.isRequired,
  severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  title: PropTypes.string,
  autoHideDuration: PropTypes.number,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])
};

export default SnackbarAlert; 