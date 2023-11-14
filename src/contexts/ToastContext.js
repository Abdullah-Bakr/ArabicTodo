import { createContext, useContext, useState } from "react";
import MySnackbar from "../components/MySnackBar";

const ToastContext = createContext({});
export const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function showHideToast(message) {
    setOpen(true);
    setMessage(message);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }

  return (
    <ToastContext.Provider value={{ showHideToast }}>
      <MySnackbar open={open} message={message} />
      {children}
    </ToastContext.Provider>
  );
};
export const useToast = () => {
  return useContext(ToastContext);
};

// const updatedTodo = updatedTodos.find((t) => t.id === todo.id);
// if (updatedTodo.isCompleted) {
// showHideToast("تمت الإضافة إلى المهام المنجزة");
// } else {
//   showHideToast("تمت الإزالة من المهام المنجزة");
// }
