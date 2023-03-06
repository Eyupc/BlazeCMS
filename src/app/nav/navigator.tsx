import Link from "next/link";
import {
  HTMLAttributes,
  HtmlHTMLAttributes,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

function Navigator() {
  const [showSub, setShowSub] = useState("n");
  const [showCommunity, setShowCommunity] = useState("n");

  return (
    <>
      <nav>
        <div className="content">
          <ul className="nav">
            <li className="home">
              <Link href={"/home"} />
              <div className="name">Home</div>
            </li>
            <li
              className="community"
              onMouseEnter={(e) => {
                setShowSub("y");
                setShowCommunity("y");
              }}
              onMouseLeave={(e) => {
                setShowSub("n");
                setShowCommunity("n");
              }}
              menuname="communityMenu"
            >
              <div className="name">Community</div>
            </li>
            <li className="community" menuname="test">
              <div className="name">Yardım</div>
            </li>
          </ul>
        </div>
      </nav>

      <div id="subnav" active={showSub}>
        <div
          className="subItem communityMenu"
          onMouseOver={() => setShowSub("y")}
          onMouseLeave={() => setShowSub("n")}
          id="communityMenu"
          active={showCommunity}
        >
          <div className="submenu-main">
            <a href="staff.php" className="submenu-href">
              <div className="submenu-box">
                <div
                  className="submenu-ico"
                  style={{
                    backgroundImage: "url(/assets/images/staff.gif?0);",
                  }}
                ></div>
                <div className="submenu-info">
                  <div className="submenu-name">Blaze Staff</div>
                  <div className="submenu-description">Blaze Personelleri</div>
                </div>
              </div>
            </a>
            <a href="citymap.php" className="submenu-href">
              <div className="submenu-box">
                <div
                  className="submenu-ico"
                  style={{ backgroundImage: "url(/assets/images/map.gif?0);" }}
                ></div>
                <div className="submenu-info">
                  <div className="submenu-name">City Map</div>
                  <div className="submenu-description">
                    Check out the detailed map of the city
                  </div>
                </div>
              </div>
            </a>
            <a href="leaderboards.php" className="submenu-href">
              <div className="submenu-box">
                <div
                  className="submenu-ico"
                  style={{
                    backgroundImage: "url(/assets/images/leader.gif?00);",
                  }}
                ></div>
                <div className="submenu-info">
                  <div className="submenu-name">Leaderboards</div>
                  <div className="submenu-description">
                    Check the leaderboard list
                  </div>
                </div>
              </div>
            </a>
            <a href="civilians-online.php" className="submenu-href">
              <div className="submenu-box">
                <div
                  className="submenu-ico"
                  style={{ backgroundImage: "url(/assets/images/user.gif?0);" }}
                ></div>
                <div className="submenu-info">
                  <div className="submenu-name">Civilians Online</div>
                  <div className="submenu-description">Active users list</div>
                </div>
              </div>
            </a>
          </div>
          <div className="submenu-main"></div>
        </div>
      </div>
    </>
  );
}
export default memo(Navigator);
