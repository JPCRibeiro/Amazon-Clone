"use client"
import styles from './footer.module.css';

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      /*behavior: 'smooth'*/
    });
  };

  return (
    <footer className={styles.footer}>
      <button className={styles['back-to-top']} onClick={scrollToTop}>
        <span>Voltar ao início</span>
      </button>
      <div className={styles['footer-accessiblity']}>
        <div>
          <div className={styles['link-col']}>
            <h2 className={styles['font-bold']}>Conheça-nos</h2>
            <ul>
              <li>Sobre a Amazon</li>
              <li>Informações corporativas</li>
              <li>Carreiras</li>
              <li>Comunicados à imprensa</li>
              <li>Comunidade</li>
              <li>Acessibilidade</li>
              <li>Amazon Science</li>
            </ul>
          </div>
          <div className={styles['space-inner']}></div>
          <div className={styles['link-col']}>
            <h2 className={styles['font-bold']}>Ganhe dinheiro conosco</h2>
            <ul>
              <li>Venda na Amazon</li>
              <li>Proteja e construa a sua marca</li>
              <li>Publique seus livros</li>
              <li>Seja um associado</li>
              <li>Anuncie seus produtos</li>
            </ul>
          </div>
          <div className={styles['space-inner']}></div>
          <div className={styles['link-col']}>
            <h2 className={styles['font-bold']}>Pagamento</h2>
            <ul>
              <li>Meios de Pagamento</li>
              <li>Compre com Pontos</li>
              <li>Cartão de Crédito</li>
            </ul>
          </div>
          <div className={styles['space-inner']}></div>
          <div className={styles['link-col']}>
            <h2 className={styles['font-bold']}>Deixe-nos ajudar você</h2>
            <ul>
              <li>Sua conta</li>
              <li>Frete e prazo de entrega</li>
              <li>Devoluções e reembolsos</li>
              <li>Gerencie seu conteúdo e dispositivos</li>
              <li>Ajuda</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles['footer-line']}></div>
      <div className={styles['footer-logo']}></div>
      <div className={styles['footer-outro']}>
        <ul>
          <li>Austrália</li>
          <li>Alemanha</li>
          <li>Canadá</li>
          <li>China</li>
          <li>Cingapura</li>
          <li>Espanha</li>
          <li>Estados Unidos</li>
          <li>França</li>
          <li>Holanda</li>
          <li>Índia</li>
          <li>Itália</li>
          <li>Japão</li>
          <li>México</li>
          <li>Polônia</li>
          <li>Emirados Árabes Unidos</li>
          <li>Reino Unido</li>
          <li>Turquia</li>
        </ul>
        <span>E não se esqueça:</span>
        <div>Amazon Web Services</div>
      </div>
      <div className={styles['footer-copyright']}>
        <ul className={styles['dif-color']}>
          <li>Condições de Uso</li>
          <li>Notificação de Privacidade</li>
          <li>Cookies</li>
          <li>Anúncios Baseados em Interesses</li>
        </ul>
        <span className={styles['dif-color']}>© 2021-2024 Amazon.com, Inc. ou suas afiliadas</span>
      </div>
      <div className={styles['footer-copyright']}>
        <ul>
          <li>Amazon Serviços de Varejo do Brasil Ltda. | CNPJ 15.436.940/0001-03</li>
        </ul>
      </div>
      <div className={styles['footer-copyright']}>
        <ul>
          <li>Av. Juscelino Kubitschek, 2041, Torre E, 18° andar - São Paulo CEP: 04543-011| <span className={styles['dif-color']}>Fale conosco</span>| ajuda-amazon@amazon.com.br</li>
        </ul>
      </div>
      <div className={styles['footer-copyright']}>
        <ul>
          <li>Formas de pagamento aceitas: cartões de crédito (Visa, MasterCard, Elo e American Express), cartões de débito (Visa e Elo), Boleto e Pix.</li>
        </ul>
      </div>
    </footer>
  )
}