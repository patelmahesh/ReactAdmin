import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  footer: {
    position: 'absolute',
    left: '0',
    right: '0',

   
  },
  copyright: {
    right: '0',
    left: '0',
    textAlign: 'center',
    marginTop: theme.spacing(4),
    whiteSpace: "nowrap",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      bottom: theme.spacing(2),
    },
  },
  

}));
