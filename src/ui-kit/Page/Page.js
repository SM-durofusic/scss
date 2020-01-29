import * as React from "react";
import classnames from "classnames";
import { css } from "glamor";
import styles from "./Page.module.scss";

const pageStyleGlamor = css({
  backgroundColor: "green"
});

const Page = ({ cx, children }) => {
  return (
    <div
      className={classnames({
        [styles.page]: true,
        [cx]: cx
      })}
    >
      {children}
    </div>
  );
};

export default Page;
