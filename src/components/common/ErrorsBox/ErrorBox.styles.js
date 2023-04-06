import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  errorBox: {
    padding: theme.spacing(2, 6, 0),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 2, 0),
    },
  },
}));

export default useStyles;
