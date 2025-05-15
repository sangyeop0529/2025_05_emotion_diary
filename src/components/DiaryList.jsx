import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";

const DiaryList = () => {
  return (
    <div className="DiaryList">
      <section className="menu_bar">
        <select>
          <option value={"latest"}>최신 순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button text={"새로운 일기 쓰기"} type={"POSITIVE"} />
      </section>
      <section className="list_wrapper">
        <DiaryItem />
      </section>
    </div>
  );
};

export default DiaryList;
