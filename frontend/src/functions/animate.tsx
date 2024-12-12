import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

export const moveArrow = (elem: any) => {
    gsap.to(elem, {
        x: "8px",
        duration:"0.6",
        ease:"expo.inOut"
    })
}

export const backArrow = (elem: any) => {
    gsap.to(elem, {
        x: "0px",
        duration:"0.6",
        ease:"expo.inOut"
    })
}

export const HomeToScroll = (elem: any) => {
    gsap.to(window, {duration: 2, scrollTo: elem});
}

export const PriceToScroll = (elem: any) => {
    gsap.to(window, {duration: 2, scrollTo: elem});
}

export const FeatureToScroll = (elem: any) => {
    gsap.to(window, {duration: 2, scrollTo: elem});
}

export const ContactToScroll = (elem: any) => {
    gsap.to(window, {duration: 2, scrollTo: elem});
}