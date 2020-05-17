import { useEffect } from "react";
import { useImmer } from "use-immer";
import axios from "axios";
import { useLocalStorage } from "./hooks/useLocalStorage";

const useAppHook = () => {
  const initialState = {
    feeds: [],
    page: 1,
  };

  const [state, setState] = useImmer(initialState);

  const [hnLocalStorage, setLocalStorage] = useLocalStorage("hn-clone", []);

  const moreClickHandler = () => {
    setState((draft) => {
      draft.page++;
    });
  };

  const upvoteToggler = (objectID) => {
    debugger;
    const currRecord =
      hnLocalStorage.find((record) => record.objectID === objectID) || {};
    setLocalStorage([
      ...hnLocalStorage.filter((record) => record.objectID !== objectID),
      {
        ...currRecord,
        objectID,
        upvoted: !currRecord.upvoted,
      },
    ]);
  };

  const hideHandler = (objectID) => {
    const currRecord =
      hnLocalStorage.find((record) => record.objectID === objectID) || {};
    setLocalStorage([
      ...hnLocalStorage.filter((record) => record.objectID !== objectID),
      {
        ...currRecord,
        objectID,
        hidden: true,
      },
    ]);
  };

  const isUpvoted = (objectID) => {
    const currRecord =
      hnLocalStorage.find((record) => record.objectID === objectID) || {};
    return !!currRecord.upvoted;
  };

  const isHidden = (objectID) => {
    const currRecord =
      hnLocalStorage.find((record) => record.objectID === objectID) || {};
    return !!currRecord.hidden;
  };

  useEffect(() => {
    const getFeed = async (page) => {
      try {
        const { data } = await axios.get(
          `https://hn.algolia.com/api/v1/search?page=${page}`
        );
        console.log("data", data);
        setState((draft) => {
          draft.feeds = data.hits.filter((feed) => feed.title);
        });
      } catch (e) {
        // TODO: sentient handle
        console.error(e);
      }
    };
    getFeed(state.page);
  }, [state.page, setState]);

  return {
    ...state,
    moreClickHandler,
    upvoteToggler,
    hideHandler,
    isUpvoted,
    isHidden,
  };
};

export default useAppHook;
