import { useRouter } from "next/navigation";

export default function UseLoginCheck() {
  const router = useRouter();
  const loginCheck = () => {
    // 1. check login

    // 2. fail
    alert("fail");
    router.push("/section08/08-06-custom-hook-login");
  };

  return {
    loginCheck,
  };
}
