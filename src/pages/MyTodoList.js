import { useEffect, useState } from "react";

function MyTodoList() {
  let [todoList, setTodoList] = useState([]);

  // spl function, useEffect()
  // useEffect(() => {}, []);
  // useEffect(() => getAllTodoAction(), []);
  useEffect(() => {
    getAllTodoAction();
  }, []);

  let getAllTodoAction = async () => {
    let url = `http://localhost:4000/find-all-todo`;
    let res = await fetch(url);
    let list = await res.json();

    // list updated.
    let newlist = [...list];
    setTodoList(newlist);
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6">
          <h1>Display All Todo</h1>
        </div>
      </div>

      {todoList.map((item) => (
        <>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6">
              <div className="alert alert-secondary mb-1">
                <div className="fs-3 text-capitalize">{item.task} </div>
                <div>{item.description}</div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default MyTodoList;
