import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();

  const name = useSelector((state) => {
    return state.form.name;
  });

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              value={name}
              className="input is-expanded"
              onChange={handleNameChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
