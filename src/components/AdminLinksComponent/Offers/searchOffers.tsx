import React, { useState } from "react";

import SearchIconSvg from "../../../assets/img/searchIcon.png";
import Refresh2 from "../../../assets/img/refresh2.svg";
const SearchOffers = () => {
  const [switcher, setSwitcher] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search-offers">
      <div className="d-flex flex-wrap">
        <div className="col-lg-7 col-xs-12">
          <div className="d-flex align-items-center flex-wrap">
            <select name="" id="">
              <option value="">Регион</option>
            </select>
            <select name="" id="">
              <option value="">Направление</option>
            </select>
            <select name="" id="">
              <option value="">Сценарии</option>
            </select>
            <select name="" id="">
              <option value="">Инструменты</option>
            </select>
            <select name="" id="">
              <option value="">Выплаты</option>
            </select>
            <span>Холд 24 часа</span>
            <div className="switchToggle">
              <input
                type="checkbox"
                id="switch"
                name="switch"
                onClick={async () => (
                  await setSwitcher(!switcher), console.log(!switcher)
                )}
              />
              <label htmlFor="switch">Toggle</label> &nbsp;
            </div>
            <img src={Refresh2} alt="" />
          </div>
        </div>
        <div className="col-lg-5 col-xs-12 d-flex align-items-center justify-content-end">
          <div className="form-group fg--search mr-3">
            <input
              type="text"
              className="input"
              value={searchValue}
              onChange={handleChange}
              placeholder="Поиск"
            />
            <button
              type="submit"
              style={{ zIndex: 0 }}
              onClick={() => console.log(searchValue)}
            >
              <img className="m-0" src={SearchIconSvg} alt="search" />
              {/* <i className="fa fa-search"></i> */}
            </button>
          </div>

          <button
            type="button"
            className="filtration-button"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            onClick={() => console.log("Filtr is working")}
          >
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.6547 14.1088C10.6547 14.3115 10.5597 14.4922 10.4117 14.6086L6.84033 17.3931L6.84057 17.3932C6.66431 17.3932 6.48925 17.3202 6.36435 17.1787C6.27173 17.0741 6.213 16.9388 6.20546 16.7901C6.20491 16.7793 6.20463 16.7684 6.20463 16.7574V16.757V10.5963L0.280956 1.86663C0.20794 1.76314 0.165039 1.63691 0.165039 1.50071C0.165039 1.39707 0.189881 1.2992 0.233931 1.21273C0.280998 1.11981 0.351607 1.03718 0.443903 0.974576C0.556961 0.897801 0.686036 0.862418 0.813141 0.865007H16.0456C16.1728 0.86235 16.302 0.897728 16.4152 0.974569C16.7057 1.17164 16.7813 1.56705 16.5843 1.85756L10.6547 10.5959V14.1088Z"
                fill="#4099FF"
              />
            </svg>
            Фильтр
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchOffers;
