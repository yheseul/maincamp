"use client";

import { useFormState } from "react-dom";
import onSubmit from "./action";

export default function RscFormExample() {
  const [state, formAction] = useFormState(onSubmit);
  console.log(state);

  return (
    <form action={formAction}>
      title: <input type="text" name="title" />
      contents: <input type="text" name="contents" />
      <button>register</button>
    </form>
  );
}
