import Styles from "./style.module.scss";
import { Facebook, GreenPoint, Instagram, LinkedIn, Logo, Twitter, YouTube } from "../../assets/icons";
import { Button } from "@mui/material";


const Footer = () => {
  return (
    <footer className={Styles.footBlock}>
      <div>
        <div>
            <Logo />
        </div>
        {/* Footer_Links */}
        <div className={Styles.footLinks}>
          <ul>
            <li>
              {"Solutions"}
            </li>
            <li>
              {"Pricing"}
            </li>
            <li>
              {"Get Started"}
            </li>
            <li>
              {"Use Cases"}
            </li>
            <li>
              {"Documentation"}
            </li>
          </ul>
        </div>
      </div>
      <div>
        {/* copyRight */}
        <div>
        VETRIC - 2024
        </div>
        {/* footButton */}
        <div>
          <Button
          sx={{
            textTransform:"capitalize",
            background: "#fff",
            padding: "0.2em 1.2em",
            border: "1.3px solid #212333",
            borderRadius: "20px",
            letterSpacing: "1px",
            color: "#212333",
            "&:hover":{
              background: "#fff"
            },
            '& .MuiTouchRipple-root':{
              color: "#96EA63"
            }
          }}
          aria-label="OperatingSystem"
          >
            <div>
              <GreenPoint />
            </div>
            &nbsp;
            <div>
            operating system
            </div>
          </Button>
        </div>
        {/* solution_Links */}
        <div>
          {/* Instagram */}
        <div>
            <Instagram />
        </div>
        {/* facebook */}
        <div>
            <Facebook />
        </div>
        {/* Youtube */}
        <div>
            <YouTube />
        </div>
        {/* LinkedIn */}
        <div>
          <LinkedIn />
        </div>
        {/* Twitter */}
        <div>
            <Twitter />
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;