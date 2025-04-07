import { RevealOnScroll } from "../RevealOnScroll";

export const Certifications = () => {
    const certifications = [
        {
            name: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "December 2023",
            skills: ["Cloud Computing", "AWS Services", "Cloud Security"],
            verificationUrl: "#"
        },
        {
            name: "Full Stack Web Development",
            issuer: "Meta",
            date: "October 2023",
            skills: ["React", "Node.js", "MongoDB", "Express"],
            verificationUrl: "#"
        },
        {
            name: "Python for Data Science",
            issuer: "IBM",
            date: "August 2023",
            skills: ["Python", "Data Analysis", "Machine Learning"],
            verificationUrl: "#"
        }
    ];

    return (
        <section id="certifications" className="py-20 bg-[var(--bg-primary)]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll>
                    <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text">Certifications</h2>
                </RevealOnScroll>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <RevealOnScroll key={index}>
                            <div className="bg-[var(--bg-secondary)] p-6 rounded-xl shadow-lg border border-[var(--border-color)] hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
                                <div className="flex flex-col h-full">
                                    <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[var(--accent-primary)] group-hover:to-[var(--accent-secondary)] group-hover:bg-clip-text transition-all duration-300">
                                        {cert.name}
                                    </h3>
                                    <p className="text-[var(--text-secondary)] mb-2">{cert.issuer}</p>
                                    <p className="text-sm text-[var(--text-secondary)] mb-4">{cert.date}</p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-4 flex-grow">
                                        {cert.skills.map((skill, skillIndex) => (
                                            <span 
                                                key={skillIndex}
                                                className="px-2 py-1 text-xs rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <a 
                                        href={cert.verificationUrl}
                                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-medium hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 mt-auto"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Verify Certificate
                                    </a>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};