import { Button } from "@chakra-ui/react"
import { useState } from "react"

interface navLink {
    name: string
    link: string
    id: number
}

const navLinks: navLink[] = [
    {
        name: "Home",
        link: "/",
        id: 1
    },
    {
        name: "About",
        link: "/about",
        id: 2
    },
    {
        name: "Projects",
        link: "/projects",
        id: 3
    },
    {
        name: "Contact",
        link: "/contact",
        id: 4
    }
]
const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    // return (
    //     <>
    //         <div className="flex justify-between items-center ">
    //             <div>
    //                 <DesktopNav navLinks={navLinks} />
    //                 <MobileNav navLinks={navLinks} />
    //             </div>
    //             <div>
    //                 <NameIcon />

    //             </div>
    //             <div>
    //                 {/* <Button  onClick={() => window.alert("Resume")} className={`bg-base2 px-8 py-1 rounded-3xl z-50`}><span className="text-text1 mx-12">Resume</span></Button> */}
    //                 <button onClick={() => window.alert("Resume")} className={`bg-base2 px-5 md:px-8 py-1 rounded-3xl`}><span className="text-text1 mx-12">Resume</span></button>
    //             </div>
    //             {/* <Button bgColor='' textColor="base" text="Resume" onClick={() => window.alert("/resume.pdf")}  className={`bg-base2 px-4 py-2 rounded-2xl`}/> */}
    //         </div>
    //     </>
    // )

    return (
        <>
            <div className="flex justify-between items-center">
                <>
                    <div className="hidden md:flex justify-center items-center ">
                        {navLinks &&
                            navLinks.map((link) => (
                                <span key={link.id} className=" text-text1 px-2 py-2">{link.name}</span>
                            ))
                        }
                        {/* <span className=" text-base2 px-2 py-2">A</span> */}
                    </div>
                </>
                <>
                    <div className="flex md:hidden justify-center items-center">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                            onClick={() => setToggle(true)}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>

                        <div className={`bg-base2 w-[50%] transition-all duration-500 py-5 px-2 absolute h-screen top-0 left-0  flex justify-between ${toggle ? ' translate-x-0' : 'translate-x-[-100%]'}`}>

                            <div className={`flex flex-col  items-center `}>

                                {navLinks &&
                                    navLinks.map((link) => (
                                        <span key={link.id} className=" text-text1 px-2 py-2">{link.name}</span>
                                    ))
                                }

                            </div>
                            {toggle && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                    onClick={() => setToggle(false)}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </div>
                    </div>
                </>
                <div>
                    <NameIcon />
                </div>
                <div className="z-50">
                    <button onClick={() => window.alert("Resume")} className={`bg-base2 px-5 md:px-8 py-1 rounded-3xl`}><span className="text-text1">Resume</span></button>

                </div>
            </div>

        </>
    )
}

const NameIcon = () => {
    return (
        <>
            <div className="bg-text1 w-[50px] h-[50px] rounded-full flex justify-center items-center hover:rotate-90 duration-700 cursor-pointer ">
                <span className=" text-white font-bold text-5xl pb-2">A</span>
            </div>
        </>
    )
}

const DesktopNav = ({ navLinks }: { navLinks: navLink[] }) => {
    return (
        <>
            <div className="hidden md:flex justify-center items-center ">
                {navLinks &&
                    navLinks.map((link) => (
                        <span key={link.id} className=" text-text1 px-2 py-2">{link.name}</span>
                    ))
                }
                {/* <span className=" text-base2 px-2 py-2">A</span> */}
            </div>
        </>
    )
}

const MobileNav = ({ navLinks }: { navLinks: navLink[] }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className="flex md:hidden justify-center items-center">

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    onClick={() => setToggle(true)}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>

                <div className={`bg-base2 w-[50%] transition-all duration-500 py-5 px-2 absolute h-screen top-0  flex justify-between ${toggle ? 'left-0' : 'left-[-100%]'}`}>

                    <div className={`flex flex-col  items-center `}>

                        {navLinks &&
                            navLinks.map((link) => (
                                <span key={link.id} className=" text-text1 px-2 py-2">{link.name}</span>
                            ))
                        }

                    </div>
                    {toggle && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                            onClick={() => setToggle(false)}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    )}
                </div>
            </div>
        </>
    )
}

export default NavBar
