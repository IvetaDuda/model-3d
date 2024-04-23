import React from 'react';
import styles from './Descriptions.module.scss';

const Descriptions = ({ data, selectedProject }) => {
  const crop = (string, maxLength) => {
    return string.substring(0, maxLength);
  };

  return (
    <div className={styles.descriptions}>
      {data.map((project, i) => {
        const { title, description } = project;
        return (
          <div
            key={i}
            className={styles.description}
            style={{
              clipPath:
                selectedProject == i ? 'inset(0 0 0)' : 'inset(50% 0 50%',
            }}
          >
            <p>{crop(title, 9)}</p>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Descriptions;
