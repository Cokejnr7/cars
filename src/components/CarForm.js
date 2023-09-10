import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return { name: state.form.name, cost: state.form.cost };
  });

  const handleCostChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch(changeCost(value));
  };

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

          <div className="field">
            <label className="label">Cost</label>
            <input
              value={cost || ""}
              className="input is-expanded"
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
