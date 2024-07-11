/* eslint-disable react/prop-types */

import { AiTwotoneDelete } from "react-icons/ai";
import BasicModal from "../../Resources/BasicModal/BasicModal";
import { useEffect, useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { Button } from "@mui/material";
import Editjob from "./Editjob/Editjob";
import Singlejob from "./Singlejob/Singlejob";

export default function Addjob({ data }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [category, setCategory] = useState(data.title);
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [requirement, setRequirement] = useState("");
  const [description, setDescription] = useState("");
  const [edit, setEdit] = useState(false);
  const [view, setView] = useState(false);

  const [popup, setPupup] = useState(false);
  const [viewpopup, setViewpopup] = useState(false);

  const [alljob, setAlljob] = useState([]);

  useEffect(() => {
    fetch(`https://jobbackend-pi.vercel.app/alljob/${data.title}`)
      .then((res) => res.json())
      .then((data) => setAlljob(data));
  }, [data.title]);

  const refreshPage = () => {
    window.location.reload();
  };

  const handleDelete = async (_id) => {
    const proceed = window.confirm("Are you sure to delete this?");
    try {
      if (proceed) {
        const response = await fetch(
          `https://jobbackend-pi.vercel.app/deletejob/${_id}`,
          {
            method: "DELETE",
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (response.ok) {
          refreshPage();
        }
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg);
    }
  };

  // --------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const details = {
      category,
      title,
      salary,
      location,
      requirement,
      description,
    };

    let registerId = await fetch(`https://jobbackend-pi.vercel.app/jobpost`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      dataType: "json",
      method: "POST",
      body: JSON.stringify(details),
    });

    if (registerId.ok) {
      // alert("Successfully added");
      refreshPage();
    }
  };

  return (
    <div>
      <div className="flex justify-end mt-1 mb-3">
        <button
          onClick={handleOpen}
          className="px-2 py-1 text-[13px] border-zinc-800 font-bold text-blue-600"
        >
          + Add Job
        </button>
      </div>
      <hr />
      {alljob?.map((item, index) => (
        <>
          <div key={index} className="flex justify-between items-center my-2">
            <p className="text-[14px] font-bold">
              {item.title}{" "}
              <span className="font-light text-[12px]">-{item.location}</span>
            </p>
            <div className="flex items-center justify-end gap-2">
              <p
                className="text-[12px] text-green-700 cursor-pointer"
                onClick={() => {
                  setView(index);
                  setViewpopup(true);
                }}
              >
                Apply Now
              </p>
              <p className="cursor-pointer">
                <AiTwotoneEdit
                  onClick={() => {
                    setEdit(index);
                    setPupup(true);
                  }}
                />
              </p>
              <p className="cursor-pointer">
                <AiTwotoneDelete onClick={() => handleDelete(item._id)} />
              </p>
            </div>
            {view === index && (
              <Singlejob
                item={item}
                viewpopup={viewpopup}
                setViewpopup={setViewpopup}
              />
            )}
            {edit === index && (
              <Editjob item={item} popup={popup} setPupup={setPupup} />
            )}
          </div>
          <hr />
        </>
      ))}

      {open && (
        <BasicModal
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          text="Add JoB"
          data={data}
        >
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 focus:outline-none text-[14px] bg-transparent border rounded-[4px] placeholder:text-[12px] border-slate-700 my-2"
              placeholder="Enter Job title"
              required
            />
            <input
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-full px-3 py-2 focus:outline-none text-[14px] bg-transparent border rounded-[4px] placeholder:text-[12px] border-slate-700 my-2"
              placeholder="Enter Job salary"
              required
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 focus:outline-none text-[14px] bg-transparent border rounded-[4px] placeholder:text-[12px] border-slate-700 my-2"
              placeholder="Enter Job location"
              required
            />
            <textarea
              type="text"
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
              className="w-full px-3 py-2 focus:outline-none text-[14px] bg-transparent border rounded-[4px] placeholder:text-[12px] border-slate-700 my-2"
              placeholder="Enter Job requirement"
              required
            />
            <textarea
              type="text"
              value={description}
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
      )}
    </div>
  );
}
