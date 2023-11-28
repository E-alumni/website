import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <p className={styles.title1}>
          Сообщество выпускников
        </p>
        <p className={styles.title2}>Е-профиля</p>
        <div className={styles.mainButtons}>
          <button>
            <a href="/about">О сообществе</a>
          </button>
          <button>
            <a href="/fund">Фонд и гранты</a>
          </button>
        </div>
      </div>
    </main>
  );
}
