import { Modal } from "antd";

export default function ModalRefactoringParallelRoutingNew () {
  return (
    <Modal title="Basic Modal" open={true}>
    title: <input type="text" />
    contents: <input type="text" />
    password: <input type="password" placeholder="password" />
  </Modal>
  )
}