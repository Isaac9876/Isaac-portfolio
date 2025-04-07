import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {          

    useEffect(() => {  
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.95)] backdrop-blur-xl border-b border-white/10 shadow-lg transition-all duration-500 ease-in-out">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white group transition-all duration-300 ease-in-out hover:scale-105">
                    Kodom<span className="text-blue-500 group-hover:text-blue-400 animate-pulse">.tech</span>
                </a>

                <div 
                    className="w-10 h-10 flex items-center justify-center relative cursor-pointer z-40 md:hidden hover:bg-white/10 rounded-full transition-all duration-300" 
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <div className="relative w-6 h-5">
                        <span className={`absolute top-0 left-0 w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                        <span className={`absolute top-2 left-0 w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 translate-x-2' : ''}`}></span>
                        <span className={`absolute bottom-0 left-0 w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home"
                        className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-y-[-2px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full group"
                    >
                        <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">Home</span>
                    </a>
                    <a href="#about"
                        className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-y-[-2px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full group"
                    >
                        <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">About</span>
                    </a>
                    <a href="#projects"
                        className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-y-[-2px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full group"
                    >
                        <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">Projects</span>
                    </a>
                    <a href="#contact"
                        className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-y-[-2px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full group"
                    >
                        <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">Contact</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>
}