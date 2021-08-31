import "./modal.styles.scss";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="Team Ashley"
        // initial={{ y: "-100vh" }}
        // animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Modal;
