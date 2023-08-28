import Habove from "./Habove";
import Hlow from "./Hlow";
import Nav from "./Nav";

function Home() {
  return (
    <div className="relative w-full h-[95vh] overflow-y-scroll bg-[#1e1e1e] rounded-lg">
      <Nav />
      <Habove />
      <Hlow />
    </div>
  );
}
export default Home;
