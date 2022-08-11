import styles from './Main.module.css';

const Main = ({ data }) => {
  const toCelcius = num => Math.floor(((num - 32) * 5) / 9);

  return (
    <div className={styles.Main}>
      <h1>{data.name}</h1>
      <div>{toCelcius(data.main.temp)}℃</div>
      <div>{data.weather[0].main}</div>
    </div>
  );
};

export default Main;
