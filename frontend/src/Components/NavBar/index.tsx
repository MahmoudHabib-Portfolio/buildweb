import { NavBarProps } from "../../data";
import Styles from "./style.module.scss";
import { Logo } from "../../assets/icons";
import { FaBars } from "react-icons/fa";
import { Button, IconButton } from "@mui/material";
import { showDrawer } from "../../ReduxStore/DrawerSlice";
import { useDispatch } from "react-redux";
import { HomeToScroll, PriceToScroll, FeatureToScroll, ContactToScroll } from "../../functions/animate";

const NavBar = (props: NavBarProps) =>  {

  const dispatch = useDispatch();

  const ScrollToHome = () => {
    HomeToScroll(props.ScrollHome.current);
  }

  const ScrollToPrice = () => {
    PriceToScroll(props.ScrollPrice.current);
  }

  const ScrollToFeature = () => {
    FeatureToScroll(props.ScrollFeature.current);
  }

  const ScrollToContact = () => {
    ContactToScroll(props.ScrollContact.current);
  }

  return (
    <nav className={Styles.mNav}>
      <div>
          <Logo />
      </div>
      <div>
        <ul>
          <li onClick={ScrollToHome}>
              Home
          </li>
          <li onClick={ScrollToPrice}>
              Pricing
          </li>
          <li onClick={ScrollToFeature}>
              Features
          </li>
          <li onClick={ScrollToContact}>
              Contact
          </li>
        </ul>
      </div>
      <div className={Styles.navEnd}>
        <div>
        <Button sx={{
          textTransform:"unset",
          color:"#11111C",
          fontSize: "15px",
          padding: "0.5em 2em",
          background: "#96EA63",
          borderRadius: "10px",
          "&:hover":{
            background: "#96EA63"
          }
        }}
        aria-label="Sign-Up"
        className={Styles.navButtn}
        >
          Sign Up
        </Button>
        </div>
        <div className={Styles.navBar}>
        <IconButton
        disableRipple={true}
        onClick={() => dispatch(showDrawer())}
        aria-label="Navbar"
        >
        <FaBars style={{fontSize:"1em"}}/>
        </IconButton>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;