import {
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import styles from "./ContainerArmor.module.css";
const ContainerArmor = () => {
  return (
    <div className={styles.inputoutlinedParent}>
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
      <TextField
        className={styles.inputoutlined1}
        sx={{ width: 77 }}
        color="secondary"
        variant="outlined"
        type="number"
        label="STA"
        placeholder="Awake"
        size="medium"
        margin="normal"
      />
      <TextField
        className={styles.inputoutlined2}
        sx={{ width: 77 }}
        color="secondary"
        variant="outlined"
        type="number"
        label="HP"
        placeholder="Awake"
        size="medium"
        margin="normal"
      />
      <TextField
        className={styles.inputoutlined3}
        sx={{ width: 77 }}
        color="secondary"
        variant="outlined"
        type="number"
        label="STA"
        placeholder="Awake"
        size="medium"
        margin="normal"
      />
      <TextField
        className={styles.inputoutlined4}
        sx={{ width: 77 }}
        color="secondary"
        variant="outlined"
        type="number"
        label="HP"
        placeholder="Awake"
        size="medium"
        margin="normal"
      />
      <TextField
        className={styles.inputoutlined5}
        sx={{ width: 77 }}
        color="secondary"
        variant="outlined"
        type="number"
        label="STA"
        placeholder="Awake"
        size="medium"
        margin="normal"
      />
      <div className={styles.frameParent}>
        <div className={styles.inputoutlinedGroup}>
          <TextField
            className={styles.inputoutlined6}
            sx={{ width: 77 }}
            color="secondary"
            variant="outlined"
            type="number"
            label="STA"
            placeholder="Awake"
            size="medium"
            margin="normal"
          />
          <TextField
            className={styles.inputoutlined6}
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
        <FormControlLabel
          className={styles.checkboxdefaultCheckboxAnd}
          label="HP Cards"
          labelPlacement="end"
          control={<Checkbox color="secondary" size="medium" />}
        />
      </div>
      <div className={styles.frameGroup}>
        <img className={styles.frameIcon} alt="" src="/frame2.svg" />
        <FormControl sx={{ width: 180 }} variant="outlined">
          <InputLabel color="secondary">Armor</InputLabel>
          <Select color="secondary" size="medium" label="Armor">
            <MenuItem value="Celestial">Celestial</MenuItem>
            <MenuItem value="Dragon Lord">Dragon Lord</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl sx={{ width: 119 }} variant="outlined">
          <InputLabel color="secondary">Rarity</InputLabel>
          <Select color="secondary" size="medium" label="Rarity">
            <MenuItem value="Ins HP">Ins HP</MenuItem>
            <MenuItem value="Ins All Stat">Ins All Stat</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
    </div>
  );
};

export default ContainerArmor;
