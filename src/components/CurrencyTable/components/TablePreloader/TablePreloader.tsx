import { BallLoader } from "@icons";
import s from "./TablePreloader.module.scss";

const TablePreloader = () => {
  return (
    <div className={s.loader}>
      <BallLoader />
    </div>
  );
};

export default TablePreloader;
