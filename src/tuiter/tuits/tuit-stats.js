import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faRetweet } from "@fortawesome/free-solid-svg-icons";

const TuitStats = (
    { 
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "time": "2h",
            "image": "spaceX.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about. It's about believing in the future and thinking that the future will be better than the past. And I can't think of anything more exciting than going out there and being among the stars"
          }
    }
) => {

    const [likes, setLikes] = useState(tuit.likes);
    const [liked, setLiked] = useState(tuit.liked)

    const toggleLike = () => {
        if (liked){
            setLiked(false);
            setLikes((setLikes) => setLikes -= 1)
        }else{
            setLiked(true);
            setLikes((setLikes) => setLikes += 1)
        }
    }

    return (

        <div className="row">
        <div className="col">
            <i class="bi bi-chat mx-2" style={{ color: 'blue' }}></i>
            {tuit.replies}
        </div>
        <div className="col">
            <FontAwesomeIcon className="mx-2" icon={faRetweet} />
            {tuit.retuits}
        </div>
        <div className="col">
            <button onClick={() => toggleLike()} style={{ background: 'none', border: 'none' }} >
                {
                    liked? <i class="bi bi-heart-fill mx-2" style={{ color: 'red' }}></i>
                    : <FontAwesomeIcon className="mx-2" icon={faHeart} />
                }
            </button>
            {likes}
        </div>
        <div className="col">
            <i class="bi bi-upload"></i>
        </div>
    </div>
    )
}

export default TuitStats