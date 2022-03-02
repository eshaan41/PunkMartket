import { useState, useEffect } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";

const Main = ({ punkListData, selectedPunk }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
    // console.log(selectedPunk, 'haha')
    // console.log(activePunk)
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img className="selectedPunk" src={activePunk.image_url} alt="" />
          </div>
        </div>

        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">
            {activePunk.name}
            <span className="itemNumber">*{activePunk.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activePunk.owner.profile_img_url} alt="" />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>{activePunk.owner.address}</div>
                <div className="ownerHandle">@SLRTDC</div>
              </div>
              <a
                className="ownerLink"
                href="https://www.instagram.com/technova_slrtdc/"
              >
                <img src={instagramLogo} alt="" />
              </a>
              <a className="ownerLink" href="https://twitter.com/home">
                <img src={twitterLogo} alt="" />
              </a>
              <a className="ownerLink" href="https://slrtdc.in/">
                <img src={moreIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
