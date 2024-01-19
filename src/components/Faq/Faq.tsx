import "./faq.css";
// hooks
import { useState } from "react";
// mui
import { Collapse, Box } from "@mui/material";
// assets
import plus_logo from "/icon-plus.svg";
import minus_logo from "/icon-minus.svg";

export default function Faq({
  label,
  txt,
  turn,
  sFaq,
}: {
  label: string;
  txt: string;
  turn: number;
  sFaq: number;
}) {
  let [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <Box className=" my-[1rem] py-[0.5rem] cursor-pointer">
        <Box
          onClick={() => setToggle(!toggle)}
          className="flex justify-between"
        >
          <p className="font-bold hover:text-violet-600 text-[1.1rem]">
            {label}
          </p>
          <img src={turn == sFaq ? minus_logo : plus_logo} alt="logo" />
        </Box>
        <Collapse in={turn == sFaq}>
          <p className="py-[1rem] text-grayishPurple">{txt}</p>
        </Collapse>
      </Box>
    </>
  );
}
