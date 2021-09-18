import { faRoad } from '@fortawesome/free-solid-svg-icons';

import AsideTitle from '../AsideTitle/AsideTitle';

import scss from './LittleMore.module.scss';

function LittleMore() {
  return (
    <section className={scss.container}>
      <AsideTitle title='a little more' icon={faRoad} />
      <p className={scss.text}>
        I love to create fluid, dynamic and maintainable apps. I'm the kind of developer who cares about every aspects of the project, not just focusing on code, but worrying about whether we're achieving the product goals and expected results, keeping communication with the project requester to ensure that the product is going well.
        <br /> 
        <br />
        Adept of clean code, scalability and modernity my projects are always thought of for the future. When I code, or lead a team, I keep in my and my teammates mind that this code needs to work with or without us. "Code for who will maintain your code" is what I always say.
        <br /> 
        <br />
        I usually don't follow what the community are doing without think about it before, I frequently ask myself and my teammates if this is needed, makes sense, has a good purpose to be used and so on. Always looking for a good reason to use something before add it to the project. Frequently we opt to create things from scratch instead of download a package.
        <br /> 
        <br />
        On my free time I like to play video games, spend time with my wife, play with my cats and eat japanese food. I also like to create games with javascript when I get time.
      </p>
    </section>
  );
}

export default LittleMore;
