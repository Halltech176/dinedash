import { Outlet } from "react-router";
import DashboardHeader from "./header";
import DashboardSidebar from "./sidebar";
import { CartModalComponent } from "../../modal/cart.modal";
import { useModal } from "../../../hooks";
import { useState } from "react";

const DashboardLayout = () => {
  const { modal, setModal } = useModal();

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setModal({ ...modal, isOpenCard: !modal.isOpenCard });
  };

  return (
    <>
      <CartModalComponent isOpen={modal.isOpenCard} onClose={onClose} />
      <div className="flex w-full h-screen overflow-hidden">
        <DashboardSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="flex-1 relative overflow-y-scroll noscrollbar">
          <div className="absolute w-full z-10">
            <DashboardHeader isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

          <main className="p-10 w-full mt-16 overflow-y-scroll h-full  flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
