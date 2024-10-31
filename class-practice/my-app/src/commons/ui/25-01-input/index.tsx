import { useFormContext } from "react-hook-form";

interface IInput {
  type: string;
  keyName: string;
}

export default function Input(props: IInput) {
  const { register } = useFormContext();
  return <input type={props.type} {...register(props.keyName)} />;
}
