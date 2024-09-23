const App = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("")

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickSignup = (event) => {
    // document.getElementById("emailError").innerText =
    //   "이메일이 올바르지 않습니다.";
    if (email.includes("@") === false) {
      setEmailError("이메일이 올바르지 않습니다.");
    } else {
      alert("회원가입 ㅊㅋㅊㅋ");
    }
  };

  return (
    <div className="signup">
      email: <input type="text" onChange={onChangeEmail} />
      <br />
      {/* <div id="emailError"></div> */}
      <div>{emailError}</div>
      password: <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickSignup}>signup</button>
    </div>
  );
};
