/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, handleClose, text, children }) {
  // const [category, setCategory] = useState(data.title);
  // const [title, setTitle] = useState("");
  // const [salary, setSalary] = useState("");
  // const [location, setLocation] = useState("");
  // const [requirement, setRequirement] = useState("");
  // const [description, setDescription] = useState("");

  // const refreshPage = () => {
  //   window.location.reload();
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const details = {
  //     category,
  //     title,
  //     salary,
  //     location,
  //     requirement,
  //     description,
  //   };

  //   let registerId = await fetch(`https://jobbackend-pi.vercel.app/jobpost`, {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     dataType: "json",
  //     method: "POST",
  //     body: JSON.stringify(details),
  //   });

  //   if (registerId.ok) {
  //     alert("Successfully added");
  //     refreshPage();
  //   }
  // };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {text}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* <form onSubmit={(e) => handleSubmit(e)}>
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
              <input
                type="text"
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
                className="w-full px-3 py-2 focus:outline-none text-[14px] bg-transparent border rounded-[4px] placeholder:text-[12px] border-slate-700 my-2"
                placeholder="Enter Job requirement"
                required
              />
              <input
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
            </form> */}
            {children}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
