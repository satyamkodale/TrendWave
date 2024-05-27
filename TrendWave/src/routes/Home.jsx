import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const Home = () => {
  const items = useSelector((store) => store.items);
  console.log(items);
  console.log("items received to send one by one ");
  return (
    <>
      <main>
        <div className="items-container">
          {items.map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
