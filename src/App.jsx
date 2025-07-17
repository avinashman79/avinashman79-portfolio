import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white dark:bg-black shadow z-50 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Avinash</h1>
        <ul className="flex space-x-6 font-medium">
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#experience" className="hover:underline">Experience</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>

      {/* Main content */}
      <main className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} font-sans pt-24 px-4 sm:px-6 md:px-12 lg:px-32`}>
        {/* Section A: Apple-style text reveal */}
<section className="min-h-screen flex flex-col justify-center px-4 md:px-32 bg-black text-white">
  <motion.h2
    className="text-5xl font-extrabold mb-6"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    Introducing Your Next Chapter
  </motion.h2>

  <motion.p
    className="text-lg text-gray-400 max-w-3xl"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, delay: 0.3 }}
    viewport={{ once: true }}
  >
    This isn't just another developer portfolio. It's your professional identity, fully charged and made to impress. Scroll down and see what you bring to the table.
  </motion.p>
</section>

{/* Section B: Text + Image Reveal */}
<section className="min-h-screen grid md:grid-cols-2 gap-12 items-center px-4 md:px-32 py-24 bg-black text-white">
  <motion.img
    src="https://via.placeholder.com/500x300/111111/ffffff?text=Project+Mockup"
    alt="Project Screenshot"
    className="rounded-xl shadow-xl"
    initial={{ opacity: 0, scale: 0.9, x: -40 }}
    whileInView={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  />

  <div>
    <motion.h2
      className="text-4xl font-bold mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      Real Projects. Real Impact.
    </motion.h2>

    <motion.p
      className="text-gray-400 text-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Here’s one of the tools I built at T-Mobile — designed for engineers, scaled for nationwide deployment, and optimized to reduce latency by 30%.
    </motion.p>
  </div>
</section>




        {/* Toggle */}
        <div className="flex justify-end p-4">
          <button
            className="px-4 py-2 border rounded-xl text-sm"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        {/* Home */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl font-bold mb-4">
            Avinash Mantripragada
          </motion.h1>
          <p className="text-lg">Full-Stack Developer | Java, Spring Boot, Angular, React</p>
        </section>

        {/* Projects */}
        {/* Projects with Images */}
<section id="projects" className="text-white">
  {/* Project 1 */}
  <div className="py-24 px-4 md:px-32 bg-black text-white">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.img
        src="https://via.placeholder.com/600x350/111111/ffffff?text=MagentaBuilt"
        alt="T-Mobile project mockup"
        className="rounded-xl shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-semibold mb-3">MagentaBuilt – T-Mobile</h3>
        <p className="text-gray-400 text-lg">
          Built 15+ microservices using Java, Spring Boot, Oracle, Cloudant, AWS; reduced transaction latency by 30%.
        </p>
      </motion.div>
    </div>
  </div>

  {/* Project 2 */}
  <div className="py-24 px-4 md:px-32 bg-neutral-900 text-white">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.img
        src="https://via.placeholder.com/600x350/111111/ffffff?text=iFulfill"
        alt="Bank of America project"
        className="rounded-xl shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-semibold mb-3">iFulfill – Bank of America</h3>
        <p className="text-gray-400 text-lg">
          Developed responsive UIs and APIs using React, Tailwind, Spring Boot. Improved performance by 40%, built on Azure.
        </p>
      </motion.div>
    </div>
  </div>

  {/* Project 3 */}
  <div className="py-24 px-4 md:px-32 bg-black text-white">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.img
        src="https://via.placeholder.com/600x350/111111/ffffff?text=Fraud+Detector"
        alt="Fraud analysis mockup"
        className="rounded-xl shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-semibold mb-3">Fraud Detection – SAS & Tableau</h3>
        <p className="text-gray-400 text-lg">
          Built a fraud detection model with SAS & Tableau. Boosted accuracy by 30%, reduced training time by 15%.
        </p>
      </motion.div>
    </div>
  </div>
</section>
{/* Parallax-style Hero Section */}
<section className="h-screen bg-black text-white flex items-center justify-center overflow-hidden relative px-6">
  <motion.img
    src="https://via.placeholder.com/600x600/0f0f0f/ffffff?text=Your+Tech+Stack"
    alt="Floating phone"
    className="absolute z-10 w-80 md:w-96 rounded-2xl shadow-2xl"
    initial={{ opacity: 0, y: 100, scale: 0.8 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true }}
  />

  <motion.div
    className="relative z-20 max-w-xl text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.4 }}
    viewport={{ once: true }}
  >
    <h2 className="text-5xl font-bold mb-6">It’s Not Just Code</h2>
    <p className="text-gray-400 text-lg">
      It’s your creativity, your work ethic, and your entire dev journey — built with React, Tailwind, and attitude.
    </p>
  </motion.div>
</section>

        {/* Experience */}
        <section id="experience" className="py-20 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 border-b pb-2">Experience</h2>
          <ul className="space-y-6">
            <li>
              <strong>T-Mobile</strong> – Full Stack Developer (2024–Present)<br />
              Built full-stack and backend tools for internal network and POS systems using Java, Spring Boot, AngularJS, Oracle.
            </li>
            <li>
              <strong>Bank of America</strong> – Software Developer Intern (2024)<br />
              Created backend features and UIs using Java, Spring Boot, React, Tailwind, Azure.
            </li>
            <li>
              <strong>Accenture</strong> – Software Developer (2019–2022)<br />
              Built SPAs with Angular, APIs in Spring Boot & .NET, deployed on AWS/Azure with Jenkins CI/CD.
            </li>
          </ul>
        </section>

        {/* About */}
        <section id="about" className="py-20 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 border-b pb-2">About Me</h2>
          <p>I build things that work. I enjoy solving backend puzzles with Java and Spring Boot just as much as polishing UIs in React or Angular. Based in Simi Valley, with a Master's in Info Systems from Memphis. Outside code, I think about how to make tech more human.</p>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 text-center">
          <h2 className="text-4xl font-bold mb-4 border-b pb-2">Contact</h2>
          <p>Email: <a href="mailto:avinashman79@gmail.com" className="underline">avinashman79@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/contactavinashmantripragada" className="underline">contactavinashmantripragada</a></p>
          <p>GitHub: <a href="https://github.com/yourgithub" className="underline">yourgithub</a></p>
        </section>

      </main>
    </>
  );
}
