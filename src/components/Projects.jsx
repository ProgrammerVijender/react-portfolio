import { PROJECTS } from "../assets/constants"
import { motion } from "framer-motion";


const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
        <motion.h1 whileInView={{opacity:1 , y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}}
        className="my-20 text-center text-4xl">
        Projects
        </motion.h1>

        <div>
            {PROJECTS.map((project,index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-between">
                    <div className="w-full lg:w-1/4">
                        <motion.img whileInView={{opacity:1 , x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.7}} width={200} height={200} src={project.image} alt={project.title} className="mb-6 ml-12 rounded"/>

                    </div>

                    <div className="w-full max-w-xl lg:w-3/4 ">
                        <motion.h5 whileInView={{opacity:1 , x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}} className="mb-2 font-semibold">{project.title}</motion.h5>
                        <motion.p whileInView={{opacity:1 , x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}} className="mb-4 text-neutral-400">{project.description}</motion.p>
                        {
                            project.technologies.map((tech,index) =>(
                                <motion.span whileInView={{opacity:1 , x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}} key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-500" >
                                {tech}</motion.span>
                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects