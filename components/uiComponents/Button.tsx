import React from "react";

interface Props {
  className: string;
  children: React.ReactNode;
}

const Button = ({ className, children }: Props) => {
  return <button className={className}>{children}</button>;
};

export default Button;
