import styles from "../../styles/About.module.css";

export default function About() {
  return (
    <section id="sobre" className={`section blueSection`}>
      <div className="container">
        <p className={styles.text}>
          O PROALERT foi projetado para isso: monitorar continuamente o nível da água, analisar variações em tempo real e traduzir qualquer sinal de risco em alertas automáticos de alta precisão.

          Nosso sistema utiliza sensoriamento ultrassônico, processamento inteligente e infraestrutura em nuvem para entregar informações claras, rápidas e estratégicas.
          Isso permite que gestores, equipes de campo e comunidades tenham acesso antecipado a situações críticas — ganhando tempo para agir antes que o problema se torne uma emergência.
        </p>
      </div>
    </section>
  );
}
