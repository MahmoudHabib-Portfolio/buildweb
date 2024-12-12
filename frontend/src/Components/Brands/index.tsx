import Styles from "./style.module.scss";
import { bannerFive, bannerFour, bannerOne, bannerSix, bannerThree, bannerTwo } from "../../assets";
import Marquee from "react-fast-marquee";

const Brands = () => {

    const brands = [
        {id: 0, img: bannerOne, imgAlt: "bannerOne"},
        {id: 1, img: bannerTwo, imgAlt: "bannerTwo"},
        {id: 2, img: bannerThree, imgAlt: "bannerThree"},
        {id: 3, img: bannerFour, imgAlt: "bannerFour"},
        {id: 4, img: bannerFive, imgAlt: "bannerFive"},
        {id: 5, img: bannerSix, imgAlt: "bannerSix"},
    ];

  return (
    <div className={Styles.brandCont}>
        <div>Trusted by the world leaders</div>
    <Marquee autoFill={true}>
    <div className={Styles.marqueeContainer}>
        {brands?.map((x) => (
            <div key={x.id} className={Styles.marqImg}>
                <img src={x.img} width={"200"} height={"41"} alt={x.imgAlt} />
            </div>
        ))}
    </div>
    </Marquee>
    </div>
  )
}

export default Brands;