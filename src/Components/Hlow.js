import img from "../assets/4.png";
function Hlow() {
  return (
    <div>
      <div className="grid mx-[5%] w-[90%] h-[10rem] my-2 rounded-lg  gap-5 hl1">
        <div className="bg-[#41db63]"></div>
        <div className="bg-gradient-to-r from-[#25d866] to-[#b4d835] relative w-full h-full">
          <img
            src={img}
            alt=""
            className="absolute right-[-4rem] w-[15rem] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
export default Hlow;
