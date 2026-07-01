import Image from 'next/image';
import css from './Hero.module.css';
import heroBg from '@/public/hero-bg.png';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={css.hero}>
      <Image
        src={heroBg}
        alt="Campers of your dreams"
        placeholder="blur"
        priority
        fill
        className={css.bgImage}
      />

      <div className={css.overlay} />

      <div className="global-container">
        <div className={css.content}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.subtitle}>You can find everything you want in our catalog</p>
          <Link href="/catalog" className={css.button}>
            View Now
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
