import AccordionUse from "../Resources/AccordionUse/AccordionUse";
import Button from "@mui/material/Button";
import Addjob from "./Addjob/Addjob";
import { useContext } from "react";
import { Auth } from "../../contexts/context";

const Home = () => {
  const { dispatchAuth } = useContext(Auth);

  const category = [
    { title: "Digital Marketing" },
    { title: "HR & Admiminstration" },
    { title: "Management" },
    { title: "Engineering" },
    { title: "Creative" },
    { title: "Sales & Marketing" },
    { title: "Account" },
    { title: "Development" },
  ];

  const logout = (e) => {
    e.preventDefault();
    dispatchAuth({ type: "remove" });
    alert("Successfully Logout");
  };

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
          <Button variant="outlined" onClick={(e) => logout(e)}>
            Log out
          </Button>
        </div>
      </div>
      {/* ---------Accordion--------- */}
      <div>
        {category.map((data, index) => (
          <AccordionUse data={data} key={index}>
            <Addjob data={data} />
          </AccordionUse>
        ))}
      </div>
    </div>
  );
};

export default Home;
