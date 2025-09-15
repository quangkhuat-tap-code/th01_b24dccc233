import { useState } from "react";

function Bai1() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") return;
    setList([...list, task]);
    setTask("");
  };

  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Bài 1: To-do List</h2>
      <input
        type="text"
        value={task}
        placeholder="Nhập công việc"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul>
        {list.map((item, i) => (
          <li key={i}>
            {item} <button onClick={() => handleDelete(i)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bai1;
