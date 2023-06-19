import { useRef, useState } from "react";

function MyTodo() {
  let formRef = useRef();
  let [sucessBox, setSuccessBox] = useState(false);
  let [todo, setTodo] = useState({
    name: "",
    price: "",
    flavor: "",
    description: "",
  });

  let handleAddNameAction = (e) => {
    let newTodo = { ...todo, name: e.target.value };
    setTodo(newTodo);
  };

  let handleAddPriceAction = (e) => {
    // console.log(e.target);
    let newTodo = { ...todo, price: e.target.value };
    setTodo(newTodo);
  };
  let handleAddFlavorAction = (e) => {
    // console.log(e.target);
    let newTodo = { ...todo, flavor: e.target.value };
    setTodo(newTodo);
  };
  let handleAddDescriptionActionAction = (e) => {
    // console.log(e.target);
    let newTodo = { ...todo, description: e.target.value };
    setTodo(newTodo);
  };

  let addTodoAction = async () => {
    console.log(todo);
    formRef.current.classList.add("was-validated");
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      alert();
      return;
    }

    let url = `http://localhost:4000/addtodo?name=${todo.name}&description=${todo.description}&price=${todo.price}&flavor=${todo.flavor}`;
    await fetch(url);

    // clear the box
    let newtodo = { name: "", price: "", flavor: "", description: "" };
    setTodo(newtodo);

    setSuccessBox(true);
    setTimeout(() => {
      setSuccessBox(false);
    }, 5000);

    formRef.current.classList.remove("was-validated");
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-5">
          <form ref={formRef} className="needs-validation">
            <h1>Add Products</h1>
            <label htmlFor="">Product Name*</label>
            <input
              className="form-control form-control-lg mb-2"
              type="text"
              placeholder="Name"
              value={todo.name}
              onChange={handleAddNameAction}
              required
            />
            <label htmlFor="">Product Price*</label>
            <input
              className="form-control form-control-lg mb-2"
              type="text"
              placeholder="Price"
              value={todo.price}
              onChange={handleAddPriceAction}
              required
            />
            <label htmlFor="">Flavor*</label>
            <input
              className="form-control form-control-lg mb-2"
              type="text"
              placeholder="Flavor"
              value={todo.flavor}
              onChange={handleAddFlavorAction}
              required
            />

            <label htmlFor="">Product Description*</label>
            <textarea
              className="form-control mb-2"
              cols="30"
              rows="3"
              placeholder="Enter Description"
              value={todo.description}
              onChange={handleAddDescriptionActionAction}
              required
            ></textarea>

            <input
              className="btn btn-lg btn-secondary w-100"
              type="button"
              value="Add Todo"
              onClick={addTodoAction}
            />
          </form>

          {sucessBox && (
            <div className="alert alert-success">Operation Success</div>
          )}
        </div>
      </div>
    </>
  );
}

export default MyTodo;
