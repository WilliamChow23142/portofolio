"use client"

import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const Navigator = () => {

    const [x, setX] = useState(15);
    const [y, setY] = useState(11);

    const setEyePos = (e) => {
        let left = window.innerWidth / 2 - e.clientX;
        let top = window.innerHeight - e.clientY - 36;

        setY(11 - top / window.innerHeight * 5);
        setX(15 - left / window.innerWidth * 5);
    }

    useEffect(() => {
        window.addEventListener("mousemove", setEyePos);
        return () => {
            window.removeEventListener("mousemove", setEyePos);
        }
    }, [])

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center px-4 py-1 border-2 rounded-full backdrop-blur-lg bg-white/10 box">
                <Button className="px-2 py-1 text-sm text-white/70 hover:text-white" variant="outlined">Home</Button>
                <Button className="px-2 py-1 text-sm text-white/70 hover:text-white" variant="outlined">About Me</Button>
                <div className="flex-1" />
                <Button className="px-2 py-1 text-sm text-white/70 hover:text-white" variant="outlined">Portfolio</Button>
                <Button className="px-2 py-1 text-sm text-white/70 hover:text-white" variant="outlined">Contact</Button>
            </div>
            <div className="w-20 h-20 backdrop-blur-2xl  border-2 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="15" stroke="white" strokeWidth="1"></circle>
                    <rect x={x - 4} y={y} width="3" height="6" fill="white"></rect>
                    <rect x={x + 4} y={y} width="3" height="6" fill="white"></rect>
                    <path d="M14 25C14 23.8954 14.8954 23 16 23V23C17.1046 23 18 23.8954 18 25V26H14V25Z" fill="white"></path>
                </svg>
            </div>
        </div>
    )
}

export default Navigator;