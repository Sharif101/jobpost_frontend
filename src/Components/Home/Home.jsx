import AccordionUse from "../Resources/AccordionUse/AccordionUse";
import Button from "@mui/material/Button";
import BasicModal from "../Resources/BasicModal/BasicModal";
import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-9/12 mx-auto">
      <div className="mt-10">
        <p className="font-bold uppercase text-center text-2xl">
          browse open positions by category
        </p>
        <p className="text-center text-sm">
          we are always on the lookout for talanted people
        </p>
        <div className="flex justify-end mt-5 mb-2">
          <Button variant="outlined" onClick={handleOpen}>
            Add Job Category
          </Button>
        </div>
      </div>
      {/* ---------Accordion--------- */}
      <div>
        <AccordionUse title="acc 1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            maiores praesentium laudantium facere libero harum rerum accusamus
            nulla voluptates suscipit cum iure, ex sint eveniet voluptas.
            Ducimus perferendis reiciendis facere.
          </p>
        </AccordionUse>

        <AccordionUse title="acc 2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            maiores praesentium laudantium facere libero harum rerum accusamus
            nulla voluptates suscipit cum iure, ex sint eveniet voluptas.
            Ducimus perferendis reiciendis facere.
          </p>
        </AccordionUse>
      </div>

      {/* ------------Modal----------------- */}
      <BasicModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        title="Add Job Category"
      >
        <form>
          <input
            type="text"
            className="w-full px-3 py-2 focus:outline-none text-[14px] bg-transparent border rounded-[4px] placeholder:text-[12px] border-slate-700"
            placeholder="Enter Job Category"
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
};

export default Home;
