import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Recommed = ({ item }) => {
  const { state, dispatch } = useContext(GlobalContext);

  const name = item.name;

  return (
    <div className='recommed-containers'>
      <div className='line'></div>
      <div className='recommed-container '>
        {item.recomments.map((item, i) => (
          <div className='message-container' key={i}>
            <div className='person'>
              <div className='messager'>
                <div className='messager-info'>
                  <img src={item.image} alt='' />
                  <p className='messager-name'>{item.recommedName}</p>
                  <small>{item.recommedTime}</small>
                </div>
              </div>
              <div className='message'>
                <p className='tag'>
                  <span> {`@${name}`} </span>
                  {item.recommedMessage}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommed;
