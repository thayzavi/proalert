import styles from "../../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <img
                                src="/logo.png"
                                alt="logo"
                                className={styles.logo}
                            />
                    </div>

                    <nav>
                        <ul className={styles.menu}>
                            <li><a href="#sobre">Sobre</a></li>
                            <li><a href="#sistema">Sistema</a></li>
                            <li><a href="#funcionalidades">Funcionalidades</a></li>
                            <li><a href="#futuro">Evoluções Futuras</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
