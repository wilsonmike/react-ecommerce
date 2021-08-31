import useFirestore from "../../hooks/useFirestore";
import { motion } from "framer-motion";
import "./image-grid.styles.scss";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("ashley");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 0.8 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="Ashley t-shirt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
