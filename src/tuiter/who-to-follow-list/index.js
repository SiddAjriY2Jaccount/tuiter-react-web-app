import WhoToFollowListItem from "./who-to-follow-list-item";
import { useSelector } from "react-redux";

const WhoToFollow = () => {
  const whos = useSelector((state) => state.who);
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">
          <h3>Who to follow</h3>
        </li>
        {whos.map((who) => {
          return <WhoToFollowListItem key={who._id} who={who} />;
        })}
      </ul>
    </>
  );
};

export default WhoToFollow;
