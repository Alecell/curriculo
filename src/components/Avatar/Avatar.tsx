import scss from './Avatar.module.scss';

function Avatar() {
  return (
    <section className={scss.container}>
      <figure className={scss.imageContainer}>
        <img className={scss.image} src="https://alecell.github.io/images/alexandre-gomes-pequeno.png" alt="" />
      </figure>
      <h1 className={scss.title}>
        ALEXANDRE GOMES
        <br />
        <span className={scss.subtitle}>Front-end engineer</span>
      </h1>

    </section>
  );
}

export default Avatar;
