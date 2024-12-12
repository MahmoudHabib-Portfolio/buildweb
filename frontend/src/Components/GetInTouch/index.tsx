import { useState } from "react";
import Styles from "./style.module.scss";
import { Button, TextareaAutosize, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavBarProps } from "../../data";

/* Name_Field */
const NameField = styled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px"
    },
    '&:hover fieldset': {
      borderColor: '#fff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
      borderWidth: '0rem'
    }
  },
});

/* Email_Field */
const EmailField = styled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "8px"
    },
    '&:hover fieldset': {
      borderColor: '#fff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
      borderWidth: '0rem'
    }
  },
});

/* TextArea */
const Textarea = styled(TextareaAutosize)(
  () => `
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 8px;
  color: #0D0E14;
  background: #F4F4F5;
  
  &::placeholder {
    opacity: 1;
    color: #0D0E14; // Adjust the color if needed
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

const GetInTouch = (props: NavBarProps) => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const SubmitContact = (e:any) => {
  e.preventDefault();

  setName("");
  setEmail("");
  setMessage("");

}

  return (
    <div className={Styles.contactCont} ref={props.ScrollContact}>
        <div>
            <h2>Get in touch</h2>
            <div>Contact us for additional details or assistance.</div>
        </div>
        <div>
            <form onSubmit={SubmitContact}>
              <div className={Styles.contctForm}>
                <div>
                <label className={Styles.label}>{"Name"}</label>
                <NameField 
                  fullWidth
                  value={name}
                  sx={{
                      "& .MuiOutlinedInput-root":{
                      "& .MuiOutlinedInput-notchedOutline": {
                          borderWidth: "0rem",
                          borderStyle: "solid",
                          borderColor: '#fff',
                          borderRadius: "8px"
                      },
                      '&.Mui-focused fieldset': {
                          borderColor: "#fff"
                      },
                      }
                  }}
                  inputProps={{
                      sx: {
                      color: '#0D0E14',
                      fontSize: '14px',
                      backgroundColor:'#F4F4F5',
                      padding:'11px 12px',
                      borderRadius: "8px",
                      "&::placeholder":{
                          opacity: 1
                          }
                      },
                      }}
                      placeholder={"Name"}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      />
                </div>
                <div>
                  <label className={Styles.label}>{"E-mail"}</label>
                  <EmailField 
                  fullWidth
                  value={email}
                  sx={{
                      "& .MuiOutlinedInput-root":{
                      "& .MuiOutlinedInput-notchedOutline": {
                          borderWidth: "0rem",
                          borderStyle: "solid",
                          borderColor: '#fff'
                      },
                      '&.Mui-focused fieldset': {
                          borderColor: "#fff"
                      },
                      }
                  }}
                  inputProps={{
                      sx: {
                      color: '#0D0E14',
                      fontSize: '14px',
                      backgroundColor:'#F4F4F5',
                      padding:'11px 12px',
                      borderRadius: "8px",
                      "&::placeholder":{
                          opacity: 1
                          }
                      },
                      }}
                      placeholder={"E-mail"}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      />
                </div>
                <div>
                  <label className={Styles.label}>{"Message"}</label>
                  <Textarea
                        value={message} 
                        aria-label="minimum height" 
                        minRows={9} placeholder="Add your message" 
                        style={{resize: 'none', border:"none"}}
                        onChange={(e) => setMessage(e.target.value)}
                        />
                </div>
                <div>
                <Button
                fullWidth 
                sx={{
                  textTransform:"unset",
                  color:"#fff",
                  fontSize: "15px",
                  padding: "0.5em 2em",
                  background: "#0D0E14",
                  borderRadius: "10px",
                  "&:hover":{
                    background: "#0D0E14"
                  }
                }}
                aria-label="Submit"
                type="submit"
                >
                  Submit
                </Button>
                </div>
              </div>
            </form>
        </div>
    </div>
  )
}

export default GetInTouch;