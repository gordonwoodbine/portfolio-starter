import { motion } from 'framer-motion';
import { sectionVariants } from '../helpers/motionVariants';


const Projects = () => {
  return (
    <motion.section 
      className="projects container"
      variants={sectionVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className="box">
        <h2>Some Of My Projects</h2>
      </div>
      <p>Here's where you'll find some of the things I've built so far. I'll update/replace these as I continue to improve my skills so expect this to change rather frequently :)</p>
      <div className="project">
        <h2 className="test">My Blog</h2>
        <img src="img/BlogLaptop.jpg" className="img" alt="" />
        <p className="q">What is it?</p>
        <p className="a">It's my blog. I made it. It's "full stack"</p>
        <p className="q">Cool!</p>
        <p className="a">I know, right?</p>
        <p className="q">How did you build it?</p>
        <p className="a">I'll be honest, I more or less hacked it together from the dismembered remains of half a dozen tutorials. Felt like Frankenstein. Even shouted "IT LIVES!" when I got it to work.</p>
        <p className="q">No, I mean what tech did you use?</p>
        <p className="a">Oh, right. Well, it's running on an Express server and pulling data from MongoDB. The front-end is ejs templates and some vanilla css. I would probably have used React for the front-end if I'd known React when I built it.</p>
        <p className="q">Are you going to rebuild it with React at some point?</p>
        <p className="a">Almost certainly.</p>
      </div>
      <div className="project">
        <h2 className="test">AnnaCats</h2>
        <img src="img/annacats.jpg" className="img" alt="" />
        <p className="q">What is it?</p>
        <p className="a">It's a web app that shows you a random cat. If you like it, you can save it to your favourites. Then you can get another random cat.</p>
        <p className="q">Isn't that a bit silly?</p>
        <p className="a">Depends how seriously you take cats.</p>
        <p className="q">Why is it called AnnaCats?</p>
        <p className="a">Cos I thought my friend Anna would get a kick out of it. She takes cats <em>very</em> seriously.</p>
      </div>
      <p className="q">Talk techy to me.</p>
      <p className="a">Okay. I built it to teach myself more about using APIs with fetch. Originally I built something with dogs because, you know, 'fetch'. But this one also taught me how to use CSS Grid more or less properly. Oh, and it saves the favourites to local storage in the browser.</p>
      
    </motion.section>
  );
};

export default Projects;