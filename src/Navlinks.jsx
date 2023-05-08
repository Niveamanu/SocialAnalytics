import { useGlobalContext } from "./Context";
import { data } from "./data";

const Navlinks = () => {
  const { openSidebar, currentItem, setCurrentItem, uniqueStream } =
    useGlobalContext();
  return (
    <div className="btn-container">
      {uniqueStream.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentItem(item)}
            className={item === currentItem ? "job-btn active-btn" : "job-btn"}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Navlinks;
