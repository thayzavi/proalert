import styles from "../../styles/About.module.css";

export default function About() {
  return (
    <section id="sobre" className={`section blueSection`}>
      <div className="container">
        <p className={styles.text}>
          O PROALERT foi desenvolvido para monitorar continuamente o nível da água em vias urbanas,
          analisar variações em tempo real e transformar qualquer sinal de risco em alertas automáticos
          de alta precisão.  
          Com sensoriamento ultrassônico, processamento inteligente e infraestrutura em nuvem,
          o sistema entrega informações rápidas e claras para apoiar decisões estratégicas.
          Assim, gestores de trânsito, equipes de campo e a comunidade recebem avisos antecipados,
          ganhando tempo para evitar bloqueios, redirecionar rotas e reduzir impactos na mobilidade.
        </p>
      </div>
    </section>
  );
}

