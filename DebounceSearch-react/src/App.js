
import './App.css';
import ProductList from './Components/ProductList';
// import Test from './Components/Test';
import UseMemo from './Components/UseMemo';
import Debounce from './Components/Debounce';
function App() {
  return (
    <>
   <Debounce/>
    <h3>App</h3>
    <ProductList/>
    <UseMemo/>
    </>
  );
}
export default App;
