import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const New = () => {
  return (
    <div>
      <Header text={"title"} leftChild={<Button />} />
      <Editor />
    </div>
  );
};

export default New;
