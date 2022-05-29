import CurrentLine from "../CurrentLine";
import Output from "../Output";

type Props = {
  command: string;
};

export default function Command({ command: input }: Props) {
  return (
    <div>
      <CurrentLine input={input} />
      <Output input={input} />
    </div>
  );
}
