import styles from "../../styles/Funcionalidade.module.css";

export default function Features() {
  return (
    <section id="funcionalidades" className="section">
      <div className="container">
        <h2 className={styles.titulo}>Funcionalidades</h2>
        <div className={styles.cards}>

          <div className={styles.card}>
            <h3>Monitoramento Inteligente do Nível da Água</h3>
            <p>Leitura contínua da altura da água usando sensor ultrassônico.
              Atualização automática a cada X segundos (configurável).
              Detecção de variações rápidas no nível da água.
              Identificação de três estados: Normal, Atenção e Alerta.</p>
          </div>

          <div className={styles.card}>
            <h3>Notificações ao Usuário</h3>
            <p>O sistema conta com um mecanismo
               inteligente de envio automático
                de e-mails, garantindo que moradores, 
                equipes de monitoramento e órgãos 
                responsáveis recebam avisos imediatos 
                sobre mudanças críticas no nível da água. </p>
          </div>

          <div className={styles.card}>
            <h3>Dashboard Online</h3>
            <p>Visualização em tempo real do nível da água.
              Gráficos de histórico das medições.
              Indicador do estado atual da área.
              Últimas atualizações e logs.
              Interface acessível para computador e celular.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
