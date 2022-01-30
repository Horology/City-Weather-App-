import InputForm from "./components/InputForm";
import WeatherInfo from "./components/WeatherInfo";

function App() {



  return (
    <div>
      <div className=" pt-48 flex flex-column align-center min-h-screen justify-center bg-gray-600 p-auto">
        <InputForm/>
      </div>
      <WeatherInfo />
    </div>
  );
}

export default App;
