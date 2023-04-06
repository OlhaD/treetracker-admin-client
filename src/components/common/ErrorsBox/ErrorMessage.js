import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import { Alert } from '@material-ui/lab';
import useStyles from './ErrorMessage.styles';

const ErrorMessage = (props) => {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();

  return (
    <Collapse in={open} key={props.text}>
      <Alert
        classes={{
          root: classes.alert,
        }}
        severity="error"
        onClose={() => {
          setOpen(false);
        }}
      >
        <strong>Error:</strong> {props.text}
      </Alert>
    </Collapse>
  );
};

export default ErrorMessage;
