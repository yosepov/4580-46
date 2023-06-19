import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import WifiIcon from "@mui/icons-material/Wifi";
import { InputText } from "../Form/Input/InputText";

const style = {
  position: "absolute" as "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Payment</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please Enter Payment Information
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="CC">
              <div className="bankTitle">
                <span className="bankTitle">BANK</span>
              </div>
              <div className="cardImgs">
                <div className="cardChip">
                  <img
                    src="https://usa.visa.com/dam/VCOM/regional/na/us/pay-with-visa/images/card-chip-800x450.png"
                    alt=""
                  />
                </div>
                <div className="cardWifi">
                  <WifiIcon />
                </div>
              </div>
              <div className="cardDetails">
                <div className="cardNum">
                  <span>1234 5678 9012 3456</span>
                </div>
                <div className="moreInfo">
                  <span>CARDHOLDER NAME</span>
                  <span>MM/YY</span>
                  <span>CVV</span>
                </div>
              </div>
            </div>
            <div className="userInfo">
              <InputText type="text" placeholder=""/>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
