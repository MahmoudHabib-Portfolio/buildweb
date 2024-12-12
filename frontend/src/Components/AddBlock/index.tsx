import { PointArrow } from "../../assets/icons";
import Styles from "./style.module.scss";
import { Button } from "@mui/material";

const AddBlock = () => {


  return (
    <div className={Styles.AddBlock}>
        <div>
          {/* Add_Title */}
          <div className={Styles.addCont}>
              {/* title */}
              <div>
                <h1>Unlock the Power of Web3 Today!</h1>
              </div>
              <div>
                <div>Join us on the journey to the decentralized future.</div>
              </div>
          </div>
          {/* Get_Started */}
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
        endIcon={<div>
          <PointArrow />
        </div>}
        >
          Get Started
        </Button>
          </div>
        </div>
    </div>
  )
}

export default AddBlock;