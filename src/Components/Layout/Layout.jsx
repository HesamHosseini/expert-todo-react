import { useSelector } from "react-redux";
import Header from "../Header/Header";
import { Modal } from "../Modal/Modal";
import TodoTable from "../TodoTable/TodoTable";

const Layout = () => {
  const modalStatus = useSelector((state) => state.toggleModal.value);
  return (
    <div>
      <Header />
      <TodoTable />

      <Modal visible={modalStatus} />
    </div>
  );
};

export default Layout;
