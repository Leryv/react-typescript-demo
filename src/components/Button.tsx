import React from "react";

type Props = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: Props) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Clicked Me</button>
  );
};
