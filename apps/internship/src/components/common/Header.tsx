/** @jsxImportSource @emotion/react */
import { color, font } from "@entry/design-token";

import LogoOrange from "../../assets/LogoOrange.svg";
import LogoGreen from "../../assets/LogoGreen.svg";
import { Button } from "./Button";
import { useState } from "react";
import { Link } from "react-router-dom";

interface IHeader {
  userType: "admin" | "user";
  isLogin: boolean;
}

const logoStyle = (userType: "admin" | "user", isActive: boolean) => ({
  container: {
    width: "100%",
    height: "64px",
    display: "flex",
    alignItems: "center",
    padding: "0 22px",
    justifyContent: "space-between",
    borderBottom: `1px solid ${color.gray[400]}`,
  },
  img: {
    width: "35px",
  },
  carColor: {
    color: userType === "admin" ? color.green[500] : color.orange[500],
  },
  eersColor: {
    color: userType === "admin" ? color.green[200] : color.orange[200],
  },
  jobStatu: {
    color: isActive ? color.green[500] : color.gray[900],
    cursor: "pointer",
    ":hover": {
      color: color.green[500],
    },
  },
});

export const Header = ({ userType, isLogin }: IHeader) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const style = logoStyle(userType, isActive);

  const handleJobStatusIsClick = () => {
    setIsActive(true);
  };

  return (
    <div className="container" css={style.container}>
      <a
        className="Logo"
        href="/"
        css={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginLeft: "12px",
          fontSize: font.h5.fontSize,
          color: color.gray[900],
        }}
      >
        <img
          css={style.img}
          src={userType === "admin" ? LogoGreen : LogoOrange}
        />
        <div css={{ display: "flex" }}>
          <div>Entry</div>
          <div css={style.carColor}>Car</div>
          <div css={style.eersColor}>eers</div>
        </div>
      </a>

      <div
        css={{
          display: "flex",
          marginRight: "12px",
          alignItems: "center",
          gap: "30px",
        }}
      >
        {userType === "admin" && (
          <a
            css={style.jobStatu}
            href="/jobStatus"
            onClick={handleJobStatusIsClick}
          >
            <div>채용 확인</div>
          </a>
        )}
        <Button
          children={isLogin ? "로그아웃" : "로그인"}
          whatColor={userType}
        />
      </div>
    </div>
  );
};
