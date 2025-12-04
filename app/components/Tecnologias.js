import styles from "../../styles/Technologies.module.css";

export default function Technologies() {
  return (
    <section id="sistema" className="section">
      <div className="container">
        <h2 className={styles.title}>Tecnologias Utilizadas</h2>

        <div className={styles.grid}>
          <div>
            <h4>Hardware:</h4>
            <ul>
              <li>ESP32</li>
              <li>Sensor Ultrassônico HC-SR04</li>
              <li>LED RGB</li>
              <li>Jumpers e Protoboard</li>
            </ul>
          </div>

          <div>
            <h4>Software:</h4>
            <ul>
              <li>Node.js (API)</li>
              <li>MongoDB</li>
              <li>Streamlit Dashboard</li>
              <li>Render (Hospedagem)</li>
              <li>C++ / Arduino IDE</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
