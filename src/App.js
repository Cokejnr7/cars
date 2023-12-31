import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

const App = () => {
  return (
    <main className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </main>
  );
};

export default App;
