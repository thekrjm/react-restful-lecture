import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// https://fontawesome.com/v5/docs/web/use-with/react#get-started 아이콘,폰트 홈페이지
export const Navbar = ({ authenticate }) => {
  const itemList = [
    "Sale",
    "Women",
    "Divided",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Sport",
    "지속가능성",
  ];
  const navigate = useNavigate();
  //input에 onKeyDown는 기능키 외의 키에 모두 반응함
  const goToLogin = () => {
    navigate("/login");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      const keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div className="nav-container">
      <div className="login-box">
        <FontAwesomeIcon icon={faCoffee} />
        <div onClick={goToLogin}>
          {authenticate === true ? "로그아웃" : "로그인"}
        </div>
      </div>
      <div className="img-box">
        <a href="/">
          <img
            className="logo-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWX-khOf9-4QEQSMTZQ_Nip-as5dQom0MnBVgpvDK-QQ&s"
            alt="로고이미지"
          />
        </a>
      </div>
      <div className="menu-tab">
        <div className="menu-extra-area"></div>
        <ul className="item-list">
          {itemList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="input-box">
          <button className="button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            className="search"
            type="text"
            onKeyDown={(event) => search(event)}
            placeholder="제품검색"
          />
        </div>
      </div>
    </div>
  );
};
