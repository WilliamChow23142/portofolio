"use client"

import PulseStar from "@/components/star"
import { Dialog, Tooltip } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

import TypeWriter from "typewriter-effect";

const HistoryPage = () => {
    const historyList = [
        {
            role: "Full-Stack Enginner",
            position: "Canada",
            company: "InsureCert Systems, Inc",
            duration: "2022.11 – Jul 2024.07",
            descList: [
                "Led a team to develop the AAMI Real Estate Website with React and Node.js boosting user engagement by 25%",
                "Created RESTful APIs for managing property data and enabling real-time updates",
                "Optimized MongoDB queries and indexing strategies to improve data retrieval speed resulting in a 40% reduction in page load time",
                "Integrated Stripe API for secure payment processing enhancing user trust and increasing conversion rates for property transactions",
                "Mentored junior developers on Agile practices and coding standards to improve team efficiency"
            ],
            coord: [10, 10],
            icon: "/insurecert.png"
        }, {
            role: "Full-Stack Enginner",
            position: "United States",
            company: "Overture Law",
            duration: "2022.01 – Oct 2022.10",
            descList: [
                "Developed the Cogmento CRM platform using React and Django enhancing user engagement by 30%",
                "Worked closely with team members to gather requirements from PM and UI/UX designers leading to a 20% decrease in development time",
                "Created RESTful APIs in Django improving data transfer efficiency and increasing application performance by 25%",
                "Guided 3 junior developers focusing on best coding practices which helped reduce code review revisions by 40%",
                "Facilitated weekly sync-ups with the team to track progress resulting in a 15% boost in overall productivity"
            ],
            coord: [25, 30],
            icon: "/overture.png"
        }, {
            role: "Full-Stack Developer",
            position: "Canada",
            company: "Goons of Balatroon",
            duration: "2019.03 – 2022.01",
            descList: [
                "Contributed to the development of the Goons of Belatroon NFT card game with a 160% increase in the number of daily active users",
                "Developed an NFT management app with Node.js streamlining operations and resulting in a 25% increase in NFT transactions",
                "Integrated highcharts for an interactive player statistics visualization feature enhancing player engagement duration by 30%",
                "Collaborated with cross-functional teams as a Full Stack Developer participating in weekly technical reviews and sprint planning meetings to align project goals",
            ],
            coord: [45, 8],
            icon: "/goons.png"
        }, {
            role: "Frontend Developer",
            position: "United States",
            company: "Hummingbot Foundation",
            duration: "2017.02 – 2019.02",
            descList: [
                "Developed and launched a website for an open-source software company leading 40% increase in website traffic",
                "Built a Hummingbot Miner app using React and Node.js streamlining the mining process and reducing manual task time by 40%",
                "Redesigned the frontend on-boarding process in collaboration with product and marketing teams enhancing user experience and retention by 30%",
                "Implemented analytics tools to track user engagement providing data-driven insights that informed further enhancements"
            ],
            coord: [75, 30],
            icon: "/humming.png"
        }, {
            role: "Frontend Developer",
            position: "Switzerland",
            company: "Properstar",
            duration: " 2015.06 – 2017.01",
            descList: [
                "Developed robust Andriod and iOS real estate applications using React Native and React Navigation optimizing performance to achieve a 40% reduction in loading times and 50% faster user interactions",
                "Created a real estate agent platform with React and Node.js enhancing user experience and driving a 20% increase in site traffic",
                "Revamped the platform by adding advanced search functionality and personalized user dashboards leading to a 50% decrease in property search time",
                "Utilized D3.js to develop innovative data visualizations improving insights and decision-making for users"
            ],
            coord: [85, 10],
            icon: "/proper.png"
        }
    ]

    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState({});

    return (
        <div className="w-full h-full">
            {
                historyList.map((item, key) => {
                    return (
                        <PulseStar className={`w-10 h-10 absolute`} key={key} style={{ left: `${item.coord[0]}%`, top: `${item.coord[1]}%` }} onClick={() => { setCurrent(item); setOpen(true); }} /> 
                    )
                })                
            }
            <div className="w-full h-full flex flex-col justify-center items-center">
                <h5 className="text-base md:text-2xl w-5/6 text-center md:w-4/5 lg:w-2/3 xl:w-1/2 font-black rounded-2xl px-6 py-3">
                    <span className="md:text-5xl text-4xl">Arved Wonnek</span>
                    <div className="my-3" />
                    <TypeWriter
                        options={{
                            strings: ['It was very exciting journey with him', 'He is a very talented developer', "He is also a good collaborator"],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 20
                        }}
                    />
                </h5>
            </div>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                classes={{
                    paper: "overflow-visible"
                }}
            >
                <div className="pt-10 pb-4 px-8 bg-pink-500 text-white md:w-[600px] w-[400px] relative">
                    <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full border-2">
                        <Image src={current?.icon} width={80} height={80} className="rounded-full"/>
                    </div>
                    <h2 className="text-2xl font-bold">{ current?.role }</h2>
                    <h2 className="text-md">{` ${current?.company} (${current?.duration}) `}</h2>
                </div>
                <div className="flex flex-col px-8 py-6 md:w-[600px] w-[400px]">
                    {
                        current.descList && current.descList.map((item, key) => {
                            return (
                                <li key={key} className="text-sm">
                                    {item}
                                </li>
                            )
                        })
                    }
                </div>
            </Dialog>

        </div>
    )
}

export default HistoryPage;