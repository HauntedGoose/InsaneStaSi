import "antd/dist/antd.min.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import { Switch as AntSwitch } from "antd";
import ContainerCs from "../components/ContainerCs";
import ContainerBuff from "../components/ContainerBuff";
import ContainerArmor from "../components/ContainerArmor";
import ContainerWeapon from "../components/ContainerWeapon";
import ContainerJewelry from "../components/ContainerJewelry";
import ContainerPet from "../components/ContainerPet";
import ContainerPrems from "../components/ContainerPrems";
import styles from "./Dashboard.module.css";
const Dashboard = () => {
  return (
    <header className={styles.dashboard}>
      <div className={styles.frameParent}>
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
        <div className={styles.selectfilledParent}>
          <FormControl
            className={styles.selectfilled}
            sx={{ width: 165 }}
            variant="filled"
          >
            <InputLabel color="secondary">Select</InputLabel>
            <Select color="secondary" size="medium" label="Select">
              <MenuItem value="Seraph">Seraph</MenuItem>
              <MenuItem value="Slayer">Slayer</MenuItem>
              <MenuItem value="Templar">Templar</MenuItem>
            </Select>
            <FormHelperText>class</FormHelperText>
          </FormControl>
          <label className={styles.label}>350</label>
          <div className={styles.lvl}>lvl</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.fullStaTotalHpParent}>
          <label className={styles.fullStaTotal}>Full STA Total HP</label>
          <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
        </div>
        <label className={styles.grilledEelbugTotal}>
          Grilled Eel(Bug) Total HP
        </label>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.totalHpParent}>
          <label className={styles.totalHp}>Total HP</label>
          <label className={styles.totalSta}>Total STA</label>
        </div>
        <div className={styles.totalHpGroup}>
          <label className={styles.totalHp1}>Total HP</label>
          <label className={styles.totalSta1}>Total STA</label>
          <div className={styles.awakesLines}>Awakes lines</div>
          <div className={styles.frame} />
        </div>
      </div>
      <header className={styles.frameHeader}>
        <header className={styles.switchdefaultWrapper}>
          <AntSwitch
            className={styles.switchdefault}
            size="default"
            defaultChecked
          />
        </header>
        <div className={styles.logo}>LOGO</div>
      </header>
      <ContainerCs />
      <ContainerBuff />
      <ContainerArmor />
      <ContainerWeapon />
      <ContainerJewelry />
      <ContainerPet />
      <ContainerPrems />
    </header>
  );
};

export default Dashboard;
