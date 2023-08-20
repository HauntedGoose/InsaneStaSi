import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import styles from "./ContainerJewelry.module.css";
const ContainerJewelry = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.inputoutlinedParent}>
          <TextField
            className={styles.inputoutlined}
            sx={{ width: 77 }}
            color="secondary"
            variant="outlined"
            type="number"
            label="STA"
            placeholder="STA"
            size="medium"
            margin="normal"
          />
          <TextField
            className={styles.inputoutlined}
            sx={{ width: 77 }}
            color="secondary"
            variant="outlined"
            type="number"
            label="HP"
            placeholder="Awake"
            size="medium"
            margin="normal"
          />
        </div>
        <div className={styles.inputoutlinedParent}>
          <TextField
            className={styles.inputoutlined}
            sx={{ width: 77 }}
            color="secondary"
            variant="outlined"
            type="number"
            label="STA"
            placeholder="STA"
            size="medium"
            margin="normal"
          />
          <TextField
            className={styles.inputoutlined}
            sx={{ width: 77 }}
            color="secondary"
            variant="outlined"
            type="number"
            label="HP"
            placeholder="Awake"
            size="medium"
            margin="normal"
          />
        </div>
        <div className={styles.inputoutlinedParent}>
          <TextField
            className={styles.inputoutlined}
            sx={{ width: 77 }}
            color="secondary"
            variant="outlined"
            type="number"
            label="STA"
            placeholder="STA"
            size="medium"
            margin="normal"
          />
          <TextField
            className={styles.inputoutlined}
            sx={{ width: 77 }}
            color="secondary"
            variant="outlined"
            type="number"
            label="HP"
            placeholder="Awake"
            size="medium"
            margin="normal"
          />
        </div>
        <div className={styles.inputoutlinedParent}>
          <TextField
            className={styles.inputoutlined}
            sx={{ width: 77 }}
            color="secondary"
            variant="outlined"
            type="number"
            label="STA"
            placeholder="STA"
            size="medium"
            margin="normal"
          />
          <TextField
            className={styles.inputoutlined}
            sx={{ width: 77 }}
            color="secondary"
            variant="outlined"
            type="number"
            label="HP"
            placeholder="Awake"
            size="medium"
            margin="normal"
          />
        </div>
        <div className={styles.inputoutlinedParent}>
          <TextField
            className={styles.inputoutlined}
            sx={{ width: 77 }}
            color="secondary"
            variant="outlined"
            type="number"
            label="STA"
            placeholder="STA"
            size="medium"
            margin="normal"
          />
          <TextField
            className={styles.inputoutlined}
            sx={{ width: 77 }}
            color="secondary"
            variant="outlined"
            type="number"
            label="HP"
            placeholder="Awake"
            size="medium"
            margin="normal"
          />
        </div>
      </div>
      <div className={styles.workspaceParent}>
        <img className={styles.workspaceIcon} alt="" src="/workspace.svg" />
        <FormControl sx={{ width: 203 }} variant="outlined">
          <InputLabel color="secondary">Jewelry</InputLabel>
          <Select color="secondary" size="medium" label="Jewelry">
            <MenuItem value="Arbol">Arbol</MenuItem>
            <MenuItem value="Nassen">Nassen</MenuItem>
            <MenuItem value="Taurus">Taurus</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
    </div>
  );
};

export default ContainerJewelry;
