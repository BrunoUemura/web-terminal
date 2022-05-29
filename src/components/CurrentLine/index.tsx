import { useState } from "react";
import styles from "./styles.module.scss";

type Props = {
  input: string;
};

export default function CurrentLine({ input }: Props) {
  const [commands, setCommands] = useState<string[]>(["help"]);

  const handleEnter = (event: any) => {
    if (event.key === "Enter") {
      setCommands(event.target.value);
    }
  };

  return (
    <div className={styles.currentLine}>
      <div className={styles.inputs}>
        <p>
          <span className={styles.machineName}>visitor@buemura.com</span>:
          <span className={styles.directoryName}>~</span>${" "}
        </p>
        {!!input ? (
          <input type="text" value={input} />
        ) : (
          <input type="text" onKeyPress={(event) => handleEnter(event)} />
        )}
      </div>
    </div>
  );
}
