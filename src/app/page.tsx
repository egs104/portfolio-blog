import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="ms-section bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white">
        <div className="ms-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hello, I'm Your Eric Suarez
              </h1>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                Full Stack Developer specializing in modern web technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/blog" className="ms-button bg-white text-[var(--primary)] hover:bg-opacity-90">
                  Read My Blog
                </Link>
                <a href="#contact" className="ms-button bg-transparent border border-white hover:bg-white hover:bg-opacity-10">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-white rounded-full opacity-20"></div>
                <div className="absolute inset-4 bg-white rounded-full opacity-30"></div>
                <div className="absolute inset-8 bg-white rounded-full opacity-50 flex items-center justify-center text-6xl">
                  EGS {/* Placeholder for profile image or initials */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="ms-section">
        <div className="ms-container">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="ms-card max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              I'm a passionate developer with expertise in TypeScript, React, Next.js, and modern web technologies. 
              I enjoy creating clean, efficient, and user-friendly applications that solve real-world problems.
            </p>
            <p className="text-lg">
              With a strong foundation in both frontend and backend development, I bring ideas to life with 
              attention to detail, performance, and accessibility. I'm always learning and exploring new technologies 
              to stay at the cutting edge of web development.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="ms-section bg-[var(--muted)]">
        <div className="ms-container">
          <h2 className="text-3xl font-bold mb-2 text-center">Skills</h2>
          <p className="text-center text-[var(--muted-foreground)] mb-12">Technologies I work with</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="ms-card">
              <h3 className="text-xl font-semibold mb-4 text-[var(--primary)]">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                  React & React Native
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                  Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                  Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                  HTML5/CSS3
                </li>
              </ul>
            </div>
            
            <div className="ms-card">
              <h3 className="text-xl font-semibold mb-4 text-[var(--primary)]">Backend</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                  Node.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                  Express
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                  SQL & NoSQL Databases
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                  REST & GraphQL APIs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                  Authentication & Authorization
                </li>
              </ul>
            </div>
            
            <div className="ms-card">
              <h3 className="text-xl font-semibold mb-4 text-[var(--primary)]">Tools & Practices</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                  Git & GitHub
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                  CI/CD Pipelines
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                  Testing (Jest, React Testing Library)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                  Agile Methodologies
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                  UI/UX Design Principles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="ms-section">
        <div className="ms-container">
          <h2 className="text-3xl font-bold mb-2 text-center">Work Experience</h2>
          <p className="text-center text-[var(--muted-foreground)] mb-12">My professional journey</p>
          
          <div className="space-y-8">
            <div className="ms-card relative border-l-4 border-l-[var(--primary)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Senior Developer</h3>
                <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <span>Company Name</span>
                  <span>•</span>
                  <span>2021 - Present</span>
                </div>
              </div>
              <p className="mb-4">
                Led the development of multiple web applications using React, Next.js, and TypeScript.
                Implemented modern UI components and responsive designs that improved user engagement by 35%.
              </p>
              <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-1">
                <li>Architected scalable frontend solutions</li>
                <li>Mentored junior developers</li>
                <li>Implemented CI/CD pipelines</li>
              </ul>
            </div>
            
            <div className="ms-card relative border-l-4 border-l-[var(--secondary)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Web Developer</h3>
                <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <span>Previous Company</span>
                  <span>•</span>
                  <span>2018 - 2021</span>
                </div>
              </div>
              <p className="mb-4">
                Developed and maintained multiple client websites using React and Node.js.
                Collaborated with design team to implement pixel-perfect UIs and modern user experiences.
              </p>
              <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-1">
                <li>Built responsive web applications</li>
                <li>Integrated third-party APIs</li>
                <li>Optimized site performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="ms-section bg-[var(--muted)]">
        <div className="ms-container">
          <h2 className="text-3xl font-bold mb-2 text-center">Education</h2>
          <p className="text-center text-[var(--muted-foreground)] mb-12">Academic background</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="ms-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Master of Computer Science</h3>
                <span className="text-[var(--muted-foreground)]">2018</span>
              </div>
              <p className="text-[var(--primary)] font-medium mb-2">University Name</p>
              <p>Specialized in Software Engineering with focus on web technologies and distributed systems.</p>
            </div>
            
            <div className="ms-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
                <span className="text-[var(--muted-foreground)]">2016</span>
              </div>
              <p className="text-[var(--primary)] font-medium mb-2">University Name</p>
              <p>Core computer science fundamentals with minor in UI/UX Design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="ms-section">
        <div className="ms-container">
          <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
          <p className="text-center text-[var(--muted-foreground)] mb-12">Some of my recent work</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="ms-card group hover:shadow-md transition-shadow">
              <div className="aspect-video bg-[var(--muted)] rounded mb-4 flex items-center justify-center">
                <span className="text-4xl text-[var(--muted-foreground)]">Project 1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors">E-Commerce Platform</h3>
              <p className="text-[var(--muted-foreground)] mb-4">A full-featured online store with cart, checkout, and payment integration.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[var(--muted)] text-xs rounded-full">React</span>
                <span className="px-2 py-1 bg-[var(--muted)] text-xs rounded-full">Next.js</span>
                <span className="px-2 py-1 bg-[var(--muted)] text-xs rounded-full">Stripe</span>
              </div>
            </div>
            
            <div className="ms-card group hover:shadow-md transition-shadow">
              <div className="aspect-video bg-[var(--muted)] rounded mb-4 flex items-center justify-center">
                <span className="text-4xl text-[var(--muted-foreground)]">Project 2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors">Task Management App</h3>
              <p className="text-[var(--muted-foreground)] mb-4">A collaborative task management tool with real-time updates.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[var(--muted)] text-xs rounded-full">TypeScript</span>
                <span className="px-2 py-1 bg-[var(--muted)] text-xs rounded-full">React</span>
                <span className="px-2 py-1 bg-[var(--muted)] text-xs rounded-full">Firebase</span>
              </div>
            </div>
            
            <div className="ms-card group hover:shadow-md transition-shadow">
              <div className="aspect-video bg-[var(--muted)] rounded mb-4 flex items-center justify-center">
                <span className="text-4xl text-[var(--muted-foreground)]">Project 3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors">Health & Fitness Tracker</h3>
              <p className="text-[var(--muted-foreground)] mb-4">Mobile app for tracking workouts, nutrition, and health metrics.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[var(--muted)] text-xs rounded-full">React Native</span>
                <span className="px-2 py-1 bg-[var(--muted)] text-xs rounded-full">Express</span>
                <span className="px-2 py-1 bg-[var(--muted)] text-xs rounded-full">MongoDB</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <a href="#" className="ms-button">View All Projects</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="ms-section bg-[var(--muted)]">
        <div className="ms-container">
          <h2 className="text-3xl font-bold mb-2 text-center">Get In Touch</h2>
          <p className="text-center text-[var(--muted-foreground)] mb-12">Let's discuss your project</p>
          
          <div className="ms-card max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-[var(--border)] rounded-sm bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-[var(--border)] rounded-sm bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-[var(--border)] rounded-sm bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 border border-[var(--border)] rounded-sm bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button type="submit" className="ms-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
