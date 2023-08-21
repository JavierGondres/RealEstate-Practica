import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
function BotonComponent(props) {
  function getIcon(item) {
    switch (item) {
      case "mdcall":
        return <MdCall size={25}></MdCall>;
        break;
      case "bs":
        return <BsFillChatDotsFill size={25}></BsFillChatDotsFill>;
        break;
      case "hi":
        return <HiChatBubbleBottomCenter size={25}></HiChatBubbleBottomCenter>;
        break;

      default:
        console.log("oooo");
        break;
    }
  }
  return (
    <div className="flexColCenter mode">
      <div className="flexStart">
        <div className="flexCenter icon">{getIcon(props.icon)}</div>
        <div className="flexColStart detail">
          <span className="primaryText">{props.name}</span>
          <span className="secondaryText">021 123 145 14</span>
        </div>
      </div>
      <div className="flexCenter button">{props.nameb}</div>
    </div>
  );
}

export default BotonComponent;
