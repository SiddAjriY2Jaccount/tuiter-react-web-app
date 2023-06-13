import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown as hollowDislike } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown as solidDislike } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ({
  tuit = {
    _id: 234,
    topic: "Space",
    userName: "SpaceX",
    title:
      "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    time: "2h",
    image: "spacex.png",
    liked: true,
    disliked: false,
    replies: 123,
    retuits: 432,
    likes: 2345,
    dislikes: 35,
    handle: "@spacex",
    tuit: "You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about. It's about believing in the future and thinking that the future will be better than the past. And I can't think of anything more exciting than going out there and being among the stars",
  },
}) => {
  const [likes, setLikes] = useState(tuit.likes);
  const [liked, setLiked] = useState(tuit.liked);

  const [dislikes, setdislikes] = useState(tuit.dislikes);
  const [disliked, setdisliked] = useState(tuit.disliked);
  const dipatch = useDispatch();

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes((setLikes) => (setLikes -= 1));
      dipatch(
        updateTuitThunk({ ...tuit, likes: tuit.likes - 1, liked: false })
      );
    } else {
      setLiked(true);
      setLikes((setLikes) => (setLikes += 1));
      dipatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true }));
    }
  };

  const toggleDislike = () => {
    if (disliked) {
      setdisliked(false);
      setdislikes((dislikes) => (dislikes -= 1));
      dipatch(
        updateTuitThunk({
          ...tuit,
          dislikes: tuit.dislikes - 1,
          disliked: false,
        })
      );
    } else {
      setdisliked(true);
      setdislikes((dislikes) => (dislikes += 1));
      dipatch(
        updateTuitThunk({
          ...tuit,
          dislikes: tuit.dislikes + 1,
          disliked: true,
        })
      );
    }
  };

  return (
    <div className="row">
      <div className="col">
        <i class="bi bi-chat mx-2" style={{ color: "blue" }}></i>
        {tuit.replies}
      </div>
      <div className="col">
        <FontAwesomeIcon className="mx-2" icon={faRetweet} />
        {tuit.retuits}
      </div>
      <div className="col">
        <button
          onClick={() => toggleLike()}
          style={{ background: "none", border: "none" }}
        >
          {liked ? (
            <i class="bi bi-heart-fill mx-2" style={{ color: "red" }}></i>
          ) : (
            <FontAwesomeIcon className="mx-2" icon={faHeart} />
          )}
        </button>
        {likes}
      </div>
      <div className="col">
        <button
          onClick={() => toggleDislike()}
          style={{ background: "none", border: "none" }}
        >
          {disliked ? (
            <FontAwesomeIcon className="mx-2" icon={solidDislike} />
          ) : (
            <FontAwesomeIcon className="mx-2" icon={hollowDislike} />
          )}
        </button>
        {dislikes}
      </div>
      <div className="col">
        <i class="bi bi-upload"></i>
      </div>
    </div>
  );
};

export default TuitStats;
