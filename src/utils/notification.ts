import { toast } from "react-toastify";

const notificationStyles = {
  style: {
    borderRadius: "10px",
    background: "#333",
  },
};

export const warningNotification = (message: string) =>
  toast.warning(message, {
    ...notificationStyles,
  });

export const errorNotification = (message: string) =>
  toast.error(message, {
    ...notificationStyles,
  });

export const successNotification = (message: string) =>
  toast.success(message, {
    ...notificationStyles,
  });
