import React from 'react';
import { Alert as MuiAlert, AlertTitle } from '@mui/material';
import PropTypes from 'prop-types';

const severityMessages = {
  success: 'Успішно',
  error: 'Помилка',
  warning: 'Увага',
  info: 'Інформація'
};

const Alert = ({ 
  severity = 'info',
  title,
  children,
  onClose,
  variant = 'standard',
  ...props 
}) => {
  return (
    <MuiAlert
      severity={severity}
      onClose={onClose}
      variant={variant}
      sx={{
        '& .MuiAlert-message': {
          width: '100%'
        },
        marginBottom: 2,
        ...props.sx
      }}
      {...props}
    >
      {(title || severityMessages[severity]) && (
        <AlertTitle sx={{ fontFamily: 'secondary-medium' }}>
          {title || severityMessages[severity]}
        </AlertTitle>
      )}
      {children}
    </MuiAlert>
  );
};

Alert.propTypes = {
  severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  sx: PropTypes.object
};

export default Alert; 