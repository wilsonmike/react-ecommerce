const UploadForm = () => {
  const changeHandler = (e) => {
    console.log("changed");
  };
  return (
    <form action="">
      <input type="file" onChange={changeHandler} />
    </form>
  );
};

export default UploadForm;
