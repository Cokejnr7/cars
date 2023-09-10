import { configureStore } from "@reduxjs/toolkit";
import {
  carReducer,
  changeSearchTerm,
  addCar,
  removeCar,
} from "./slices/carsSlice";
import { formReducer, changeCost, changeName } from "./slices/FormSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carReducer,
  },
});

export { store, changeCost, changeName, changeSearchTerm, addCar, removeCar };
