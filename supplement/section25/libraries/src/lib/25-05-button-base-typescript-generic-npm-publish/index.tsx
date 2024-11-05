import { ReactNode } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import styles from "./styles.module.css";

interface IButtonBaseProps {
  children: ReactNode;
  className?: string;
}

// 1. 버튼 뼈대 만들기
function ButtonBase<T extends FieldValues>(props: IButtonBaseProps) {
  const { formState } = useFormContext();

  return (
    <button disabled={!formState.isValid} type="submit">
      {props.children}
    </button>
  );
}

// 2. 버튼 찍어내기
// 2-1 부드러운 버튼
export function ButtonSoftMFull<T extends FieldValues>(
  props: IButtonBaseProps
) {
  return <ButtonBase<T> className={styles.button_soft_m_full} {...props} />;
}

// // 2-2 얇은 버튼
// export function ButtonThinFitM() {
//   return <ButtonBase className={styles.button_thin_fit_m} />;
// }

// // 2-3 둥근 버튼
// export function ButtonCircleMM() {
//   return <ButtonBase className={styles.button_circle_m_m} />;
// }
