import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import styles from "./ContainerPet.module.css";
const ContainerPet = () => {
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
            className={styles.inputoutlined1}
            sx={{ width: 77 }}
            color="secondary"
            variant="outlined"
            type="number"
            label="HP"
            placeholder="HP"
            size="medium"
            margin="normal"
          />
        </div>
        <div className={styles.groupParent}>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <div className={styles.buffPetBeadsWrapper}>
            <div className={styles.buffPetBeads}>Buff Pet Beads</div>
          </div>
        </div>
      </div>
      <div className={styles.frame}>
        <div className={styles.frameContainer}>
          <div className={styles.buffPetWrapper}>
            <div className={styles.buffPetBeads}>Buff Pet</div>
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
          </div>
        </div>
      </div>
      <div className={styles.frame1}>
        <div className={styles.selectoutlinedParent}>
          <FormControl sx={{ width: 132 }} variant="outlined">
            <InputLabel color="secondary">Raised Pets</InputLabel>
            <Select color="secondary" size="medium" label="Raised Pets">
              <MenuItem value="Mega Lion">Mega Lion</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <div className={styles.inputoutlinedContainer}>
            <TextField
              className={styles.inputoutlined4}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerPet;
