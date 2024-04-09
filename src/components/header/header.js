"use client"
import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";

export default function Header() {
  const [departamento, setDepartamento] = useState("Todos");

  function handleInputChange(event) {
    const { value } = event.target;

    setDepartamento(value);
  };

  return (
    <header className={styles.header}>
      <div>
        <div className={styles["nav-top"]}>
          <div className={styles["nav-left"]}>
            <div className={styles["nav-logo"]}>
              <Link href="/" className={styles["logo-link"]}>
                <span></span>
                <span>.com.br</span>
              </Link>
            </div>
            <div className={styles["nav-location-slot"]}>
              <Link href="/" className={styles["location-link"]}>
                <div></div>
                <div className={styles["location-text"]}>
                  <span>A entrega será feita em Rio De Ja... 24000000</span>
                  <span className="font-bold">Atualizar local</span>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles["nav-mid"]}>
            <div className={styles["nav-search"]}>
              <form>
                <div className={styles["search-dropdown"]}>
                  <div>
                    <span>{departamento}</span>
                    <i></i>
                  </div>
                  <select name="departamento" value={departamento} onChange={handleInputChange}>
                    <option>Todos os departamentos</option>
                    <option>Alexa Skills</option>
                    <option>Alimentos e Bebidas</option>
                    <option>Amazon Quase Novo</option>
                    <option>Apps e Jogos</option>
                    <option>Audiolivros Audible</option>
                    <option>Automotivo</option>
                    <option>Bebês</option>
                    <option>Beleza</option>
                    <option>Beleza de Luxo</option>
                    <option>Bolsas, Malas e Mochilas</option>
                    <option>Brinquedos e Jogos</option>
                    <option>Casa</option>
                    <option>CD e Vinil</option>
                    <option>Computadores e Informática</option>
                    <option>Cozinha</option>
                    <option>Dispositivos Amazon</option>
                    <option>DVD e Blu-Ray</option>
                    <option>Eletrodomésticos</option>
                    <option>Eletrônicos</option>
                    <option>Esportes e Aventura</option>
                    <option>Ferramentas e Materiais de Construção</option>
                    <option>Games</option>
                    <option>Instrumentos Musicais</option>
                    <option>Jardim e Piscina</option>
                    <option>Livros</option>
                    <option>Loja Kindle</option>
                    <option>Material para Escritório e Papelaria</option>
                    <option>Móveis e Decoração</option>
                    <option>Pet Shop</option>
                    <option>Prime Video</option>
                    <option>Produtos Industriais e Científicos</option>
                    <option>Programe e Poupe</option>
                    <option>Roupas, Calçados e Joias</option>
                    <option>&nbsp;&nbsp;&nbsp;Feminino</option>
                    <option>&nbsp;&nbsp;&nbsp;Masculino</option>
                    <option>&nbsp;&nbsp;&nbsp;Meninas</option>
                    <option>&nbsp;&nbsp;&nbsp;Meninos</option>
                    <option>&nbsp;&nbsp;&nbsp;Bebês</option>
                    <option>Saúde e Cuidados Pessoais</option>
                  </select>
                </div>
                <div className={styles["search-field"]}>
                  <label>Pesquisa Amazon.com.br</label>
                  <input placeholder="Pesquisa Amazon.com.br"/>
                </div>
                <div className={styles["search-submit"]}>
                  <span>
                    <input/>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className={styles["nav-right"]}>
            <div className={styles["nav-tools"]}>
              <Link href="/">
                <div>
                  <span>
                    Olá, faça seu login
                  </span>
                </div>
                <span className="font-bold">
                  Contas e Listas
                  <span></span>
                </span>
              </Link>
              <Link href="/">
                <span>Devoluções</span>
                <span className="font-bold">e Pedidos</span>
              </Link>
              <Link href="/">
                <div>
                  <span className="font-bold">0</span>
                  <span></span>
                </div>
                <div>
                  <span className="font-bold">Carrinho</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles["nav-bottom"]}>
          <div className={styles["nav-left-bottom"]}>
            <Link href="#">
              <i></i>
              <span className="font-bold">Todos</span>
            </Link>
          </div>
          <div className={styles["nav-mid-bottom"]}>
            <Link href="#">Venda na Amazon</Link>
            <Link href="#">Mais Vendidos</Link>
              <Link href="#">Ofertas do Dia</Link>
              <Link href="#">
                <span>Prime</span>
                <span></span>
              </Link>
              <Link href="#">Livros</Link>
              <Link href="#">Música</Link>
              <Link href="#">Ideias de Presente</Link>
              <Link href="#">Eletrônicos</Link>
              <Link href="#">Novidades na Amazon</Link>
              <Link href="#">Computadores</Link>
              <Link href="#">Casa</Link>
              <Link href="#">Games</Link>
              <Link href="#">Cuidados Pessoais</Link>
              <Link href="#">Beleza</Link>
              <Link href="#">Brinquedos e Jogos</Link>
              <Link href="#">Amazon Moda</Link>
              <Link href="#">Alimentos e Bebidas</Link>
              <Link href="#">Bebês</Link>
              <Link href="#">Ferramentas e Construção</Link>
              <Link href="#">Automotivos</Link>
              <Link href="#">Pet Shop</Link>
              <Link href="#">Atendimento ao Cliente</Link>
              <Link href="#">eBooks Kindle</Link>
          </div>
          <div className={styles["nav-right-bottom"]}></div>
        </div>
      </div>
    </header>
  );
}