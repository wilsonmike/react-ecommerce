import useFirestore from "../../hooks/useFirestore";
import "./image-grid.styles.scss";

const ImageGrid = () => {
  const { docs } = useFirestore("ashley");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div className="img-wrap" key={doc.id}>
            <img src={doc.url} alt="Ashley t-shirt" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
