/* eslint-disable react/prop-types */
import { useState } from "react";
import BasicModal from "../../../Resources/BasicModal/BasicModal";
import { Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function Editjob({ item, index, popup, setPupup }) {
  const handleOpen = () => setPupup(true);
  const handleClose = () => setPupup(false);

  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [requirement, setRequirement] = useState("");
  const [description, setDescription] = useState("");

  const refreshPage = () => {
    window.location.reload();
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const details = {
      title: title || item.title,
      salary: salary || item.salary,
      location: location || item.location,
      requirement: requirement || item.requirement,
      description: description || item.description,
    };

    let registerId = await fetch(
      `https://jobbackend-pi.vercel.app/updatejob/${item._id}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        dataType: "json",
        method: "PATCH",
        body: JSON.stringify(details),
      }
    );

    if (registerId.ok) {
      // alert("Successfully Update");
      refreshPage();
    }
  };

  return (
    <div key={index} className="hidden">
      <BasicModal
        open={popup}
        handleOpen={handleOpen}
        handleClose={handleClose}
        text="Upgrade Job Details"
      >
        <form onSubmit={(e) => submitHandler(e)}>
          <input
            defaultValue={item.title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 focus:outline-none text-[14px] bg-transparent border rounded-[4px] placeholder:text-[12px] border-slate-700 my-2"
            placeholder="Enter Job title"
            required
          />
          <input
            type="text"
            defaultValue={item.salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full px-3 py-2 focus:outline-none text-[14px] bg-transparent border rounded-[4px] placeholder:text-[12px] border-slate-700 my-2"
            placeholder="Enter Job salary"
            required
          />
          <input
            type="text"
            defaultValue={item.location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 focus:outline-none text-[14px] bg-transparent border rounded-[4px] placeholder:text-[12px] border-slate-700 my-2"
            placeholder="Enter Job location"
            required
          />
          <textarea
            type="text"
            defaultValue={item.requirement}
            onChange={(e) => setRequirement(e.target.value)}
            className="w-full px-3 py-2 focus:outline-none text-[14px] bg-transparent border rounded-[4px] placeholder:text-[12px] border-slate-700 my-2"
            placeholder="Enter Job requirement"
            required
          />
          <textarea
            type="text"
            defaultValue={item.description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 focus:outline-none text-[14px] bg-transparent border rounded-[4px] placeholder:text-[12px] border-slate-700 my-2"
            placeholder="Enter Job description"
            required
          />
          <div className="flex items-center justify-center mt-5">
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </div>
        </form>
      </BasicModal>
    </div>
  );
}
