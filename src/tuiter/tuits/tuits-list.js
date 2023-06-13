import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TuitItem from "./tuit-item";
import { findTuitsThunk } from "../services/tuits-thunks";

const TuitsList = () => {
  const { tuits, loading } = useSelector((state) => state.fullTuits);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Component rendered");

    dispatch(findTuitsThunk());
    return () => {
      console.log("Component unmounted");
    };
  }, []);
  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {tuits && tuits.map((tuit) => <TuitItem key={tuit._id} tuit={tuit} />)}
    </ul>
  );
};
export default TuitsList;
