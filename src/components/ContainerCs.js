import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import styles from "./ContainerCs.module.css";
const ContainerCs = () => {
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
      <div className={styles.holidaysParent}>
        <img className={styles.holidaysIcon} alt="" src="/-024-holidays.svg" />
        <div className={styles.selectoutlinedWrapper}>
          <FormControl sx={{ width: 180 }} variant="outlined">
            <InputLabel color="secondary">CS Set</InputLabel>
            <Select color="secondary" size="medium" label="CS Set">
              <MenuItem value="Trinium Dragon">Trinium Dragon</MenuItem>
              <MenuItem value="Reinforced Ethereal">
                Reinforced Ethereal
              </MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <FormControl sx={{ width: 119 }} variant="outlined">
          <InputLabel color="secondary">Rarity</InputLabel>
          <Select color="secondary" size="medium" label="Rarity">
            <MenuItem value="Ins HP">Ins HP</MenuItem>
            <MenuItem value="Ins All Stat">Ins All Stat</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.inputoutlinedContainer}>
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
        </div>
        <div className={styles.selectoutlinedParent}>
          <FormControl sx={{ width: 161 }} variant="outlined">
            <InputLabel color="secondary">Cloak</InputLabel>
            <Select color="secondary" size="medium" label="Cloak">
              <MenuItem value="PvE Set">PvE Set</MenuItem>
              <MenuItem value="PvE Slime">PvE Slime</MenuItem>
              <MenuItem value="PvP Slime">PvP Slime</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <FormControl sx={{ width: 119 }} variant="outlined">
            <InputLabel color="secondary">Rarity</InputLabel>
            <Select color="secondary" size="medium" label="Rarity">
              <MenuItem value="Ins HP">Ins HP</MenuItem>
              <MenuItem value="Ins STA">Ins STA</MenuItem>
              <MenuItem value="Ins All Stat">Ins All Stat</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.inputoutlinedContainer}>
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
        </div>
        <div className={styles.selectoutlinedGroup}>
          <FormControl sx={{ width: 161 }} variant="outlined">
            <InputLabel color="secondary">Mask</InputLabel>
            <Select color="secondary" size="medium" label="Mask">
              <MenuItem value="Aura Ball Mask">Aura Ball Mask</MenuItem>
              <MenuItem value="Dragon Lord Wing Mask">
                Dragon Lord Wing Mask
              </MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <FormControl sx={{ width: 119 }} variant="outlined">
            <InputLabel color="secondary">Rarity</InputLabel>
            <Select color="secondary" size="medium" label="Rarity">
              <MenuItem value="Ins HP">Ins HP</MenuItem>
              <MenuItem value="Ins STA">Ins STA</MenuItem>
              <MenuItem value="Ins All Stat">Ins All Stat</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default ContainerCs;
