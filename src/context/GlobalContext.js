import { createContext, useReducer, useState } from "react";

export const GlobalContext = createContext();
const initialState = [
  {
    name: "amyrobson",
    messageTime: "1 Month Ago",
    message:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    like: 0,
    profilePicture: "https://www.linkpicture.com/q/image-amyrobson.png",
    commitId: 1,
    recomments: [],
  },
  {
    name: "maxblagun",
    messageTime: "2 weeks ago",
    message:
      "Woah, your projects looks awesome! how long have you been coding for? I'm stilll new, but think I want to dive react as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    like: 0,
    profilePicture: "https://www.linkpicture.com/q/image-maxblagun.png",
    commitId: 2,
    recomments: [
      {
        recommedName: "ramsesmiron",
        recommedTime: "1 week ago",
        recommedMessage:
          "If you're still new. I'd recommend focusing on the fundementals of HTML,Css, and JS before considering React. It's very tempting of jump ahead but lay a solid foundation first.",
        recommedLikes: 4,
        recommedPerson: "",
        image: "https://www.linkpicture.com/q/image-ramsesmiron.png",
        commitId: 2,
        like: 0,
      },
      {
        recommedName: "ramsesmiron",
        recommedTime: "1 week ago",
        recommedMessage:
          "If you're still new. I'd recommend focusing on the fundementals of HTML,Css, and JS before considering React. It's very tempting of jump ahead but lay a solid foundation first.",
        recommedLikes: 4,
        recommedPerson: "",
        image: "https://www.linkpicture.com/q/image-ramsesmiron.png",
        commitId: 2,
        like: 0,
      },
    ],
  },
];

const Reducer = (prevState, action) => {
  if (action.type === "addCommit") {
    return [
      ...prevState,
      {
        name: "hacikaplan",
        messageTime: "Today",
        message: action.value,
        like: 0,
        profilePicture: "https://www.linkpicture.com/q/image-juliusomo_1.png",
        id: 5,
        commitId: Date.now(),
      },
    ];
  } else if (action.type === "delete") {
    prevState = action.state;
    return [...prevState];
  } else if (action.type === "edit") {
    return prevState.map((item) =>
      item.commitId === action.id ? { ...item, message: action.value } : item
    );
  } else if (action.type === "recomment") {
    return prevState.map((item) =>
      item.commitId === action.id
        ? {
            ...item,
            recomments: [
              ...item.recomments,
              {
                recommedName: "hacikaplan",
                recommedTime: "Today",
                recommedMessage: action.value,
                recommedLikes: 0,
                recommedPerson: "",
                image: "https://www.linkpicture.com/q/image-juliusomo_1.png",
                id: 2,
                like: 5,
              },
            ],
          }
        : item
    );
  } else if (action.type === "upLike") {
    return prevState.map((item) =>
      item.commitId === action.id ? { ...item, like: action.value + 1 } : item
    );
  } else if (action.type === "downLike") {
    return prevState.map((item) =>
      item.commitId === action.id ? { ...item, like: action.value - 1 } : item
    );
  }
};
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [isShow, setIsShow] = useState(false);
  const [id, setId] = useState(false);
  return (
    <GlobalContext.Provider
      value={{ state, dispatch, isShow, setIsShow, id, setId }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
