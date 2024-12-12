import Styles from "./style.module.scss";
import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import { BoldedRightAngle, CheckMark } from "../../assets/icons";
import { backArrow, moveArrow } from "../../functions/animate";
import { NavBarProps } from "../../data";
import { styled, ToggleButton, ToggleButtonGroup } from '@mui/material';

const Container = styled('div')({
  position: 'relative',
  display: 'inline-block',
  width: '275px', // Set the width of the toggle
  background: "#07070A",
  borderRadius: "25px",
  border: '3px solid #000'
});

const AnimatedToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
  display: 'flex',
  borderRadius: '25px',
  overflow: 'hidden',
  position: 'relative'
}));

const AnimatedToggleButton = styled(ToggleButton)(() => ({
  flex: 1,
  transition: 'background-color 0.8s ease',
  borderRadius: '25px',
  textTransform: 'capitalize',
  letterSpacing: "1px",
  fontWeight: "bold",
  padding: "0.5em",
  fontSize:"14px",
  '&.Mui-selected': {
    color: "#000",
    borderRadius: "20px",
    backgroundColor: "#fff"
  },
  '&:not(.Mui-selected)': {
    color: "#fff",
  },
  '&.MuiToggleButton-root':{
    border: '0px'
  }
}));

interface IndicatorProps {
  position: string;
}

const Indicator = styled('div')<IndicatorProps>(({ position }) => ({
  position: 'absolute',
  top: 0,
  left: position === 'Monthly' ? '0' : '50%',
  width: '50%', // Adjust based on the number of options
  height: '100%',
  backgroundColor: "#fff",
  transition: 'left 0.4s ease',
  borderRadius: '25px'
}));

const Pricing = (props: NavBarProps) => {

  const [priceValue, setValue] = useState<string>('Yearly •20% off');

  const handleChange = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
    if (newValue !== null) {
      setValue(newValue);
      event;
    }
  };

  const firstBoldAngle = useRef(null);
  const centBoldAngle = useRef(null);
  const lastBoldAngle = useRef(null);

  const firstForwardAngle = () => {
      moveArrow(firstBoldAngle.current);
  }

  const firstBackwardAngle = () => {
      backArrow(firstBoldAngle.current);
  }

  const centForwardAngle = () => {
    moveArrow(centBoldAngle.current);
  }

  const centBackwardAngle = () => {
    backArrow(centBoldAngle.current);
  }

  const lastForwardAngle = () => {
    moveArrow(lastBoldAngle.current);
  }

  const lastBackwardAngle = () => {
    backArrow(lastBoldAngle.current);
  }

  return (
    <div className={Styles.pricCont} ref={props.ScrollPrice}>
        <div>
            <h1>Pricing</h1>
        </div>
        <div>
            <div>Explore our pricing plans tailored to fit your needs.</div>
            <div className={Styles.priceSwitch}>
                {/* Segmented */}
                <Container>
                  <Indicator position={priceValue} />
                  <AnimatedToggleButtonGroup
                    value={priceValue}
                    exclusive
                    onChange={handleChange}
                    aria-label="text alignment"
                  >
                    <AnimatedToggleButton disableRipple={true} value="Monthly" aria-label="left aligned">
                      {"Monthly"}
                    </AnimatedToggleButton>
                    <AnimatedToggleButton disableRipple={true} value="Yearly •20% off" aria-label="right aligned">
                      {"Yearly •20% off"}
                    </AnimatedToggleButton>
                  </AnimatedToggleButtonGroup>
                </Container>
            </div>
        </div>
        {/* Plans */}
        <div className={Styles.plansCont}>
          {/* Basic_Plan */}
          <div>
              <div>Basic</div>
              <div><div>${(priceValue === "Yearly •20% off") ? ("9.99") : ("0.99")}</div>&nbsp;/{(priceValue === "Yearly •20% off") ? ("Year") : ("monthly")}</div>
              <div>Essential features for beginners.</div>
              <div>
              <Button
                fullWidth 
                sx={{
                textTransform:"capitalize",
                color:"#11111C",
                fontSize: "14px",
                padding: "0.4em 1em",
                background: "#fff",
                borderRadius: "10px",
                letterSpacing: "1px",
                border: "1px solid #A6A7AD",
                "&:hover":{
                  background: "#96EA63"
                }
              }}
              aria-label="Sign-Up"
              className={Styles.navButtn}
              endIcon={<div ref={firstBoldAngle}>
                <BoldedRightAngle />
              </div>}
              onMouseOver={firstForwardAngle}
              onMouseLeave={firstBackwardAngle}
              >
                Get Started with Basic
              </Button>
              </div>
              {/* Basic_Plan_Options */}
              <div>
                <div>
                  <div>
                    <CheckMark />
                  </div>
                  <div>
                  Basic Platform Access
                  </div>
                </div>
                {/* Block_Option */}
                <div>
                  <div>
                    <CheckMark />
                  </div>
                  <div>
                  Email Support
                  </div>
                </div>
                {/* Block_Option */}
                <div>
                  <div>
                    <CheckMark />
                  </div>
                  <div>
                  Limited Data Storage
                  </div>
                </div>
              </div>
          </div>
          {/* Pro_Plan */}
          <div>
              <div>Pro</div>
              <div><div>${(priceValue === "Yearly •20% off") ? ("19.99") : ("9.99")}</div>&nbsp;/{(priceValue === "Yearly •20% off") ? ("Year") : ("monthly")}</div>
              <div>Advanced tools for growth.</div>
              <div>
              <Button
                fullWidth 
                sx={{
                textTransform:"capitalize",
                color:"#11111C",
                fontSize: "14px",
                padding: "0.4em 1em",
                background: "#fff",
                borderRadius: "10px",
                letterSpacing: "1px",
                border: "1px solid #A6A7AD",
                "&:hover":{
                  background: "#96EA63"
                }
              }}
              aria-label="Sign-Up"
              className={Styles.navButtn}
              endIcon={<div ref={centBoldAngle}>
                <BoldedRightAngle />
              </div>}
              onMouseOver={centForwardAngle}
              onMouseLeave={centBackwardAngle}
              >
                Get Started with Pro
              </Button>
              </div>
              {/* Basic_Plan_Options */}
              <div>
                <div>
                  <div>
                    <CheckMark />
                  </div>
                  <div>
                  Full Platform Access
                  </div>
                </div>
                {/* Block_Option */}
                <div>
                  <div>
                    <CheckMark />
                  </div>
                  <div>
                  Email and Chat Support
                  </div>
                </div>
                {/* Block_Option */}
                <div>
                  <div>
                    <CheckMark />
                  </div>
                  <div>
                  Unlimited Data Storage
                  </div>
                </div>
              </div>
          </div>
          {/* Premium_Plan */}
          <div>
              <div>Premium</div>
              <div><div>${(priceValue === "Yearly •20% off") ? ("29.99") : ("19.99")}</div>&nbsp;/{(priceValue === "Yearly •20% off") ? ("Year") : ("monthly")}</div>
              <div>Top-tier support and customization.</div>
              <div>
              <Button
                fullWidth 
                sx={{
                textTransform:"capitalize",
                color:"#11111C",
                fontSize: "14px",
                padding: "0.4em 1em",
                background: "#fff",
                borderRadius: "10px",
                letterSpacing: "1px",
                border: "1px solid #A6A7AD",
                "&:hover":{
                  background: "#96EA63"
                }
              }}
              aria-label="Sign-Up"
              className={Styles.navButtn}
              endIcon={<div ref={lastBoldAngle}>
                <BoldedRightAngle />
              </div>}
              onMouseOver={lastForwardAngle}
              onMouseLeave={lastBackwardAngle}
              >
                Get Started with Premium
              </Button>
              </div>
              {/* Basic_Plan_Options */}
              <div>
                <div>
                  <div>
                    <CheckMark />
                  </div>
                  <div>
                  Advanced Platform Access
                  </div>
                </div>
                {/* Block_Option */}
                <div>
                  <div>
                    <CheckMark />
                  </div>
                  <div>
                  24/7 Support via Chat, and Phone
                  </div>
                </div>
                {/* Block_Option */}
                <div>
                  <div>
                    <CheckMark />
                  </div>
                  <div>
                  Customized Features
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Pricing;