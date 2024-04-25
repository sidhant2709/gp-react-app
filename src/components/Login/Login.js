import { memo } from "react";
import { Button } from "@mui/material";
import styles from "./Login.module.css";

const Login = memo(() => {
  return (
    <div className={styles.rectangleGroup}>
      <div className={styles.logInWrapper}>Log in</div>
      <form className={styles.formStyles}>
        <input type="text" className={styles.input} />
        <input type="text" className={styles.input} />
        <div className={styles.buttonWrapper}>
          <Button
            disableElevation={true}
            className={styles.frameButton}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "24",
              background: "#00153c",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#00153c" },
              height: 49,
            }}
          >
            Log in
          </Button>
        </div>
      </form>
    </div>
  );
});

export default Login;
