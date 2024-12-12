import { Coding, blockChains } from "../../assets";
import { PowerAPI,
        DesignIcon, 
        CyberSecurity, 
        DecenttIcon, 
        HandIcon, 
        RevIcon, 
        Scalable, 
        Teams, 
        DecentralizedIcon,
        EnvelopIcon } from "../../assets/icons";
import Styles from "./style.module.scss";
import { Chip } from "@mui/material";
import { NavBarProps } from "../../data";

const XploreFeature = (props: NavBarProps) => {
  return (
    <div className={Styles.xploreCont} ref={props.ScrollFeature}>
        {/* xplore_Head */}
        <div className={Styles.xploreHead}>
            <h1>Explore Our Feature</h1>
            <div>Discover the powerful features that make our platform stand out</div>
        </div>
        {/* feature_Body */}
        <div className={Styles.featureBody}>
            {/* Ready to services */}
            <div>
                <div>Ready to go  services</div>
                <h5>Streamlining solutions for swift success</h5>
                {/* Services_Body */}
                <div className={Styles.microService}>
                    {/* row1 */}
                    <div className={Styles.microServiceCont}>
                        <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        icon={<PowerAPI />}
                        label={"Powerful APIs"}/>
                        </div>
                        <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        icon={<DesignIcon />}
                        label={"For Design"}/>
                        </div>
                        <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        icon={<CyberSecurity />}
                        label={"Cybersecurity"}/>
                        </div>
                        <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        icon={<DecenttIcon />}
                        label={"Decentralized"}/>
                        </div>
                    </div>
                    {/* row2 */}
                    <div className={Styles.microServiceCont}>
                    <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        icon={<HandIcon />}
                        label={"Colaborative teams"}/>
                        </div>
                        <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        icon={<CyberSecurity />}
                        label={"Safe Space"}/>
                        </div>
                        <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        icon={<RevIcon />}
                        label={"Revolution"}/>
                        </div>
                        <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        icon={<Scalable />}
                        label={"Scalable"}/>
                        </div>
                    </div>
                    {/* row3 */}
                    <div className={Styles.microServiceCont}>
                    <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        icon={<Teams />}
                        label={"For Teams"}/>
                        </div>
                        <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        icon={<DecentralizedIcon />}
                        label={"Decentralized"}/>
                        </div>
                        <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        icon={<CyberSecurity />}
                        label={"Cybersecurity"}/>
                        </div>
                        <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        icon={<PowerAPI />}
                        label={"Powerful APIs"}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* growDiv */}
            <div>
                <h4>For growing teams</h4>
                <h5>Tailored support to give you progress</h5>
                {/* Services_Body */}
                <div className={Styles.microService}>
                    {/* row1 */}
                    <div className={Styles.microServiceCont2}>
                    <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "35px",
                             padding: "24px 10px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        icon={<EnvelopIcon />}
                        label={"Invite user to this team"}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Feature_Sections */}
        <div className={Styles.featureSections}>
          {/* feature_block1 */}
          <div>
            <div>
               <h4>Powerful APIs for developers</h4>
               <h5>Seamless Integration for your company</h5>
            </div>
            <div>
               {/* img */}
               <img src={Coding} width={"294"} height={"205"} alt="coding" />
            </div>
          </div>
          {/* feature_block2 */}
          <div>
          <div>
               <h4>The best blockchains out there</h4>
               <h5>Pioneering paths in decentralized solutions</h5>
            </div>
            {/* img */}
            <div>
               <img src={blockChains} width={"300"} height={"224"} alt="blockChains" />
            </div>
          </div>
          {/* feature_block3 */}
          <div>
          <div>
               <h4>Web 3.0 development</h4>
               <h5>Crafting tomorrow's digital landscape today</h5>
            </div>
            {/* img */}
            <div className={Styles.microService}>
                    {/* row1 */}
                    <div className={Styles.microServiceCont}>
                        <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        label={"Web 3.0 development"}/>
                        </div>
                        <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        label={"Growth"}/>
                        </div>
                    </div>
                    {/* row2 */}
                    <div className={Styles.microServiceCont}>
                    <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}}
                        label={"APIs"}/>
                        </div>
                    <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        label={"Go-to-Market Solutions"}/>
                        </div>
                    </div>
                    {/* row3 */}
                    <div className={Styles.microServiceCont}>
                    <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        label={"Easy-to-use interface"}/>
                        </div>
                        <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        label={"Scalable"}/>
                        </div>
                    </div>
                    {/* row4 */}
                    <div className={Styles.microServiceCont}>
                    <div>
                        <Chip 
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        label={"Fast Integrations"}/>
                        </div>
                        <div>
                        <Chip
                        sx={{background: "#F4F4F5",
                             border: "0.770885px solid #7A7B85",
                             borderRadius: "8px",
                             padding: "8px 8px",
                             fontWeight:"bold",
                             letterSpacing:"1px",
                             fontSize:"12px"}} 
                        label={"Accessibility"}/>
                        </div>
                    </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default XploreFeature;