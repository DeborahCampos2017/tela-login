import Stack from "@mui/material/Stack";
import Formulario from "../Formulario";
import useStyles from "./styles";

const Login = () => {
  const styles = useStyles();

  return (
    <Stack sx={styles.loginContainer}>
      <Formulario />
    </Stack>
  );
};

export default Login;
