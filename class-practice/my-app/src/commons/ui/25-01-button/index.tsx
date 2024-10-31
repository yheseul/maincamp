import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

export default function Button({ children }: { children: ReactNode }) {
  const { formState } = useFormContext();

  return (
    <button disabled={!formState.isValid} type="submit">
      {children}
    </button>
  );
}
