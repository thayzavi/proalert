import styles from "../../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h1>PROALERT</h1>
              <p>
                Mobilidade urbana segura começa com informação confiável. O PROALERT monitora
                o nível da água em vias críticas utilizando sensores ultrassônicos de alta precisão,
                processa os dados localmente e envia análises para a nuvem em tempo real.
                Com isso, identifica tendências de alagamento, detecta variações críticas e dispara
                alertas automáticos — ajudando motoristas, moradores e órgãos de trânsito a tomarem
                decisões rápidas e evitarem bloqueios inesperados.
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

