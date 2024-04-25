// import { IoPersonCircleOutline } from "react-icons/io5";
// import { HiPlusSm } from "react-icons/hi";

import Auth from "../auth/Auth";

import Logo from "/logo.jpg";
import HelpImage from "/help-image.svg";

import "/src/reset.css";
import "./home.css";

function Home() {
  return (
    <div className="App">
      <header className="header">
        <img src={Logo} alt="help-logo" className="help-logo" />

        <div className="menu">
          <button className="add-button"> Додати оголошення</button>
          <Auth />
          {/* <IoPersonCircleOutline className="person-icon" /> */}
        </div>
      </header>

      <div className="main-content">
        <h1 className="main-heading">
          Потрібна допомога? Знаходьте та пропонуйте послуги тут!
        </h1>
        <p className="main-paragraph">
          Ласкаво просимо на нашу платформу, де люди з усього світу збираються
          разом, щоб надавати або отримувати допомогу. Незалежно від того, чи
          шукаєте ви професійні послуги або допомогу в повсякденних потребах,
          тут ви знайдете все, що потрібно!
        </p>
        <p className="main-paragraph">
          Наша місія полягає в тому, щоб зробити процес пошуку та надання
          допомоги легким і ефективним. На нашій платформі ви зможете
          розміщувати свої оголошення про потрібну допомогу або відгукуватися на
          запити інших користувачів. Незалежно від того, чи потрібна вам медична
          допомога, підтримка в навчанні, догляд за дітьми або будь-яка інша
          форма підтримки - ми тут, щоб забезпечити зручну і безпечну платформу
          для вас.
        </p>
        <p className="main-paragraph">
          Реєстрація на нашому сайті безкоштовна і проста. Просто створіть
          акаунт, розмістіть своє оголошення або перегляньте інші запити, і
          починайте отримувати або надавати допомогу вже сьогодні!
        </p>
        <p className="main-paragraph">
          Приєднуйтеся до нашої спільноти сьогодні і робіть світ кращим разом з
          нами!
        </p>
        <img src={HelpImage} alt="help-main-image" className="help-image" />

        <div className="left-menu"></div>
      </div>
    </div>
  );
}

export default Home;
