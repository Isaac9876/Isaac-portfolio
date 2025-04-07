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
     className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8"
    >
        <RevealOnScroll>
        <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <RevealOnScroll>
                    <div className="space-y-6">
                        <div className="rounded-xl p-8 border-white/10 border bg-white/5 backdrop-blur-lg hover:-translate-y-1 transition-all duration-300">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Passionate developer with expertise in building scalable web
                                applications and creating innovative solutions. I combine technical
                                excellence with creative problem-solving to deliver exceptional results.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <ImageContainer 
                                src="IMG-20240721-WA0008.jpg" 
                                alt="Isaac Tech" 
                                className="w-full aspect-square rounded-xl"
                            />
                            <ImageContainer 
                                src="IMG-20240721-WA0033.jpg" 
                                alt="Isaac Tech" 
                                className="w-full aspect-square rounded-xl"
                            />
                        </div>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                      <h3 className="text-xl font-bold mb-4"> 📖 Education</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> Bsc. Computer Science</strong> - Central University 
                            (2022-2026)
                        </li>
                        <li>
                            Relevant Coursework: Data Structures, Web Development, Cloud 
                            Computing...
                        </li>
                      </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                      <h3 className="text-xl font-bold mb-4"> 👷 Work Experience</h3>
                      <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold"> Software Engineer at ABC Corp (2022 - present)</h4>
                            <p>Developed and maintained microservices for cloud-based 
                               applications.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold"> Intern at Acacia Health Insurance (2023)</h4>
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