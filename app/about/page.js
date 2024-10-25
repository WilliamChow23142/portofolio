import Image from "next/image";

const AboutPage = () => {

    const skills = {
        lang: [
            {
                name: "JavaScript",
                icon: "https://skillicons.dev/icons?i=javascript"
            }, {
                name: "TypeScript",
                icon: "https://skillicons.dev/icons?i=typescript"
            }, {
                name: "Python",
                icon: "https://skillicons.dev/icons?i=python"
            }, {
                name: "PHP",
                icon: "https://skillicons.dev/icons?i=php"
            }, {
                name: "C++",
                icon: "https://skillicons.dev/icons?i=cpp"
            }, 
        ],
        front: [
            {
                name: "React",
                icon: "https://skillicons.dev/icons?i=react"
            }, {
                name: "Next",
                icon: "https://skillicons.dev/icons?i=next"
            }, {
                name: "Angular",
                icon: "https://skillicons.dev/icons?i=angular"
            }, {
                name: "Vue",
                icon: "https://skillicons.dev/icons?i=vue"
            }, {
                name: "Sass",
                icon: "https://skillicons.dev/icons?i=sass"
            }, {
                name: "TailwindCSS",
                icon: "https://skillicons.dev/icons?i=tailwind"
            }
        ],
        backend: [
            {
                name: "Express",
                icon: "https://skillicons.dev/icons?i=express"
            }, {
                name: "Nest",
                icon: "https://skillicons.dev/icons?i=nest"
            }, {
                name: "Django",
                icon: "https://skillicons.dev/icons?i=django"
            }, {
                name: "Flask",
                icon: "https://skillicons.dev/icons?i=flask"
            }, {
                name: "Spring Boot",
                icon: "https://skillicons.dev/icons?i=spring"
            }, 
        ],
        database: [
            {
                name: "MongoDB",
                icon: "https://skillicons.dev/icons?i=mongo"
            }, {
                name: "Redis",
                icon: "https://skillicons.dev/icons?i=redis"
            }, {
                name: "MySQL",
                icon: "https://skillicons.dev/icons?i=mysql"
            }, {
                name: "PostgreSQL",
                icon: "https://skillicons.dev/icons?i=postgresql"
            }
        ],
    }


    return (
        <div className="w-full h-screen flex items-center justify-center p-10 text-black overflow-hidden">
            <div className="bg-purple-600/70 rounded-xl p-3 flex flex-col lg:flex-row gap-3 border transform -translate-y-6 max-h-[90%] overflow-auto skill-container">
                <div className="w-full lg:w-[560px] xl:w-[700px] bg-white rounded-xl">
                    <div className=" rounded-t-xl bg-cover h-48 w-full" style={{ backgroundImage: "url(/banner.png)" }}></div>
                    <div className="px-8 pb-8">
                        <Image src="/avatar.jpg" width={120} height={120} className="-mt-20 rounded-full border-2" />
                        <h1 className="text-3xl font-black text-black">Arved Wonnek</h1>
                        <div className="flex justify-between my-1">
                            <div className="flex flex-col text-sm font-black">
                                <span>
                                    Full-Stack Engineer
                                </span>
                                <span>Master's Degree</span>
                            </div>
                            <div className="flex flex-col text-sm font-black">
                                <span className="text-md">Yorkton, SK, Canada</span>
                                <span>Northeastern University</span>
                            </div>
                        </div>
                        <p className="text-sm mt-3">
                            Innovative Full-Stack Engineer with 8+ years of experience in frontend and backend development.
                        </p>
                        <p className="text-sm mt-3">
                            I am experienced in collaborating with diverse teams and working independently. Remote work has been a
                            significant part of my career with a strong ability to stay productive and connected.
                        </p>
                        <p className="text-sm mt-3">
                            Passionate about tackling new challenges, learning new technologies, and finding ways to improve processes.
                            Committed to delivering great results whether leading projects or supporting the team
                        </p>
                    </div>
                </div>
                <div className="p-5 lg:w-96 rounded-xl bg-white w-full">
                    <h3 className="text-2xl font-black text-center mb-3 border-b-2 border-black">His Skills</h3>
                    <div className="flex gap-2 flex-wrap justify-center">
                    {
                        skills.lang.map((item, idx) => {
                            return (
                                <div className="w-14 h-14" key={idx}>
                                    <img src={item.icon} className="w-full h-full" />
                                </div>
                            )
                        })                            
                    }
                    {
                        skills.front.map((item, idx) => {
                            return (
                                <div className="w-14 h-14" key={idx}>
                                    <img src={item.icon} className="w-full h-full" />
                                </div>
                            )
                        })                            
                    }
                    {
                        skills.backend.map((item, idx) => {
                            return (
                                <div className="w-14 h-14" key={idx}>
                                    <img src={item.icon} className="w-full h-full" />
                                </div>
                            )
                        })                            
                    }
                    {
                        skills.database.map((item, idx) => {
                            return (
                                <div className="w-14 h-14" key={idx}>
                                    <img src={item.icon} className="w-full h-full" />
                                </div>
                            )
                        })                            
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;