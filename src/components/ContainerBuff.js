import { FormControlLabel, Checkbox } from "@mui/material";
import styles from "./ContainerBuff.module.css";
const ContainerBuff = () => {
  return (
    <div className={styles.frameParent}>
      <button className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <div className={styles.buffWrapper}>
          <div className={styles.buff}>{`Buff `}</div>
        </div>
      </button>
      <FormControlLabel
        className={styles.checkboxdefaultCheckboxAnd}
        label="Buff Pang"
        labelPlacement="end"
        control={<Checkbox color="secondary" />}
      />
      <FormControlLabel
        className={styles.checkboxdefaultCheckboxAnd}
        label="Couples Buff"
        labelPlacement="end"
        control={<Checkbox color="secondary" />}
      />
      <FormControlLabel
        className={styles.checkboxdefaultCheckboxAnd}
        label="Class Buff"
        labelPlacement="end"
        control={<Checkbox color="secondary" />}
      />
    </div>
  );
};

export default ContainerBuff;
