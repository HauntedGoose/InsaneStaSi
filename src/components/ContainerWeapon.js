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
import styles from "./ContainerWeapon.module.css";
const ContainerWeapon = () => {
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
      <div className={styles.inputoutlinedGroup}>
        <TextField
          className={styles.inputoutlined}
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
          className={styles.inputoutlined1}
          sx={{ width: 77 }}
          color="secondary"
          variant="outlined"
          type="number"
          label="HP"
          placeholder="Awake"
          size="medium"
          margin="normal"
        />
        <FormControlLabel
          className={styles.checkboxdefaultCheckboxAnd1}
          label="HP Cards"
          labelPlacement="end"
          control={<Checkbox color="secondary" size="medium" />}
        />
      </div>
      <div className={styles.inputoutlinedContainer}>
        <TextField
          className={styles.inputoutlined4}
          sx={{ width: 77 }}
          color="secondary"
          variant="outlined"
          type="number"
          label="Runes"
          placeholder="STA"
          size="medium"
          margin="normal"
        />
        <TextField
          className={styles.inputoutlined4}
          sx={{ width: 77 }}
          color="secondary"
          variant="outlined"
          type="number"
          label="Runes"
          placeholder="HP"
          size="medium"
          margin="normal"
        />
      </div>
      <div className={styles.frameContainer}>
        <img className={styles.frameIcon} alt="" src="/frame3.svg" />
        <div className={styles.selectoutlinedParent}>
          <FormControl sx={{ width: 203 }} variant="outlined">
            <InputLabel color="secondary">Weapon</InputLabel>
            <Select color="secondary" size="medium" label="Weapon">
              <MenuItem value="Dragon Lord Champion Knuckle">
                Dragon Lord Champion Knuckle
              </MenuItem>
              <MenuItem value="Divine Champion Fist">
                Divine Champion Fist
              </MenuItem>
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
      <div className={styles.frameDiv}>
        <img className={styles.frameIcon1} alt="" src="/frame4.svg" />
        <div className={styles.selectoutlinedParent}>
          <FormControl sx={{ width: 203 }} variant="outlined">
            <InputLabel color="secondary">Weapon 2/Shield</InputLabel>
            <Select color="secondary" size="medium" label="Weapon 2/Shield">
              <MenuItem value="Divine Champion Shield">
                Divine Champion Shield
              </MenuItem>
              <MenuItem value="Dragon Lord Champion Shield">
                Dragon Lord Champion Shield
              </MenuItem>
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
    </div>
  );
};

export default ContainerWeapon;
