/* eslint-disable react/prop-types */

import { useState } from "react";
import BasicModal from "../../../Resources/BasicModal/BasicModal";

// eslint-disable-next-line react/prop-types
export default function Editjob({ item, index }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(item);

  return (
    <div key={index} className="hidden">
      <BasicModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        text="Add JoB"
      ></BasicModal>
    </div>
  );
}
