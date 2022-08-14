import { useState, useEffect, useContext } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import { Avatar } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "./InputOption";
import { PostinputFieldpop } from "../PopUps/popupexport";
import Post from "./Post";
import { UiContext } from "../DistributableContext";
// import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

const Feed = () => {
  const { user } = useSelector(selectUser);
  const [input, setInput] = useState("");
  const { showpostinput, setshowpostinput } = useContext(UiContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);

  const sendPost = (e) => {
    e.preventDefault();

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="avatar_feed">
          <Avatar />
          <div className="feed__input">
            <CreateIcon />
            <form>
              <input
                onClick={() => setshowpostinput((prev) => !prev)}
                type="text"
                value={input}
                placeholder="Start a post"
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
          </div>
          {showpostinput ? <PostinputFieldpop /> : null}
        </div>

        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
          <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
          <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
          <InputOption
            title="Write article"
            Icon={CalendarViewDayIcon}
            color="#7FC15E"
          />
        </div>
      </div>

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
