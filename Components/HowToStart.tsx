'use client';

import { useState } from 'react';
import styles from './HowToStart.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const steps = [
  {
    title: 'ВАЖНАЯ ИНФОРМАЦИЯ:',
    content: (
      <ul>
        <li>
          1. Чтобы упростить вам начало работы, мы разделили инструкции на
          пункты.
        </li>
        <li>2. Легализируйте свое дальнейшее пребывание.</li>
        <li>3. Действуйте быстро.</li>
        <li>4. Перед тем как начать, заполните...</li>
      </ul>
    ),
  },
  {
    title: 'Подготовка документов водителя',
    content: 'Содержание для этого пункта...',
  },
  {
    title: 'Подготовка телефона',
    content: 'Содержание для этого пункта...',
  },
  {
    title: 'Заполнение формы HEJ APP DRIVE',
    content: 'Содержание для этого пункта...',
  },
  {
    title: 'Встреча в офисе Vonco Partner',
    content: 'Содержание для этого пункта...',
  },
  {
    title: 'Запуск процедуры на сайте Vonco Partner',
    content: 'Содержание для этого пункта...',
  },
  {
    title: 'START',
    content: 'Содержание для этого пункта...',
  },
];

export default function HowToStart() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.mainTitle}>Как начать работать</h2>
      <p className={styles.subtitle}>на арендованном такси Bolt Uber FreeNow</p>
      <p className={styles.introText}>
        Мы приглашаем вас ознакомиться с нашим подробным пошаговым руководством,
        которое поможет вам начать работу с нашим арендованным такси.
      </p>

      <div className={styles.accordion}>
        {steps.map((step, index) => (
          <div key={index} className={styles.accordionItem}>
            <button
              className={styles.accordionHeader}
              onClick={() => handleToggle(index)}
            >
              <div className={styles.accordionHeaderContent}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <span className={styles.stepTitle}>{step.title}</span>
              </div>
              <span className={styles.accordionIcon}>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            <div
              className={`${styles.accordionContent} ${
                openIndex === index ? styles.open : ''
              }`}
            >
              <div className={styles.accordionContentInner}>{step.content}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
