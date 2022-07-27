import { Link } from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--notfound">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--notfound">
        <div className="page__login-container container">
          <section className="notfound">
            <h1 className="notfound__title">404 Not Found</h1>
            <Link className="locations__item-link" to="/">
              <span>To main page</span>
            </Link>
          </section>
        </div>
      </main>
    </div>);
}

export default NotFound;
