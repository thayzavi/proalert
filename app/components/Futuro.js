import styles from "../../styles/Future.module.css";

export default function Future() {
  return (
    <section id="futuro" className={`section blueSection`}>
      <div className="container">
        <h2 className={styles.titulo}>Evoluções Futuras</h2>

        <ul className={styles.list}>
          <li>Diferenciação de Pontos Alagados e Não Alagados (Mapa Inteligente).</li>
          <li>Estrutura Modular para Novos Sensores.</li>
          <li>Energia Sustentável com Painéis Solares.</li>
          <li>LoRaWAN ou 4G para longas distâncias.</li>
          <li>Aplicativo Mobile para Alertas Instantâneos.</li>
        </ul>
      </div>
    </section>
  );
}
