import React from 'react';
import ErrorMessage from './ErrorMessage';
import useStyles from './ErrorBox.styles';

const ErrorsBox = (props) => {
  const errors = props.errors;
  const classes = useStyles();

  return (
    <div className={classes.errorBox}>
      {errors.map((error) => {
        return <ErrorMessage key={error.message} text={error.message} />;
      })}
    </div>
  );
};

export default ErrorsBox;
