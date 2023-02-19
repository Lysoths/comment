import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import Comments from "./components/Comments";
import Error from "./components/Error";

function App() {
  const { isShow } = useContext(GlobalContext);

  return (
    <div className='comments-container'>
      {isShow && <Error />}
      <Comments />
    </div>
  );
}

export default App;
