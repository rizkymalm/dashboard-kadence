import React from "react";

import "./styles.scss";

interface Props {
  isOutlined?: boolean;
  textBtn: string;
  onClick?: () => void;
}

const Button = ({ isOutlined = false, textBtn, onClick }: Props) => {
  return (
    <button
      type="button"
      className={`button shadow ${isOutlined ? "outlined" : ""}`}
      onClick={onClick}
    >
      {textBtn}
    </button>
  );
};

export default Button;
