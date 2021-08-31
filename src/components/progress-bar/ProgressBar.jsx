import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import "./progressbar.styles.scss";
// import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
