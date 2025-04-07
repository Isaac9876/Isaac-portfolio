import { useEffect } from "react"

export const MobileMenu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10, 10, 10, 0.95)] backdrop-blur-lg z-40 flex flex-col items-center justify-center
                         transition-all duration-500 ease-in-out
                         ${
                            menuOpen
                             ? "h-screen opacity-100 pointer-events-auto"
                             : "h-0 opacity-0 pointer-events-none"

                         }
                         `}>

                            <button onClick={() => setMenuOpen(false)} 
                                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-3xl text-gray-400 hover:text-white focus:outline-none cursor-pointer rounded-full hover:bg-white/10 transition-all duration-300"
                                    aria-label="Close Menu"
                            >
                                ×
                            </button>
            
                <a 
                    href="#home"
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl font-semibold text-white my-4 transform transition-all duration-500 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:scale-110
                          ${
                              menuOpen
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-5"
                           }
                        `}
                    >
                        Home
                    </a>
                    <a 
                    href="#about"
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl font-semibold text-white my-4 transform transition-all duration-500 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:scale-110
                        ${
                            menuOpen
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-5"
                         }
                      `}
                    >
                        About
                    </a>
                    <a 
                    href="#resume"
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl font-semibold text-white my-4 transform transition-all duration-500 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:scale-110
                        ${
                            menuOpen
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-5"
                         }
                      `}
                    >
                        Resume
                    </a>
                    <a 
                    href="#certifications"
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl font-semibold text-white my-4 transform transition-all duration-500 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:scale-110
                        ${
                            menuOpen
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-5"
                         }
                      `}
                    >
                        Certifications
                    </a>
                    <a 
                    href="#projects"
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl font-semibold text-white my-4 transform transition-all duration-500 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:scale-110
                        ${
                            menuOpen
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-5"
                         }
                      `}
                    >
                        Projects
                    </a>
                    <a 
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl font-semibold text-white my-4 transform transition-all duration-500 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:scale-110
                        ${
                            menuOpen
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-5"
                         }
                      `}
                    >
                        Contact
                </a>

        </div>
    );
}