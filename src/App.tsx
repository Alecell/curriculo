import AboutMe from './components/AboutMe/AboutMe';
import Avatar from './components/Avatar/Avatar';
import Contact from './components/Contact/Contact';
import History from './components/History/History';
import Skills from './components/Skills/Skills';

import scss from './App.module.scss';

import { job, study } from './data';
import Languages from './components/Languages/Languages';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import LittleMore from './components/LittleMore/LittleMore';

function App() {
  return (
    <>
      <main>
        <div className={scss.page}>
          <aside className={scss.aside}>
            <Avatar />
            <AboutMe />
            <Contact />
            <Skills />
          </aside>
          <article className={scss.article}>
            <History 
              history={job.history} 
              icon={job.icon} 
              locationIcon={job.locationIcon} 
              title={job.title} 
            />
          </article>
        </div>
        <div className={scss.page}>
          <article className={scss.article}>
            <Languages icon={faGlobe} title='languages' />
            <History 
              history={study.history} 
              icon={study.icon} 
              locationIcon={study.locationIcon} 
              title={study.title} 
            />
          </article>
          <aside className={scss.aside}>
            <LittleMore />
            <Contact />
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
