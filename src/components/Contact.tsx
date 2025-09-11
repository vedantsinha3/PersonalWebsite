import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="section text-center">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Let's Get In Touch</h2>
        <p className="mt-4 max-w-xl mx-auto text-neutral-300">
          I'm currently seeking new opportunities and am always open to a chat. Whether you have a question or just want to connect, my inbox is always open.
        </p>
        
        {/* Social Links & Email */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
          <a
            href="mailto:vedantsinha3@gmail.com"
            className="flex items-center justify-center rounded-lg bg-white text-neutral-900 px-5 py-2.5 text-sm font-medium transition hover:bg-neutral-200"
          >
            <Mail className="h-4 w-4 mr-2" />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/vedantsinha3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-neutral-300 transition hover:text-white"
          >
            <Linkedin className="h-5 w-5 mr-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/vedantsinha3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-neutral-300 transition hover:text-white"
          >
            <Github className="h-5 w-5 mr-2" />
            GitHub
          </a>
          <a
            href="https://vsinha.fyi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-neutral-300 transition hover:text-white"
          >
            <ArrowUpRight className="h-5 w-5 mr-2" />
            vsinha.fyi
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact