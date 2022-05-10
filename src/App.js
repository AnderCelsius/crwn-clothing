import Directory from "./components/directory/directory.component";
import Categories from '../src/categories.json'

function App() {
  return <Directory categories={Categories}/>;
}

export default App;
