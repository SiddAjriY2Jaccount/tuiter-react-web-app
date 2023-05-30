import React from "react";
import TuitSummaryItem from "../tuit-summary-list/tuit-summary-item";
import TuitSummaryList from "../tuit-summary-list/index";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./index.css";

function ExploreScreen() {
  return (
    <div>
      <div className="row">
        <div className="col-11 position-relative">
          <input
            placeholder="Search Tuiter"
            className="form-control rounded-pill ps-5"
          />
          <AiOutlineSearch
            className="fs-3 position-absolute
wd-nudge-up"
          />
        </div>
        <div className="col-1">
          <GoGear
            className="wd-top-4 float-end
fs-3 position-relative"
          />
        </div>
      </div>
      <ul className="nav nav-pills mb-2 mt-2">
        <li className="nav-item">
          <a className="nav-link active">For You</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Trending</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">News</a>
        </li>
      </ul>
      <div className="position-relative mb-2">
        <img src={require("./starship.jpg")} className="w-100" />
        <h1 className="position-absolute wd-nudge-up text-white">
          SpaceX Starship
        </h1>
      </div>
      <TuitSummaryList />
      {/* <TuitSummaryItem
        tuit={{
          topic: "Space",
          userName: "SpaceX",
          title:
            "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
          time: "2h",
          image: "tesla.png",
        }}
      />
      <TuitSummaryItem
        tuit={{
          topic: "Space",
          userName: "SpaceX",
          title:
            "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
          time: "2h",
          image: "spacex.png",
        }}
      />
      <TuitSummaryItem
        tuit={{
          topic: "Energy",
          userName: "Tesla",
          title:
            "Tesla FSD finally makes driving obsolete. After years of delay, Tesla Full Self Driving can drive you to work while you work, play, or sleep",
          time: "4d",
          image: "tesla.png",
        }}
      /> */}
    </div>
  );
}
export default ExploreScreen;
