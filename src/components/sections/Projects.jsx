import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {

    return (
        <section 
           id="projects" 
           className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-transparent to-black/30"
        >
            <RevealOnScroll>
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                     Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group p-6 rounded-2xl border border-white/10 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] transition-all duration-300 backdrop-blur-sm bg-white/5">
                        <div className="relative mb-4 rounded-xl overflow-hidden">
                            <div className="aspect-video bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rounded-xl flex items-center justify-center">
                                <svg className="w-16 h-16 text-blue-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-3">
                                    <a href="#" className="inline-flex items-center text-white font-medium hover:text-blue-400 transition-all duration-300 hover:translate-x-2">
                                        <span>Live Demo</span>
                                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">AI Image Recognition</h3>
                        <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
                            Deep learning model for real-time object detection and classification,
                            with support for multiple object tracking and custom training.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "TensorFlow", "OpenCV", "Flask"].map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-400 py-1.5 px-4 rounded-full text-sm font-medium hover:bg-blue-500/20
                                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center space-x-4">
                            <a 
                              href="#" 
                              className="flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 hover:translate-x-2 my-4"
                            >
                              <span>View Details</span>
                              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </a>
                            <a 
                              href="#" 
                              className="flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1 my-4"
                            >
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              <span>GitHub</span>
                            </a>
                        </div>
                    </div>

                    <div className="group p-6 rounded-2xl border border-white/10 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] transition-all duration-300 backdrop-blur-sm bg-white/5">
                        <div className="relative mb-4 rounded-xl overflow-hidden">
                            <div className="aspect-video bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rounded-xl flex items-center justify-center">
                                <svg className="w-16 h-16 text-blue-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-3">
                                    <a href="#" className="inline-flex items-center text-white font-medium hover:text-blue-400 transition-all duration-300 hover:translate-x-2">
                                        <span>Live Demo</span>
                                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Health Tracking App</h3>
                        <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
                            Cross-platform mobile application for health monitoring with
                            real-time data visualization and personalized insights.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React Native", "Firebase", "Redux", "TypeScript"].map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-400 py-1.5 px-4 rounded-full text-sm font-medium hover:bg-blue-500/20
                                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center space-x-4">
                            <a 
                              href="#" 
                              className="flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 hover:translate-x-2 my-4"
                            >
                              <span>View Details</span>
                              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </a>
                            <a 
                              href="#" 
                              className="flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1 my-4"
                            >
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              <span>GitHub</span>
                            </a>
                        </div>
                    </div>

                    <div className="group p-6 rounded-2xl border border-white/10 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] transition-all duration-300 backdrop-blur-sm bg-white/5">
                        <div className="relative mb-4 rounded-xl overflow-hidden">
                            <div className="aspect-video bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rounded-xl flex items-center justify-center">
                                <svg className="w-16 h-16 text-blue-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-3">
                                    <a href="#" className="inline-flex items-center text-white font-medium hover:text-blue-400 transition-all duration-300 hover:translate-x-2">
                                        <span>Live Demo</span>
                                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">E-commerce Platform</h3>
                        <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
                            Full-stack e-commerce solution with advanced features like real-time
                            inventory, payment processing, and analytics dashboard.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Next.js", "MongoDB", "Stripe", "TailwindCSS"].map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-400 py-1.5 px-4 rounded-full text-sm font-medium hover:bg-blue-500/20
                                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center space-x-4">
                            <a 
                              href="#" 
                              className="flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 hover:translate-x-2 my-4"
                            >
                              <span>View Details</span>
                              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </a>
                            <a 
                              href="#" 
                              className="flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1 my-4"
                            >
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              <span>GitHub</span>
                            </a>
                        </div>
                    </div>

                    <div className="group p-6 rounded-2xl border border-white/10 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] transition-all duration-300 backdrop-blur-sm bg-white/5">
                        <div className="relative mb-4 rounded-xl overflow-hidden">
                            <div className="aspect-video bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rounded-xl flex items-center justify-center">
                                <svg className="w-16 h-16 text-blue-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-3">
                                    <a href="#" className="inline-flex items-center text-white font-medium hover:text-blue-400 transition-all duration-300 hover:translate-x-2">
                                        <span>Live Demo</span>
                                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Cloud Platform</h3>
                        <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
                            Scalable cloud infrastructure management with real-time monitoring
                            and automated scaling.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-400 py-1.5 px-4 rounded-full text-sm font-medium hover:bg-blue-500/20
                                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center space-x-4">
                            <a 
                              href="#" 
                              className="flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 hover:translate-x-2 my-4"
                            >
                              <span>View Details</span>
                              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </a>
                            <a 
                              href="#" 
                              className="flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1 my-4"
                            >
                              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              <span>GitHub</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};