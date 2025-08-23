// components/CarFleet.jsx
import Image from 'next/image';
import styles from './CarFleet.module.css';

const cars = [
  {
    name: 'Skoda Fabia',
    year: '2019–2023',
    image: '/cars/ResizedImage1039599-nowa-skoda-fabia-2021.jpg',
  },
  {
    name: 'Renault Clio',
    year: '2021',
    image: '/cars/CarExportImageManager.jpeg',
  },
  {
    name: 'Opel Corsa',
    year: '2019',
    image: '/cars/opel-corsa-opc-d.jpg',
  },
  {
    name: 'Dacia Duster',
    year: '2020–2023',
    image: '/cars/nowa-dacia-duster-ndash-co-sie-zmienilo-528.jpg',
  },
  {
    name: 'Toyota Corolla',
    year: '2023',
    image: '/cars/image.webp',
  },
  {
    name: 'Toyota Prius',
    year: '2013',
    image:
      '/cars/73EiDKiV4yKt5O6OkUtvhR-e2b228fa31f470c1a852a0dcdfe117af-toyota-prius-l-01-1100.jpg',
  },
  {
    name: 'Tesla Model 3 Long Range',
    year: '2021',
    image: '/cars/3589-tesla-model-3-long-range-rwd-134180.jpg',
  },
];

export default function CarFleet() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Fleet:</h2>
        <p className={styles.description}>
          Do not have your own car but want to work? <b>Vonco Partners</b> has
          its own fleet of new, economical, and eco-friendly cars!
          <br />
          All cars in our fleet are from **2019-2023** models. Each vehicle is
          insured and regularly undergoes technical inspections to ensure a safe
          and comfortable ride for every driver.
        </p>

        <div className={styles.grid}>
          {cars.map((car, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={car.image}
                alt={car.name}
                width={400}
                height={500}
                className={styles.carImage}
              />
              <div className={styles.overlay}>
                <h3 className={styles.carName}>{car.name}</h3>
                <p className={styles.carYear}>{car.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
