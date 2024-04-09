import styles from "./loginRequest.module.css"

export default function LoginRequest() {
  return (
    <div className={styles['bg-white']}>
      <br/>
      <div className={styles['request-container']}>
        <div className={styles['divider-gradient']}></div>
        <div className={styles['signin-box']}>
          <div>Veja recomendações personalizadas</div>
          <button>
            <span>Faça seu login</span>
          </button>
          <div className={styles.last}>Cliente novo? <span>Comece aqui.</span></div>
        </div>
      </div>
      <br/>
    </div>
  )
}