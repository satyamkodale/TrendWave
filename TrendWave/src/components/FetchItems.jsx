import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import itemsSlice, { itemSliceAction } from "../store/itemSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";
const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  const dispatch = useDispatch();

  console.log(fetchStatus);

  useEffect(() => {
    console.log("use effect started");
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    //  console.log("fetching start");
    dispatch(fetchStatusAction.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(fetchStatusAction.markFetchingEnded());
        dispatch(itemSliceAction.addInitialItems(items[0]));
        console.log(items + "got items");
      });

    return () => {
      console.log("fetch aborted");
      controller.abort();
    };

    // console.log("fetch ended");
  }, []);

  return <></>;
};
//the work of fetch is only fetching items and showing loader
export default FetchItems;
