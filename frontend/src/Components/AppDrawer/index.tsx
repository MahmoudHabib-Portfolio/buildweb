import Styles from "./style.module.scss";
import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { hideDrawer } from "../../ReduxStore/DrawerSlice";
import { IoCloseSharp } from "react-icons/io5";
import { IconButton } from "@mui/material";

const AppDrawer = () => {

  const open = useSelector((state: any) => state.Open.open);
  const dispatch = useDispatch();

  const DrawerHeader = () => {
    return(
      <div className={Styles.closeBlock}>
        <div></div>
          <div>
              <IconButton
              disableRipple={true}
              onClick={() => dispatch(hideDrawer())}>
                <IoCloseSharp />
              </IconButton>
          </div>
      </div>
    )
  }

  return (
    <Drawer
        title={<DrawerHeader />}
        placement={"left"}
        closable={false}
        open={open}
        key={"left"}
      >
        <div className={Styles.mobileMenu}>
          <ul>
            <li>
              {"Home"}
            </li>
            <li>
              {"Pricing"}
            </li>
            <li>
             {"Features"}
            </li>
            <li>
              {"Contact"}
            </li>
          </ul>
        </div>
      </Drawer>
  )
}

export default AppDrawer;