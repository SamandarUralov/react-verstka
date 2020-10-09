import React, { useState } from "react";

import "../../../style.css";

import OfferImg from "../../../assets/img/offer.png";

import Modal from "../../Modal/modal";
import SearchOffers from "./searchOffers";

const DashboardOffers: React.FC = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      {/* MAPPING PROP ITEMS */}
      {/* {props.map(items =>
      <div key={items.key} className="container-fluid">
        <div className="row">
          <div className="content">
            <SearchOffers />
            <div className="offer col-lg-12">
              <div className="d-flex bg-white">
                <img className="" src={itmes.img} alt="" />
                <div className="d-flex flex-wrap align-items-center">
                  <div className="col-md-12">
                    <div className="d-flex align-items-center">
                      <div className="d-flex flex-column py-3">
                        <h3>{items.title}</h3>
                        <p>{items.text}
                        </p>
                      </div>
                      <a className="site-button d-block" href="">
                        СОЗДАТЬ ПОТОК
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12 offer-text">
                    <div className="row">
                      <div className="filterBy">
                        <h5>Регион</h5>
                        {items.city.map(el => {
                            <span key={el}>{el}</span>
                        })}
                      </div>
                      <div className="filterBy">
                      {items.filterBy.map(filter => {
                          <h5>.filter.name</h5>
                          <span>{filter.text}</span>
                      })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )} */}
      {/* ----------   */}
      <div className="container-fluid">
        <Modal modal={modal} />
        <div className="row">
          <div className="content">
            <SearchOffers />
            <div className="offer col-lg-12">
              <div className="d-flex bg-white">
                <img className="" src={OfferImg} alt="" />
                <div className="d-flex flex-wrap align-items-center">
                  <div className="col-md-12">
                    <div className="d-flex align-items-center">
                      <div className="d-flex flex-column py-3">
                        <h3>Компьютерная помощь</h3>
                        <p>
                          Ремонт и обслуживание компьютеров на дому — услуга,
                          которая актуальна для всех слоев населения, от
                          домохозяек и студентов, до дизайнеров и банкиров. Мы
                          работаем в более чем 60 регионах Российской Федерации,
                          а также на территории Республики Беларусь и Украины.
                          Подробно
                        </p>
                      </div>
                      <a className="site-button d-block" href="">
                        СОЗДАТЬ ПОТОК
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12 offer-text">
                    <div className="row">
                      <div className="filterBy">
                        <h5>Регион</h5>
                        <span>Россия</span>
                        <span>Украина</span>
                        <span>Казахстан</span>
                        <span>Литва</span>
                        <span>Польша</span>
                        <span>Эстония</span>
                      </div>
                      <div className="filterBy">
                        <h5>Направление</h5>
                        <span>Компьютерная помощь</span>
                      </div>
                      <div className="filterBy">
                        <h5>Сценарии</h5>
                        <span>Частный мастер</span>
                        <span>Компания</span>
                      </div>
                      <div className="filterBy">
                        <h5>Инструменты</h5>
                        <span>Конструктор форм</span>
                        <span>Лендинги</span>
                        <span>Сайт в системе</span>
                      </div>
                      <div className="filterBy">
                        <h5>Выплата</h5>
                        <span>CPO 551 - 706 руб.</span>
                        <span>CPO 200 - 350 руб.</span>
                      </div>
                      <div className="filterBy">
                        <h5>Холд</h5>
                        <span>24 часа</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offer col-lg-12">
              <div className="d-flex bg-white">
                <img className="" src={OfferImg} alt="" />
                <div className="d-flex flex-wrap align-items-center">
                  <div className="col-md-12">
                    <div className="d-flex align-items-center">
                      <div className="d-flex flex-column py-3">
                        <h3>Компьютерная помощь</h3>
                        <p>
                          Ремонт и обслуживание компьютеров на дому — услуга,
                          которая актуальна для всех слоев населения, от
                          домохозяек и студентов, до дизайнеров и банкиров. Мы
                          работаем в более чем 60 регионах Российской Федерации,
                          а также на территории Республики Беларусь и Украины.
                          Подробно
                        </p>
                      </div>
                      <a className="site-button d-block" href="">
                        СОЗДАТЬ ПОТОК
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12 offer-text">
                    <div className="row">
                      <div className="filterBy">
                        <h5>Регион</h5>
                        <span>Россия</span>
                        <span>Украина</span>
                        <span>Казахстан</span>
                        <span>Литва</span>
                        <span>Польша</span>
                        <span>Эстония</span>
                      </div>
                      <div className="filterBy">
                        <h5>Направление</h5>
                        <span>Компьютерная помощь</span>
                      </div>
                      <div className="filterBy">
                        <h5>Сценарии</h5>
                        <span>Частный мастер</span>
                        <span>Компания</span>
                      </div>
                      <div className="filterBy">
                        <h5>Инструменты</h5>
                        <span>Конструктор форм</span>
                        <span>Лендинги</span>
                        <span>Сайт в системе</span>
                      </div>
                      <div className="filterBy">
                        <h5>Выплата</h5>
                        <span>CPO 551 - 706 руб.</span>
                        <span>CPO 200 - 350 руб.</span>
                      </div>
                      <div className="filterBy">
                        <h5>Холд</h5>
                        <span>24 часа</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offer col-lg-12">
              <div className="d-flex bg-white">
                <img className="" src={OfferImg} alt="" />
                <div className="d-flex flex-wrap align-items-center">
                  <div className="col-md-12">
                    <div className="d-flex align-items-center">
                      <div className="d-flex flex-column py-3">
                        <h3>Компьютерная помощь</h3>
                        <p>
                          Ремонт и обслуживание компьютеров на дому — услуга,
                          которая актуальна для всех слоев населения, от
                          домохозяек и студентов, до дизайнеров и банкиров. Мы
                          работаем в более чем 60 регионах Российской Федерации,
                          а также на территории Республики Беларусь и Украины.
                          Подробно
                        </p>
                      </div>
                      <a className="site-button d-block" href="">
                        СОЗДАТЬ ПОТОК
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12 offer-text">
                    <div className="row">
                      <div className="filterBy">
                        <h5>Регион</h5>
                        <span>Россия</span>
                        <span>Украина</span>
                        <span>Казахстан</span>
                        <span>Литва</span>
                        <span>Польша</span>
                        <span>Эстония</span>
                      </div>
                      <div className="filterBy">
                        <h5>Направление</h5>
                        <span>Компьютерная помощь</span>
                      </div>
                      <div className="filterBy">
                        <h5>Сценарии</h5>
                        <span>Частный мастер</span>
                        <span>Компания</span>
                      </div>
                      <div className="filterBy">
                        <h5>Инструменты</h5>
                        <span>Конструктор форм</span>
                        <span>Лендинги</span>
                        <span>Сайт в системе</span>
                      </div>
                      <div className="filterBy">
                        <h5>Выплата</h5>
                        <span>CPO 551 - 706 руб.</span>
                        <span>CPO 200 - 350 руб.</span>
                      </div>
                      <div className="filterBy">
                        <h5>Холд</h5>
                        <span>24 часа</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOffers;
