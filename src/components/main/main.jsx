import styles from "./main.module.css";
import photo1 from "../../img/photo1.png";
import photo2 from "../../img/photo2.png";
import photo3 from "../../img/photo3.png";
import photo4 from "../../img/photo4.png";
import photo5 from "../../img/photo5.jpg";
import photo6 from "../../img/photo6.jpg";
import photo7 from "../../img/photo7.png";
import { useState } from "react";
import axios from "axios";
export const Main = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  return (
    <main>
      <div className={styles.main_wrapper}>
        <header className={styles.offer_section}>
          <h1 className={styles.main_title}>
            <p>
              <strong>Залишай своє авто завжди в чистоті!</strong>
            </p>
          </h1>
          <div className={styles.offer_image}>
            <h2 className={styles.main_subtitle}>
              <p>
                <span style={{ color: "rgb(250, 197, 28)" }}>
                  Автомобільний пилосос Белавто Торнадо 12В
                </span>
              </p>
            </h2>
            <img className={styles.offer_product} src="" />
          </div>
          <ul className={`${styles.bull} ${styles.clearfix}`}>
            <li>
              <img height="200" width="200" src={photo4} />
              <h3>
                <p>
                  <span style={{ color: "rgb(250, 197, 28)" }}>
                    Велика коплектація
                  </span>
                </p>
                <span>
                  <p>Набір</p>
                </span>
              </h3>
            </li>
            <li>
              <img height="200" width="200" src={photo5} />
              <h3>
                <p>
                  <span style={{ color: "rgb(250, 197, 28)" }}>Стильно та</span>
                </p>
                <span>
                  <p>Компактно</p>
                </span>
              </h3>
            </li>
            <li>
              <img height="200" width="200" src={photo7} />
              <h3>
                <span>
                  <p>Гарна якість</p>
                </span>
                <p>
                  <span style={{ color: "rgb(250, 197, 28)" }}>
                    усіх частин
                  </span>
                </p>
              </h3>
            </li>
          </ul>
        </header>
        <section className={styles.description}>
          <h2 className={styles.title}>
            <span></span>{" "}
          </h2>
          <div className={styles.txt}>
            <p>
              Автомобільний пилосос «BELAUTO» Торнадо BA53-B – це саме той
              прилад, який допоможе тримати машину в чистоті та порядку, не
              докладаючи при цьому особливих зусиль. Пилосос оснащений фільтром
              НЕРА, вакупним тиском 3500 Па, який залишається стабільним
              протягом збирання. Міцний матеріал АBC-пластик та наявність
              насадок для важкодоступних місць салон автомобіля буде буквально
              сяяти, а перебувати в ньому буде в рази приємнішим
            </p>
          </div>
          <div className={styles.alert}></div>
        </section>
        <section className={styles.sect_1}>
          <h2 className={styles.title}>
            <span>
              <p>ХАРАКТЕРИСТИКИ</p>
            </span>
          </h2>
          <img src="" />
          <ul className={styles.list_4}>
            <li>
              <div className={styles.text}>
                <img src={photo1} />
                <h4>
                  <p>Ефективність</p>
                </h4>
                <p>
                  Швидкість обертання двигуна: 32000 об/хв Вакуумний тиск:
                  3,5.Фільтр: HEPA кПа.Що дозволяє легко прибирати на будь-якій
                  поверхні
                </p>
              </div>
            </li>
            <li>
              <div className={styles.text}>
                <img src={photo2} />
                <h4>
                  <p>ЖИВЛЕННЯ</p>
                </h4>
                <p>
                  Живлення від прикурювача; Довжина кабелю живлення: 5 м.
                  Пилесос швидко заряджається та довго тримає заряд.
                </p>
              </div>
            </li>
            <li>
              <div className={styles.text}>
                <img src={photo3} />
                <h4>
                  <p>Стиль</p>
                </h4>
                <p>Стильний дизайн.</p>
                <p>Чорний колір</p>
                <p>Усе це дає йому в одночас простоту і привабливий вигляд.</p>
              </div>
            </li>
            <li>
              <div className={styles.text}>
                <img src="https://storgom.ua/cache/i/brands/belauto.1000x1000.jpg" />
                <h4>
                  <p>Матеріал та виробник</p>
                </h4>
                <p>
                  Виготовлений з високоякісних матеріалів, цей пилосос буде
                  служити вашим помічником для очищення протягом тривалого часу.
                  СНГ Виробник(перевірено часом)
                </p>
              </div>
            </li>
          </ul>
          <iframe
            width="480"
            height="315"
            src="https://www.youtube.com/embed/eJTIRFdLeZA?si=Kwre3JOqHRMl7zWz"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>
        {/*sect_2*/}
        <section className={`${styles.sect_2} ${styles.dark_bg}`}>
          <h2 className={styles.title}>
            <p>Повний комплект</p>
            <p className={styles.komplectation}>
              <span>Комплектація:</span> <br />
              Автопилосос,Подовжувач,2 насадки,сумка
            </p>
          </h2>
          <div className={styles.gallery}>
            <img src={photo6} />
          </div>
          <div className={styles.char_container}>
            <a href="#zakaz" className={styles.button}>
              <p>Замовити зі знижкою</p>
            </a>
          </div>
        </section>
        {/*sect_5*/}
        <section className={styles.sect_5}>
          <h2 className={styles.title}>
            <p>Як замовити</p>
            <span>
              <p>доставка та оплата</p>
            </span>
          </h2>
          <ul className={styles.list}>
            <li className={styles.clearfix}>
              <img src="http://lp-mobi.biz/landing-template-assets/footretainer/images/order_1.jpg" />
              <div className={styles.text}>
                <h4>
                  <p>Швидка доставка</p>
                </h4>
                <p>
                  Доставка поштою протягом 1-3 днів. Вартість доставки від 50
                  грн. Новою, або Укрпоштою.
                </p>
              </div>
            </li>
            <li className={styles.clearfix}>
              <img src="http://lp-mobi.biz/landing-template-assets/footretainer/images/order_2.jpg" />
              <div className={styles.text}>
                <h4>
                  <p>Зручна оплата</p>
                </h4>
                <p>
                  Оплата проводиться, тільки після отримання, та огляду товару.
                </p>
              </div>
            </li>
            <li className={styles.clearfix}>
              <img src="http://lp-mobi.biz/landing-template-assets/footretainer/images/123.jpg" />
              <div className={styles.text}>
                <h4>
                  <p>Гарантії</p>
                </h4>
                <p>
                  Вся наша продукція пройшла перевірку на справність, та якість.
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section className={styles.offer_section}>
          <h1 className={styles.main_title}>
            <p>
              <strong>ЗАБУДЬ ПРО БРУД</strong>
            </p>
          </h1>
          <div className={styles.offer_image}>
            <h2 className={styles.main_subtitle}>
              <p>
                <span style={{ color: "rgb(250, 197, 28)" }}>
                  Використовуй авто-пилесос
                </span>
              </p>
              <span>Для будь якого салону</span>
            </h2>
            <img className={styles.offer_product} src="" />
          </div>
          <ul className={`${styles.bull} ${styles.clearfix}`}>
            <li>
              <img
                height="200"
                width="200"
                src="https://a.d-cd.net/99a025u-960.jpg"
              />
              <h3>
                <span></span>
              </h3>
            </li>
            <li>
              <img
                height="200"
                width="200"
                src="https://rusautolack.ru/storage/app/media/news//2a5/_18007.jpg"
              />
              <h3>
                <span></span>
              </h3>
            </li>
            <li>
              <img
                height="200"
                width="200"
                src="https://a.d-cd.net/6b71785s-960.jpg"
              />
              <h3>
                <span></span>
              </h3>
            </li>
          </ul>
          <div className={styles.price}>
            <div className={styles.old}>
              <p>Звичайна ціна:</p>
              <span>
                <p>1699 грн</p>
              </span>
            </div>
            <div className={styles.new}>
              <p>Ціна по акції:</p>
              <small></small>
              <span>899</span>
              <small>грн.</small>
            </div>
          </div>
          <div className={styles.zakaz_cont} id="zakaz"> 
            <input
              type="text"
              placeholder="Ваше ім'я"
              value={name}
              onChange={(evt) => {
                setName(evt.target.value);
              }}
            />
            <input
              type="tel"
              placeholder="Ваш номер телефону"
              value={tel}
              onChange={(evt) => {
                setTel(evt.target.value);
              }}
            />
            <input
              type="mail"
              placeholder="Ваша пошта"
              value={mail}
              onChange={(evt) => {
                setMail(evt.target.value);
              }}
            />
            <button
              onClick={() => {
                const obj = {
                  name,
                  tel,
                  mail,
                };
                axios
                  .post(
                    "https://65d668fcf6967ba8e3be1c66.mockapi.io/towarka/orders",
                    obj
                  )
                  .then((response) => {
                    // Обработка успешного ответа
                    console.log("Заявка успішно відправлена");
                  })
                  .catch((error) => {
                    // Обработка ошибки
                    console.error("Помилка замовлення");
                  });
                setMail("");
                setName("");
                setTel("");
              }}
            >
              ЗАМОВИТИ
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};
