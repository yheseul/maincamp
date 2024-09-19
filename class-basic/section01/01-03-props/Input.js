const Input = (props) => {
  console.log(props)
  console.log(props.box1)
  console.log(props.box2)
  console.log(props.box3)
  const initialMessage = "please enter your password/"
  return <input type="text" placeholder={initialMessage} />
}