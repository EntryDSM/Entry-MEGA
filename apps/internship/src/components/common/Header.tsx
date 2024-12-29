/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { color, font } from "@entry/design-token";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ImgStore } from "./ImgStore";

type IHeader = {
  userType: "admin" | "user";
  isLogin: boolean;
};

type InternalButtonProps = {
  text: string;
  isAdmin: boolean;
  onClick?: () => void;
};

const styleUtils = {
  button: (isAdmin: boolean) =>
    css({
      width: "110px",
      height: "40px",
      padding: "10px 25px",
      backgroundColor: color.extra.white,
      border: `1px solid ${isAdmin === true ? color.green[500] : color.orange[500]}`,
      borderRadius: "100px",
      fontSize: font.caption1.fontSize,
      color: isAdmin === true ? color.green[500] : color.orange[500],
      cursor: "pointer",
      "&:hover": {
        backgroundColor:
          isAdmin === true ? color.green[500] : color.orange[500],
        color: color.extra.white,
      },
      userSelect: "none",
    }),

  header: (userType: "admin" | "user", isActive: boolean) => ({
    container: css({
      width: "100%",
      height: "64px",
      display: "flex",
      alignItems: "center",
      padding: "0 22px",
      justifyContent: "space-between",
      borderBottom: `1px solid ${color.gray[400]}`,
    }),
    carColor: css({
      color: userType === "admin" ? color.green[500] : color.orange[500],
      userSelect: "none",
    }),
    eersColor: css({
      color: userType === "admin" ? color.green[200] : color.orange[200],
      userSelect: "none",
    }),
    jobStatu: css({
      color: isActive ? color.green[500] : color.gray[900],
      cursor: "pointer",
      "&:hover": {
        color: color.green[500],
      },
      userSelect: "none",
    }),
    logo: css({
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginLeft: "12px",
      fontSize: font.h5.fontSize,
      color: color.gray[900],
      cursor: "pointer",
      userSelect: "none",
    }),
    logoText: css({
      display: "flex",
      userSelect: "none",
    }),
    rightContainer: css({
      display: "flex",
      marginRight: "12px",
      alignItems: "center",
      gap: "30px",
    }),
  }),
};

export const Header = ({ userType, isLogin }: IHeader) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const style = styleUtils.header(userType, isActive);
  const navigate = useNavigate();

  const handleJobStatusIsClick = () => {
    setIsActive(true);
  };

  return (
    <div css={style.container}>
      <div onClick={() => navigate("/")} css={style.logo}>
        {userType === "admin" ? (
          <ImgStore name="LogoGreen" width="35px" />
        ) : (
          <ImgStore name="LogoOrange" width="35px" />
        )}
        {/* <img
          css={style.img}
          src={userType === "admin" ? LogoGreen : LogoOrange}
          alt="logo"
        /> */}
        <div css={style.logoText}>
          <div>Entry</div>
          <div css={style.carColor}>Car</div>
          <div css={style.eersColor}>eers</div>
        </div>
      </div>

      <div css={style.rightContainer}>
        {userType === "admin" && (
          <div css={style.jobStatu} onClick={handleJobStatusIsClick}>
            <div>채용 확인</div>
          </div>
        )}
        <InternalButton
          text={isLogin ? "로그아웃" : "로그인"}
          isAdmin={userType === "admin"}
          // onClick={() => {
          //   /* 로그인/로그아웃 처리 */
          // }}
        ></InternalButton>
      </div>
    </div>
  );
};

const InternalButton = ({ text, isAdmin, onClick }: InternalButtonProps) => (
  <button css={styleUtils.button(isAdmin)} onClick={onClick}>
    {text}
  </button>
);
