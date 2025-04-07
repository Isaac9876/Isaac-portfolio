import { RevealOnScroll } from "../RevealOnScroll";

export const Resume = () => {
    return (
        <section id="resume" className="py-20 bg-[var(--bg-secondary)]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll>
                    <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text">Resume & Experience</h2>
                </RevealOnScroll>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Education Section */}
                    <RevealOnScroll>
                        <div className="bg-[var(--bg-primary)] p-6 rounded-xl shadow-lg border border-[var(--border-color)] hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                            <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Education</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-semibold text-[var(--accent-primary)]">Bachelor of Computer Science</h4>
                                    <p className="text-[var(--text-secondary)]">University of Technology</p>
                                    <p className="text-sm text-[var(--text-secondary)]">2020 - 2024</p>
                                </div>
                                <div className="border-t border-[var(--border-color)] pt-4">
                                    <h5 className="font-semibold text-[var(--text-primary)]">Key Coursework:</h5>
                                    <ul className="list-disc list-inside text-[var(--text-secondary)] mt-2 space-y-1">
                                        <li>Data Structures & Algorithms</li>
                                        <li>Software Engineering</li>
                                        <li>Database Management Systems</li>
                                        <li>Web Development</li>
                                        <li>Machine Learning Fundamentals</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Skills Section */}
                    <RevealOnScroll>
                        <div className="bg-[var(--bg-primary)] p-6 rounded-xl shadow-lg border border-[var(--border-color)] hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                            <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Technical Skills</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-semibold text-[var(--accent-primary)]">Programming Languages</h4>
                                    <p className="text-[var(--text-secondary)]">JavaScript, Python, Java, C++</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-[var(--accent-primary)]">Web Technologies</h4>
                                    <p className="text-[var(--text-secondary)]">React, Node.js, HTML5, CSS3, TailwindCSS</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-[var(--accent-primary)]">Tools & Platforms</h4>
                                    <p className="text-[var(--text-secondary)]">Git, Docker, AWS, VS Code</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-[var(--accent-primary)]">Soft Skills</h4>
                                    <p className="text-[var(--text-secondary)]">Problem Solving, Team Collaboration, Project Management</p>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};