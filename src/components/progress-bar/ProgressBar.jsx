import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
// import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  return <div className="progress-bar">progress</div>;
};

export default ProgressBar;
