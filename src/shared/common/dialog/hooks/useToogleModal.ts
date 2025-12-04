import { useCallback, useState } from "react";



const useToogleModal = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = useCallback(() => setOpen((prev) => !prev), []);
  return { open, toggleModal };
};

export default useToogleModal;
