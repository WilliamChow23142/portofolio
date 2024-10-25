import { Button } from "@mui/material";
import Link from "next/link";

const Portfolio = () => {

    const urls = [
        {
            title: "AAMI Real Estate Website",
            image: "/port/insure.png",
            url: "#",
            skills: "React, TypeScript, Lottie"
        },
        {
            title: "Cogmento CRM",
            image: "/port/cogmento.png",
            url: "https://cogmento.com",
            skills: "React, Django"
        },
        {
            title: "AGoons of Balatroon",
            image: "/port/goons.png",
            url: "https://goonsofbalatroon.com",
            skills: "React, Node, Web3, IMX"
        },
        {
            title: "Hummingbot.io",
            image: "/port/humming.png",
            url: "https://hummingbot.io/",
            skills: "React.js, Gatsby, Web3, Particle and PixiJS"
        },
        {
            title: "Properstar Real estate website",
            image: "/port/proper.png",
            url: "https://www.properstar.com",
            skills: "React.js, Node.js, Contentful"
        },
        {
            title: "Diyar News Website",
            image: "/port/diyar.png",
            url: "https://www.diyar.bh",
            skills: "React.js, Gatsby, Contentful"
        },
        {
            title: "Mathpix Editor",
            image: "/port/math.png",
            url: "https://snip.mathpix.com",
            skills: "React.js, Markdown, Mathjax"
        },
        {
            title: "Rent furnished Website",
            image: "/port/rent.png",
            url: "http://wunderflats.com",
            skills: "React.js, Node.js"
        },
        {
            title: "RiotRacer Game Platform",
            image: "/port/riot.png",
            url: "https://riotracers.com",
            skills: "React, Node, Web3, Polygon, Opensea"
        },
        {
            title: "SKI Map",
            image: "/port/ski.png",
            url: "https://winter.intermaps.com/silvretta_arena?zoomCalculationMode=fill&lang=en",
            skills: "Leaflet.js, D3"
        },
        {
            title: "SmartySymbol Website",
            image: "/port/symbol.png",
            url: "https://smartysymbols.com",
            skills: "React.js, Fabric.js, WordPress"
        },
        {
            title: "Traveling Girls Dating Website",
            image: "/port/travel.png",
            url: "https://www.travelgirls.com",
            skills: "Angular, Node.js"
        },
        {
            title: "QF Video Marketing Website",
            image: "/port/video.png",
            url: "https://www.quickframe.com",
            skills: "React.js, Node.js"
        },
        {
            title: "Vikids Women Website",
            image: "/port/vikids.png",
            url: "https://www.vikids.ru",
            skills: "React.js, Ruby, Medium"
        }
    ]

    return (
        <div className="p-6">
            <h2 className="text-center text-3xl font-black">His Charming Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                {
                    urls.map((item, idx) => {
                        return (
                            <div className="bg-cover w-full border-2 port-item h-60 rounded-lg opacity-90 hover:opacity-100 relative" key={idx}>
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                                <div className="absolute w-full h-full left-0 top-0 flex-col rounded-lg bg-black/80 hidden transition-all duration-300 justify-center items-center">
                                    <h4 className="text-center text-2xl font-black">{item.title}</h4>
                                    <h5 className="text-center">{`(${item.skills})`}</h5>
                                    <Link href={item.url} target="_blank">
                                        <Button variant="outlined" className="border rounded-md w-24 py-1 my-2">Visit</Button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Portfolio;