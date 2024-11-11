// About.jsx
import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <section style={styles.section}>
        <h2>Welcome to Weeksdeals.online</h2>
        <p>
          In 2003 we sent our first express package - and at that moment it caught fire.
          Today we are an owner-managed company with roots in Leipzig and 70 employees.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Our Passion</h2>
        <p>
          Department store products and all the other life companions that package the most
          diverse things we carry with us beautifully, stylishly, or even super-practically -
          for all situations, for every taste. Our range is correspondingly diverse:
        </p>
        <p>
          With us you will find sports shoes and clothing, luxury brands, jewelry, watches,
          clothes, perfumes, outdoor sports equipment, gifts, sunglasses, wigs, electronics,
          music, films, books, everyday items, bags and backpacks, trolley luggage, wallets,
          and accessories, the latest trends as well as timeless classics.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Our Online Shop</h2>
        <p>
          Our online shop has more than 100,000 products from 1,000 renowned brands available for you.
          Each one was selected by us, examined in detail, photographed, and described in our own words.
          You can personally see a regularly changing selection of our range in our branches in Leipzig
          and Dresden. Get inspired and get expert advice - also from our excellent customer service.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Our Philosophy</h2>
        <p>
          The cornerstones of our success are enthusiasm for our products, close partnership relationships
          with our brands, and handling all processes in-house. At our headquarters in the middle of Leipzig
          and in our branches, we are committed to our common goals. Personal and professional competence
          are important to us. This is also why we offer the best possible working environment for every
          position. As a training company, we support young people in starting their professional lives and
          in their personal and professional development.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Our Team</h2>
        <p>
          More than 85 employees work every day in a variety of positions at Weeksdeals.online to offer all
          bag lovers around the world a carefully compiled range of bags, backpacks, luggage, and much more,
          providing competent and service-oriented advice on their purchases. We offer various permanent positions,
          temporary jobs, and working student positions. Become part of our team and apply today.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Our Management</h2>
        <p>
          Our business managers steer Weeksdeals.online on its path from a small startup to a modern multi-channel
          company. They bring together over 85 people, coordinate the constant development of our processes, and
          ensure steady growth and success in the market for the past 20 years.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  section: {
    marginBottom: '20px',
  },
};

export default About;
