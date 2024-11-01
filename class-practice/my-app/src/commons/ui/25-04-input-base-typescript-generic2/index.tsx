import { useFormContext, FieldValues, Path } from "react-hook-form";
import styles from "./styles.module.css";
import { HTMLInputTypeAttribute } from "react";

interface IInputBaseProps<T> {
  className?: string;
  type: HTMLInputTypeAttribute;
  keyName: Path<T>;
}

function InputBase<T extends FieldValues>(props: IInputBaseProps<T>) {
  const { register } = useFormContext<T>();
  return (
    <input
      className={props.className}
      type={props.type}
      {...register(props.keyName)}
    />
  );
}

export default function InputSoftFull<T extends FieldValues>(
  props: IInputBaseProps<T>
) {
  return <InputBase<T> className={styles.input_soft_s_full} {...props} />;
}
