import { useSelector } from "react-redux";
import Header from "../Header/Header";
import { Modal } from "../Modal/Modal";
import TodoTable from "../TodoTable/TodoTable";
import Filter from "../Filter/Filter";

const Layout = () => {
  const modalStatus = useSelector((state) => state.toggleModal.value);
  return (
    <div className="relative">
      <Filter />
      <Header />
      <TodoTable />
      <Modal visible={modalStatus} />
    </div>
  );
};

export default Layout;
