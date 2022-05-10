import Directory from "../../components/directory/directory.component";
import Categories from "../../categories.json"

const Home = () => {
  return <Directory categories={Categories} />;
};

export default Home;
