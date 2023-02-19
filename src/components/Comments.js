import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Recommed from "../components/Recommed";

const Comments = ({ item }) => {
  const { state, dispatch, setIsShow, id, setId } = useContext(GlobalContext);

  const [commit, setCommit] = useState();

  const commitHandler = () => {
    dispatch({ type: "addCommit", value: commit });
    setCommit("");
  };

  const changeHandler = (e) => {
    setCommit(e.target.value);
  };

  const showHandler = (id) => {
    setIsShow(true);
    setId(id);
  };

  const editHandler = (id) => {
    const newComment = prompt("Enter new comment");
    if (newComment === "") {
      alert("You can't post empty comments");
    } else if (newComment === null) {
      return false;
    } else {
      dispatch({ type: "edit", id: id, value: newComment });
    }
  };

  const upLike = (id, like) => {
    dispatch({ type: "upLike", id: id, value: like });
  };

  const downLike = (id, like) => {
    if (like === 0) {
      return false;
    } else {
      dispatch({ type: "downLike", id: id, value: like });
    }
  };

  const recommentHandler = (id) => {
    const newComment = prompt("Enter new comment");
    if (newComment === "") {
      alert("You can't post empty comments");
    } else if (newComment === null) {
      return false;
    } else {
      dispatch({ type: "recomment", id: id, value: newComment });
    }
  };
  return (
    <div className='denem'>
      {state.map((item, i) => (
        <div key={i} className='container'>
          <div className='message-container'>
            <div className='likes'>
              <p onClick={() => upLike(item.commitId, item.like)}>+</p>
              <p className='like-number'>{item.like}</p>
              <p onClick={() => downLike(item.commitId, item.like)}>-</p>
            </div>
            <div className='person'>
              <div className='messager'>
                <div className='messager-info'>
                  <img src={item.profilePicture} alt='' />
                  <p className='messager-name'>{item.name}</p>
                  <small>{item.messageTime}</small>
                </div>

                <div className='reply'>
                  {item.id === 5 ? (
                    <img
                      src='https://www.linkpicture.com/q/icon-delete.svg'
                      alt=''
                    />
                  ) : (
                    <img src='https://www.linkpicture.com/q/icon-reply.svg' />
                  )}
                  {item.id === 5 ? (
                    <p
                      className='del'
                      onClick={() => showHandler(item.commitId)}
                    >
                      Delete
                    </p>
                  ) : (
                    <p onClick={() => recommentHandler(item.commitId)}>Reply</p>
                  )}
                  {item.id === 5 ? (
                    <img
                      src='https://www.linkpicture.com/q/icon-edit.svg'
                      alt=''
                    />
                  ) : (
                    false
                  )}
                  {item.id === 5 ? (
                    <p onClick={() => editHandler(item.commitId)}>Edit</p>
                  ) : (
                    false
                  )}
                </div>
              </div>
              <div className='message'>
                <p>{item.message}</p>
              </div>
            </div>
          </div>
          {item.recomments && <Recommed item={item} />}
        </div>
      ))}
      <div className='enterMessage'>
        <div className='profileImage'>
          <img
            src='https://www.linkpicture.com/q/image-juliusomo_1.png'
            alt=''
          />
        </div>
        <div className='input-container'>
          <textarea
            name=''
            id=''
            cols='2'
            rows='5'
            placeholder='Add a comment..'
            onChange={changeHandler}
            value={commit}
          ></textarea>
        </div>
        <div className='buttons'>
          <button onClick={commitHandler}>SEND</button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
