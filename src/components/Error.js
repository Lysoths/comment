import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
const Error = () => {
  const { isShow, state, dispatch, id, setIsShow } = useContext(GlobalContext);

  const deleteHandler = () => {
    const newState = state.filter((item) => item.commitId !== id);
    dispatch({ type: "delete", state: newState });
    setIsShow(false);
  };

  const noDeleteHandler = () => {
    setIsShow(false);
  };
  return (
    <>
      {isShow && (
        <div className='all'>
          <div className='error'>
            <p>Delete comment</p>
            <p>
              Are you sure you want to delete this comment? this will remove the
              comment and can't be undone.
            </p>
            <div className='delete-container'>
              <button className='no' onClick={noDeleteHandler}>
                NO, CANCEL
              </button>
              <button className='yes' onClick={deleteHandler}>
                YES DELETE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Error;
