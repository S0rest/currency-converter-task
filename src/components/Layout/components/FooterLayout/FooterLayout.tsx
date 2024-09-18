import s from "./FooterLayout.module.scss";

const FooterLayout = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={s.footer}>
      <p>{getCurrentYear()} Orest Dykovych all right reserved</p>
    </div>
  );
};

export default FooterLayout;
