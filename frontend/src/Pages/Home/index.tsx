import Styles from "./style.module.scss";
import { AddBlock, Brands, GetInTouch, HomeSection, Pricing, XploreFeature } from "../../Components";
import { NavBarProps } from "../../data";

const Home = (props: NavBarProps) => {
  return (
    <div className={Styles.mainCont}>
        <HomeSection ScrollHome={props.ScrollHome} ScrollPrice={props.ScrollPrice} ScrollFeature={props.ScrollFeature} ScrollContact={props.ScrollContact} />
        <Brands />
        <Pricing ScrollPrice={props.ScrollPrice} ScrollHome={props.ScrollHome} ScrollFeature={props.ScrollFeature} ScrollContact={props.ScrollContact} />
        <AddBlock />
        <XploreFeature ScrollHome={props.ScrollHome} ScrollPrice={props.ScrollPrice} ScrollFeature={props.ScrollFeature} ScrollContact={props.ScrollContact} />
        <GetInTouch ScrollHome={props.ScrollHome} ScrollPrice={props.ScrollPrice} ScrollFeature={props.ScrollFeature} ScrollContact={props.ScrollContact} />
    </div>
  )
}

export default Home;