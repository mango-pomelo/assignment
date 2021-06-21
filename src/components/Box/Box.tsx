import React, { FunctionComponent, ReactNode } from "react";
import styles from "./Box.module.scss";
import cn from "classnames";

type HEIGHT = "short" | "tall" | "grand";

const Box: FunctionComponent<
{ children: ReactNode}> = ({ children
}) => {
  return <div className={styles.Box}>{children}</div>;
};

export default Box;
