"use client"
import Link from "next/link";
import styles from "./contentPage.module.css";
import Carousel from "../carousel/carousel";
import Slider from "../slider/slider.js";
import { slider1Images, slider2Images, slider3Images } from "../../lib/sliderData";

export default function ContentPage() {
  return (
    <div className={styles["page-content"]}>
      <Carousel/>
      <div className={styles["shop-content"]}>
        <div>
          <div className={styles["shop-card"]}>
            <div className={styles["card-layout-dif"]}>
              <div className={styles["card-header"]}>
                <h2 className="font-bold">Semana de Ofertas Alexa: até 28% off</h2>
              </div>
              <div>
                <div>
                  <div>
                    <Link href="#" className={styles["card-link-dif"]}>
                      <div>
                        <img src="./cards_imgs/echo-pop.jpg" alt="echo-pop"/>
                      </div>
                      <div>
                        <span>Echo Pop</span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link href="#" className={styles["card-link-dif"]}>
                      <div>
                        <img src="./cards_imgs/echo-dot.jpg" alt="echo-dot"/>
                      </div>
                      <div>
                        <span>Echo Dot</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div>
                  <div>
                    <Link href="#" className={styles["card-link-dif"]}>
                      <div>
                        <img src="./cards_imgs/fire-tv-stick.jpg" alt="fire-tv-stick"/>
                      </div>
                      <div>
                        <span>Fire TV Stick</span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link href="#" className={styles["card-link-dif"]}>
                      <div>
                        <img src="./cards_imgs/lampada.jpg" alt="lampada"/>
                      </div>
                      <div>
                        <span>Lâmpada Inteligente</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <Link href="#">
                  Confira tudo em Dispositivos Amazon
                </Link>
              </div>
            </div>
          </div>
          <div className={styles["shop-card"]}>
            <div className={styles["card-layout"]}>
              <div className={styles["card-header"]}>
                <h2 className="font-bold">Ofertas do Dia: Até 40% de desconto</h2>
              </div>
              <Link href="#" className={styles["card-link"]}>
                <div>
                  <div>
                    <img src="./cards_imgs/jbl.jpg" alt="jbl"/>
                  </div>
                </div>
                <div>
                  <span>
                    <span>Ver Ofertas do Dia</span>
                    <span>Ver Ofertas do Dia</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles["shop-card"]}>
            <div className={styles["card-layout"]}>
              <div className={styles["card-header"]}>
                <h2 className="font-bold">Audiolivros com 30% de desconto</h2>
              </div>
              <Link href="#" className={styles["card-link"]}>
                <div>
                  <div>
                    <img src="./cards_imgs/audible.jpg" alt="audible"/>
                  </div>
                </div>
                <div>
                  <span>
                    <span>Mais um benefício da assinatura Audible</span>
                    <span>Mais um benefício da assinatura Audible</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles["shop-card"]}>
            <div className={styles["sign-in-box"]}>
              <div>
                <div className={styles["card-header"]}>
                  <h2 className="font-bold">Acesse uma conta para ter a melhor experiência</h2>
                </div>
                <div>
                  <span>
                    <Link href="#">Fazer login de forma segura</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Slider title="Navegue pelas categorias, de A a Z" images={slider1Images}/>
          <hr/>
          <Slider title="Mais Vendidos em Dispositivos Amazon e Acessórios" images={slider2Images}/>
          <hr/>
          <Slider title="Mais Vendidos em Loja Kindle" images={slider3Images}/>
          <hr/>
          <div className={styles["shop-card"]}>
            <div className={styles["card-layout"]}>
              <div className={styles["card-header"]}>
                <h2 className="font-bold">Tudo para Exercícios e Academia</h2>
              </div>
              <Link href="#" className={styles["card-link"]}>
                <div>
                  <div>
                    <img src="./cards_imgs/academia.jpg" alt="academia"/>
                  </div>
                </div>
                <div>
                  <span>
                    <span>Veja mais em Exercícios</span>
                    <span>Veja mais em Exercícios</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles["shop-card"]}>
            <div className={styles["card-layout"]}>
              <div className={styles["card-header"]}>
                <h2 className="font-bold">Livros Importados até R$ 100</h2>
              </div>
              <Link href="#" className={styles["card-link"]}>
                <div>
                  <div>
                    <img src="./cards_imgs/livros.jpg" alt="livros"/>
                  </div>
                </div>
                <div>
                  <span>
                    <span>Confira a seleção de Livros Importados</span>
                    <span>Confira a seleção de Livros Importados</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles["shop-card"]}>
            <div className={styles["card-layout-dif"]}>
              <div className={styles["card-header"]}>
                <h2 className="font-bold">Pet Shop até R$100</h2>
              </div>
              <div>
                <div>
                  <div>
                    <Link href="#" className={styles["card-link-dif"]}>
                      <div>
                        <img src="./cards_imgs/gato.jpg" alt="gatos"/>
                      </div>
                      <div>
                        <span>Gatos</span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link href="#" className={styles["card-link-dif"]}>
                      <div>
                        <img src="./cards_imgs/caes.jpg" alt="cães"/>
                      </div>
                      <div>
                        <span>Cães</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div>
                  <div>
                    <Link href="#" className={styles["card-link-dif"]}>
                      <div>
                        <img src="./cards_imgs/rato.jpg" alt="ratos"/>
                      </div>
                      <div>
                        <span>Roedores</span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link href="#" className={styles["card-link-dif"]}>
                      <div>
                        <img src="./cards_imgs/peixes.jpg" alt="peixes"/>
                      </div>
                      <div>
                        <span>Peixes</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <Link href="#">
                  Veja mais em Pet Shop
                </Link>
              </div>
            </div>
          </div>
          <div className={styles["shop-card"]}>
            <div className={styles["card-layout"]}>
              <div className={styles["card-header"]}>
                <h2 className="font-bold">Fallout</h2>
              </div>
              <Link href="#" className={styles["card-link"]}>
                <div>
                  <div>
                    <img src="./cards_imgs/fallout.jpg" alt="fallout"/>
                  </div>
                </div>
                <div>
                  <span>
                    <span>Nova série 11 de abril</span>
                    <span>Veja mais em Exercícios</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <hr/>
        </div>
      </div>
    </div>
  )
}
