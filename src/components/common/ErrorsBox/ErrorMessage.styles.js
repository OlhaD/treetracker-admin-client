import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  alert: {
    maxWidth: theme.spacing(128),
    overflowWrap: 'break-word',
    margin: theme.spacing(0.5, 0),
    [theme.breakpoints.down('sm')]: {
      minWidth: 'auto',
      maxWidth: '100vw',
    },
  },
}));

export default useStyles;
