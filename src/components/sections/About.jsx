import { RevealOnScroll } from "../RevealOnScroll";
import { ImageContainer } from "../ImageContainer";

export const About = () => {
    const frontendSkills = [
        "React",
        "Vue",
        "Typescript",
        "TailwindCSS",
        "Svelte"
    ];

    const backendSkills = [
        "Node.js",
        "Python",
        "AWS",
        "MongoDB",
        "GraphQl",
    ];

    return (
    <section 
     id="about" 
     className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8 bg-gradient-to-b from-transparent to-black/20"
    >
        <RevealOnScroll>
        <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <RevealOnScroll>
                    <div className="space-y-8">
                        <div className="rounded-2xl p-8 border-white/10 border bg-white/5 backdrop-blur-lg hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Passionate developer with expertise in building scalable web
                                applications and creating innovative solutions. I combine technical
                                excellence with creative problem-solving to deliver exceptional results.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <ImageContainer 
                                src="IMG-20240721-WA0008.jpg" 
                                alt="Isaac Tech" 
                                className="w-full aspect-square rounded-2xl shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2"
                            />
                            <ImageContainer 
                                src="IMG-20240721-WA0033.jpg" 
                                alt="Isaac Tech" 
                                className="w-full aspect-square rounded-2xl shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2"
                            />
                        </div>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-lg hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10">
                        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Frontend</h3>
                        <div className="flex flex-wrap gap-3">
                            {frontendSkills.map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-1
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-lg hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10">
                        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Backend</h3>
                        <div className="flex flex-wrap gap-3">
                            {backendSkills.map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-1
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="p-8 rounded-2xl border-white/10 border bg-white/5 backdrop-blur-lg hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10">
                      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">📖 Education</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-4">
                        <li>
                            <strong className="text-white">Bsc. Computer Science</strong> - Central University 
                            (2022-2026)
                        </li>
                        <li>
                            Relevant Coursework: Data Structures, Web Development, Cloud 
                            Computing...
                        </li>
                      </ul>
                </div>
                <div className="p-8 rounded-2xl border-white/10 border bg-white/5 backdrop-blur-lg hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10">
                      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">👷 Work Experience</h3>
                      <div className="space-y-6 text-gray-300">
                        <div>
                            <h4 className="font-semibold text-white text-lg mb-2">Software Engineer at ABC Corp (2022 - present)</h4>
                            <p>Developed and maintained microservices for cloud-based 
                               applications.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-white text-lg mb-2">Intern at Acacia Health Insurance (2023)</h4>
                            <p>
                                Assisted in building front-end components and integration REST APIs 
                            </p>
                        </div>
                      </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
};