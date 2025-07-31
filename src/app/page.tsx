import Image from "next/image";
import Link from "next/link";
import SkillsSection from "./components/SkillsSection";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Badge(props: any) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="ms-section bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white">
        <div className="ms-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hello, I&apos;m Eric Suarez 👋
              </h1>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                Full Stack Developer specializing in modern web technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/blog"
                  className="ms-button bg-white text-[var(--primary)] hover:bg-opacity-90"
                >
                  Read My Blog
                </Link>
                <a
                  href="#contact"
                  className="ms-button bg-transparent border border-white hover:bg-white hover:bg-opacity-10"
                >
                  Contact Me
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-white rounded-full opacity-20"></div>
                <div className="absolute inset-4 bg-white rounded-full opacity-30"></div>
                <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center text-6xl p-1">
                  <Image
                    alt="Profile picture"
                    src="/profile-pic.JPG"
                    className="rounded-full object-cover w-full h-full"
                    width="192"
                    height="192"
                  />
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
              Hello! I&apos;m <span className="font-semibold">Eric Suarez</span>, a full-stack
              software engineer. By day, I&apos;m fortunate to work at{" "}
              <span className="not-prose">
                <Badge href="https://microsoft.com">
                  <Image
                    alt="Microsoft logomark"
                    src="/microsoft-logo.png"
                    className="!mr-1"
                    width="14"
                    height="14"
                  />
                  Microsoft
                </Badge>
              </span>{" "}
              , where I get to come up with solutions to interesting business problems through code.
            </p>
            <p className="text-lg">
              With a strong foundation in both frontend and backend development, I bring ideas to
              life with attention to detail, performance, and accessibility. I enjoy learning new
              things. Whether it&apos;s mastering the latest JavaScript framework or exploring
              design principles, I&apos;m always hungry for knowledge and love to share cool things
              I learn with others. I believe that sharing knowledge not only enriches our community
              but also helps us grow collectively.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="ms-section bg-[var(--muted)]">
        <div className="ms-container">
          <h2 className="text-3xl font-bold mb-2 text-center">Skills</h2>
          <p className="text-center text-[var(--muted-foreground)] mb-12">
            Technologies I work with
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="ms-card">
              <h3 className="text-xl font-semibold mb-4 text-[var(--primary)]">Frontend</h3>
              <SkillsSection category="frontend" />
            </div>

            <div className="ms-card">
              <h3 className="text-xl font-semibold mb-4 text-[var(--primary)]">Backend</h3>
              <SkillsSection category="backend" />
            </div>

            <div className="ms-card">
              <h3 className="text-xl font-semibold mb-4 text-[var(--primary)]">
                Tools & Practices
              </h3>
              <SkillsSection category="tools" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="ms-section">
        <div className="ms-container">
          <h2 className="text-3xl font-bold mb-2 text-center">Work Experience</h2>
          <p className="text-center text-[var(--muted-foreground)] mb-12">
            My professional journey
          </p>

          <div className="space-y-8">
            <div className="ms-card relative border-l-4 border-l-[var(--primary)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
                <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <span>
                    <Badge href="https://microsoft.com">
                      <Image
                        alt="Microsoft logomark"
                        src="/microsoft-logo.png"
                        className="!mr-1"
                        width="14"
                        height="14"
                      />
                      Microsoft
                    </Badge>
                  </span>
                  <span>•</span>
                  <span>Sep 2019 - Present</span>
                </div>
              </div>
              <p className="mb-4">
                As a Senior Software Engineer at{" "}
                <Badge href="https://microsoft.com">
                  <Image
                    alt="Microsoft logomark"
                    src="/microsoft-logo.png"
                    className="!mr-1"
                    width="14"
                    height="14"
                  />
                  Microsoft
                </Badge>
                , I delivered impactful solutions across Project Management, Risk Management,
                Approval Management, and CPQ (Configure, Price, Quote) platforms. Key
                accomplishments include:
              </p>
              <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-1">
                <li>
                  Developed bulk internal engagement upload and validation, reducing processing time
                  from 12-24 hours to minutes, and enhanced business domain skill validations for
                  bulk and single engagement creation.
                </li>
                <li>
                  Engineered FCR (Financial Change Request) automations and UI enhancements adhering
                  to SDM+ rules, including dynamic approvers, blended cost rate calculations, and
                  auto-population of labor, unit, subcontractor, and expense data.
                </li>
                <li>
                  Integrated Azure services (Functions, Service Bus, Queues) to automate event
                  processing, improve reliability, and eliminate recurring user-impacting issues.
                </li>
                <li>
                  Expanded machine learning-driven forecasting, integrating business insights APIs
                  to provide project managers with actionable recommendations, reducing manual
                  effort and improving forecast accuracy.
                </li>
                <li>
                  Developed and enhanced reporting features (Cost & Bill Rates, Financial Analysis)
                  and integrated resource calendar APIs to provide project managers with real-time
                  insights for planning and analysis.
                </li>
                <li>
                  Led the transition and knowledge transfer of Project Management applications to
                  new teams, ensuring seamless business continuity and successful global launches.
                </li>
                <li>
                  Contributed to the design and implementation of mobile and Microsoft Teams
                  experiences for project management, leveraging React Native and FxP Mobile
                  Platform.
                </li>
                <li>
                  Enabled robust, reusable risk UI components and APIs for the Common Risk Service
                  and Contract Lifecycle Management, and set up automated unit and integration
                  testing (including Playwright) to ensure high code quality and reliability.
                </li>
                <li>
                  Created automated release pipelines and improved UI performance, empowering teams
                  to deliver features faster and with higher confidence.
                </li>
              </ul>
            </div>

            <div className="ms-card relative border-l-4 border-l-[var(--secondary)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <span>
                    <Badge href="https://americanexpress.com">
                      <Image
                        alt="American Express logomark"
                        src="/amex-logo.png"
                        className="!mr-1"
                        width="14"
                        height="14"
                      />
                      American Express
                    </Badge>
                  </span>
                  <span>•</span>
                  <span>Jan 2018 - Aug 2019</span>
                </div>
              </div>
              <p className="mb-4">
                As a part of the Global Risk Technology team, I helped deliver the Norwegian SAS
                Co-Brand Consumer Card by creating a REST API used to get applicant data to make
                Risk decisions on prospective customers.
              </p>
              <ul className="list-disc list-inside text-[var(--muted-foreground)] space-y-1">
                <li>
                  I optimized and uplifted our database access component to use a new internal
                  Database API which helped lower our platforms database operations by 50% which
                  contributed to meeting SLA for the Norwegian SAS Co-Brand Consumer card products
                  and Amazon Co-Brand Business cards.
                </li>
                <li>
                  To aid our campus recruitment team, I along with some of my peers were asked to
                  uplift our Candidate Intake Portal which was used most recently at the 2019 NSBE
                  conference.
                </li>
                <li>Leading enhancement to our team&apos;s CI/CD pipeline.</li>
                <li>
                  My team received 1st place in the company wide new hire hackathon by delivering an
                  app that visually displayed and monitored payment information in real time using
                  graphs, charts and heat maps.
                </li>
              </ul>
            </div>
            <div className="ms-card relative border-l-4 border-l-[var(--secondary)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Software Engineering Intern</h3>
                <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <span>
                    <Badge href="https://americanexpress.com">
                      <Image
                        alt="American Express logomark"
                        src="/amex-logo.png"
                        className="!mr-1"
                        width="14"
                        height="14"
                      />
                      American Express
                    </Badge>
                  </span>
                  <span>•</span>
                  <span>Jun 2016 - Aug 2016</span>
                </div>
              </div>
              <p className="mb-4">
                As a part of the Global Credit Bureau Solutions team, I assisted in the uplift of
                their web application (C#, .NET, SQL) by optimizing the existing code, improving the
                user interface, and aligning the code base to AMEX Reference Architecture standards
                by implementing and creating a 3 layer architecture (Data, Business, Presentation)
                for the application.
              </p>
              <p className="mb-4">
                During the final 2 weeks of the internship, I, along with the other interns created
                a web application to enhance the // campus recruitment process using SQLite,
                Express, Angular, and Node which was served from a Raspberry Pi 3.
              </p>
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
                <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
                <span className="text-[var(--muted-foreground)]">2017</span>
              </div>
              <p className="text-[var(--primary)] font-medium mb-2">
                <Badge href="https://ufl.edu">
                  <Image
                    alt="University of Florida logomark"
                    src="/uf-logo.png"
                    className="!mr-1"
                    width="14"
                    height="14"
                  />
                  University of Florida
                </Badge>
              </p>
              <p>Core computer science fundamentals with minor in business administration.</p>
            </div>

            <div className="ms-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">iOS Development Bootcamp</h3>
                <span className="text-[var(--muted-foreground)]">January 2016 – May 2016</span>
              </div>
              <p className="text-[var(--primary)] font-medium mb-2">
                <Badge href="https://codepath.org">
                  <Image
                    alt="CodePath logomark"
                    src="/codepath-logo.png"
                    className="!mr-1"
                    width="14"
                    height="14"
                  />
                  CodePath University
                </Badge>
              </p>
              <p>
                Completed a 12 week iOS bootcamp (using Swift) offered by CodePath where students
                met for two hour in-person classes twice a week and completed one project per week
                (5-10 hours of development time). Created a sneaker community and valuation app
                called KickSwap along with 2 other students in the final 6 weeks of the program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section className="ms-section">
        <div className="ms-container">
          <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
          <p className="text-center text-[var(--muted-foreground)] mb-12">Some of my recent work</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="ms-card group hover:shadow-md transition-shadow">
              <div className="aspect-video bg-[var(--muted)] rounded mb-4 flex items-center justify-center">
                <span className="text-4xl text-[var(--muted-foreground)]">Project 1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors">
                E-Commerce Platform
              </h3>
              <p className="text-[var(--muted-foreground)] mb-4">
                A full-featured online store with cart, checkout, and payment integration.
              </p>
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
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors">
                Task Management App
              </h3>
              <p className="text-[var(--muted-foreground)] mb-4">
                A collaborative task management tool with real-time updates.
              </p>
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
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors">
                Health & Fitness Tracker
              </h3>
              <p className="text-[var(--muted-foreground)] mb-4">
                Mobile app for tracking workouts, nutrition, and health metrics.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[var(--muted)] text-xs rounded-full">
                  React Native
                </span>
                <span className="px-2 py-1 bg-[var(--muted)] text-xs rounded-full">Express</span>
                <span className="px-2 py-1 bg-[var(--muted)] text-xs rounded-full">MongoDB</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <a href="#" className="ms-button">
              View All Projects
            </a>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="ms-section bg-[var(--muted)]">
        <div className="ms-container">
          <h2 className="text-3xl font-bold mb-2 text-center">Get In Touch</h2>
          <p className="text-center text-[var(--muted-foreground)] mb-12">
            Let&apos;s discuss your project
          </p>

          <div className="ms-card max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-[var(--border)] rounded-sm bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-[var(--border)] rounded-sm bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-[var(--border)] rounded-sm bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-[var(--border)] rounded-sm bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="ms-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
