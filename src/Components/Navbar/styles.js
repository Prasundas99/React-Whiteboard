import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  smMargin: {
    marginRight: theme.spacing(3),
  },
  flexBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
