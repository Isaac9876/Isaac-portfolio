import { RevealOnScroll } from "../RevealOnScroll";
import { ImageContainer } from "../ImageContainer";

export const Home = () => {
    return (
        <section
           id="home"
           className="min-h-screen flex items-center justify-center relative px-4 md:px-8"
           >
            <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-8 items-center">
                <RevealOnScroll>
                <div className="order-2 md:order-1">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">Hi, I'm Isaac Tech</h1>
                
                <p className="text-gray-400 text-lg mb-8">
                    I'm a full-stack deloveloper who loves crafting clean, scalable web
                    applications. My goal is to build solutions that offer both
                    exceptional performance and a delightful user experience.
                </p>
                <div className="flex space-x-4">
                <a 
                  href="#projects" 
                  className="bg-[var(--accent-primary)] text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_20px_var(--button-hover-shadow)] hover:scale-105 active:scale-95"
                >
                    View Projects
                </a>

                <a 
                  href="#contact" 
                  className="border border-[var(--accent-primary)] text-[var(--accent-primary)] py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_var(--button-hover-shadow)] hover:bg-[var(--button-hover-bg)] hover:scale-105 active:scale-95"
                >
                    Contact Me
                </a>
                </div>
                </div>
                </RevealOnScroll>

                <RevealOnScroll>
                <div className="order-1 md:order-2">
                    <ImageContainer 
                        src="IMG-20240721-WA0006.jpg" 
                        alt="Isaac Tech" 
                        className="w-full aspect-[3/4] max-w-md mx-auto rounded-2xl shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500"
                    />
                </div>
                </RevealOnScroll>
            </div>
           </section>
    );
};