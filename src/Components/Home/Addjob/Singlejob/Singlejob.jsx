import React from "react";
import BasicModal from "../../../Resources/BasicModal/BasicModal";
import { Button } from "@mui/material";

export default function Singlejob({ item, index, viewpopup, setViewpopup }) {
  const handleOpen = () => setViewpopup(true);
  const handleClose = () => setViewpopup(false);
  return (
    <div key={index} className="hidden">
      <BasicModal
        open={viewpopup}
        handleOpen={handleOpen}
        handleClose={handleClose}
        text={item.title}
      >
        <div>
          <div className="mt-2">
            <p className="font-bold text-[15px]">Requirements</p>
            <p className="text-[13px]">{item.requirement}</p>
          </div>
          <div className="mt-2">
            <p className="font-bold text-[15px]">Description</p>
            <p className="text-[13px]">{item.description}</p>
          </div>
          <div className="mt-2">
            <p className="font-bold text-[15px]">
              Office Location :{" "}
              <span className="text-[13px] font-normal">{item.location}</span>
            </p>
            <p className="font-bold text-[15px]">
              Salary :{" "}
              <span className="text-[13px] font-normal">{item.salary}</span>
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <Button variant="outlined">Apply</Button>
            </div>
          </div>
        </div>
      </BasicModal>
    </div>
  );
}
