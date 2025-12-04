import styles from "../../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h1>PROALERT</h1>
            <p>
              A mitigação de desastres depende da rapidez e precisão das informações. Por isso,
              o PROALERT transforma dados de sensores ultrassônicos em indicadores confiáveis sobre
              o nível da água em áreas vulneráveis.
              Com hardware preciso, processamento embarcado e análise em nuvem, o sistema identifica tendências,
              detecta variações críticas e aciona alertas automáticos — oferecendo informação estratégica para
              decisões mais rápidas e redução de impactos.
            </p>
          </div>

          <img
            src="/chuva.png"
            alt="Ilustração de enchente"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
