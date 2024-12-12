import Styles from "./style.module.scss";
import { AssetIcons, CCA, ComGov, DecentIcon, IntDataEx, RightAngle, SmartIcon } from "../../assets/icons";
import { Button } from "@mui/material";
import { useRef } from "react";
import { backArrow, moveArrow } from "../../functions/animate";
import { NavBarProps } from "../../data";

const HomeSection = (props: NavBarProps) => {

  const getAngle = useRef(null);
  
  const animArrow = () => {
    moveArrow(getAngle.current);
  }

  const pullArrow = () => {
    backArrow(getAngle.current);
  }

  return (
    <>
      <header className={Styles.contHome} ref={props.ScrollHome}>
      <h1>Build the Future with Web</h1>
      <p>
      Discover how we can help you connect with the next generation of the internet.
      </p>
      <div className={Styles.navigate}>
          {/* SignUp */}
          <div>
          <Button 
          sx={{
          textTransform:"capitalize",
          color:"#11111C",
          fontSize: "15px",
          padding: "0.3em 1.5em",
          background: "#96EA63",
          borderRadius: "10px",
          letterSpacing: "1px",
          "&:hover":{
            background: "#96EA63"
          }
        }}
        aria-label="Sign-Up"
        className={Styles.navButtn}
        endIcon={<div ref={getAngle}>
          <RightAngle />
        </div>}
        onMouseOver= {animArrow}
        onMouseLeave={pullArrow}
        >
          sign up
        </Button>
          </div>
          {/* ContactSales */}
          <div>
          <Button 
          sx={{
          textTransform:"capitalize",
          color:"#11111C",
          fontSize: "15px",
          padding: "0.5em 2em",
          background: "#fff",
          borderRadius: "10px",
          border:"1px solid #07070A",
          letterSpacing: "1px",
          "&:hover":{
            background: "#96EA63",
            borderColor:"#96EA63"
          }
        }}
        aria-label="Sign-Up"
        className={Styles.navButtn2}
        >
          contact sales
        </Button>
          </div>
      </div>
    </header>
    <section className={Styles.buildFeatures}>
        <div>
          <div className={Styles.buildFeatures2}>
          <div>
              <CCA />
            </div>
            <div>
              <div>Cross-Chain Access</div>
              <p>Seamlessly interact with diverse blockchain networks.</p>
            </div>
          </div>
          <div className={Styles.buildFeatures2}>
            {/* icon */}
            <div>
              <ComGov />
            </div>
            <div>
              <div>Community Governance</div>
              <p>Participate in decentralized decision-making through voting.</p>
            </div>
          </div>
        </div>
        <div>
          <div className={Styles.buildFeatures2}>
            {/* icon */}
            <div>
              <DecentIcon />
            </div>
            <div>
              <div>Decentralized Identity</div>
              <p>Securely manage your digital identity across applications.</p>
            </div>
          </div>
          <div className={Styles.buildFeatures2}>
            {/* icon */}
            <div>
              <AssetIcons />
            </div>
            <div>
              <div>Asset Tokenization</div>
              <p>Digitally tokenize real-world assets for efficient management.</p>
            </div>
          </div>
        </div>
        <div>
          <div className={Styles.buildFeatures2}>
            {/* icon */}
            <div>
              <SmartIcon />
            </div>
            <div>
              <div>Smart Contract Automation</div>
              <p>Streamline operations with automated smart contracts.</p>
            </div>
          </div>
          <div className={Styles.buildFeatures2}>
            {/* icon */}
            <div>
              <IntDataEx />
            </div>
            <div>
              <div>Interoperable Data Exchange</div>
              <p>Exchange data seamlessly between applications for collaboration.</p>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default HomeSection;