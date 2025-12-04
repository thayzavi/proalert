import styles from "../../styles/Galeria.module.css";

export default function Features() {
    return (
        <section id="sistema" className="section">
            <div className="container">
                <h2 className={styles.titulo}>Sistema</h2>
                <div className={styles.galeria}>
                    <img src="/foto1.jpg" alt="foto 1" className={styles.foto} />
                    <img src="/foto2.jpg" alt="foto 2" className={styles.foto} />
                    <img src="/foto3.jpg" alt="foto 3" className={styles.foto} />
                </div>

                <div className={styles.text}>
                    <ul className={styles.lista}>
                        <li>Sensor Ultrassônico — Mede a distância entre o sensor e a superfície da água.</li>
                        <li>Microcontrolador (ESP32 ) — Responsável por processar as medições.</li>
                        <li>LED Indicador — Sinaliza visualmente o nível da água.</li>
                        <li>Módulo de Comunicação Wi-Fi — Envia os dados para a API.</li>
                        <li>Dashboard — Exibe o status em tempo real.</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
