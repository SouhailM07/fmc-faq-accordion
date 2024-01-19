import "./mycontainer.css";
// hooks
import { useState } from "react";
// components
import { Faq } from "../../components";
// mui
import { Card, CardHeader, CardContent } from "@mui/material";

// assets
import star_logo from "/icon-star.svg";

export default function MyContainer() {
  interface arrOfFaqs_type {
    label: string;
    txt: string;
  }
  let [selectedFaq, setSelectedFaq] = useState<number>(0);
  let arrOfFaqs: arrOfFaqs_type[] = [
    {
      label: "What is Frontend Mentor, and how will it help me?",
      txt: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      label: "  Is Frontend Mentor free?",
      txt: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      label: "Can I use Frontend Mentor projects in my portfolio?",
      txt: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellentway to showcase your skills to potential employers!",
    },
    {
      label: "How can I get help if I'm stuck on a challenge?",
      txt: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];
  return (
    <>
      <main className="bg-[length:100%] bg-no-repeat bg-top bg-[url('/background-pattern-mobile.svg')] tablet:bg-[url('/background-pattern-desktop.svg')] border-2 border-black h-screen !flex items-center justify-center">
        <Card className="!shadow-xl w-[92%] sm:w-[38rem] px-[2rem] !rounded-2xl pt-[2rem]">
          <CardHeader
            title={
              <div className="flex space-x-[1rem] sm:space-x-[2rem]">
                <img src={star_logo} alt="logo" />
                <p className="!font-bold sm:text-[3rem] text-[2rem]">FAQs</p>
              </div>
            }
          />
          <CardContent component="ul">
            {arrOfFaqs.map((e, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    if (selectedFaq == i) setSelectedFaq(-1);
                    else setSelectedFaq(i);
                  }}
                >
                  <Faq
                    label={e.label}
                    txt={e.txt}
                    turn={i}
                    sFaq={selectedFaq}
                  />
                </li>
              );
            })}
          </CardContent>
        </Card>
      </main>
    </>
  );
}
