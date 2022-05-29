import styles from "./styles.module.scss";
import { useEffect } from "react";

type Props = {
  input: string;
};

export default function Output({ input }: Props) {
  useEffect(() => {
    if (input === "help") {
      setTimeout(() => {
        // setOutputs(`You typed ${input}`);
      }, 1000);
    }
  }, []);

  return (
    <div className={styles.output}>
      {!!input ? <p>{`You typed ${input}`}</p> : <p></p>}
    </div>
  );
}
