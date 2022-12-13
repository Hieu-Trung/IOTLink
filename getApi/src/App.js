
import './App.css';
import GetApiCovid from './components/getApiCovid';
import GetApiYoutube from './components/getApiYoutube';
import CrudApi from './components/crudApiAxios';

function App() {
  return (
    <div className="App">
      {/* Test get Api covid  */}
      {/* <GetApiCovid /> */}

      {/* get Api youtube */}
      <GetApiYoutube />


      {/* CRUD with api */}
      {/* <CrudApi /> */}
    </div>
  );
}

export default App;
