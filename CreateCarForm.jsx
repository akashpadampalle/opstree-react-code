import { useState } from "react";

const CreateCarForm = ({ addCar }) => {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    addCar({ name, model, quantity });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="enter car name"
        />
        <input
          id="model"
          type="text"
          value={model}
          onChange={(event) => setModel(event.target.value)}
          placeholder="enter car model"
        />
        <input
          id="name"
          type="number"
          onChange={(event) => setQuantity(Number(event.target.value))}
          placeholder="enter quantity"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default CreateCarForm;
