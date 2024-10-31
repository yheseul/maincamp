import { useFormContext } from "react-hook-form";
import styles from "./styles.module.css";

interface IInput {
  type: string;
  keyName: string;
  className: string;
}

function InputBase(props: IInput) {
  const { register } = useFormContext();
  return <input type={props.type} {...register(props.keyName)} />;
}

export default function InputSoftFull(props) {
  return <InputBase className={styles.input_soft_s_full} />;
}
