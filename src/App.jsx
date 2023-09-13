import "./App.css";

function App() {
  return (
    <>
      <div>
        <div className="clr">
          <div className="nav">
            <h1>02.</h1>
            <b>CLIMB</b>
            <p>
              “The rooms were very still while the pages were softly turned and
              the winter sunshine crept in to touch the bright heads and serious
              faces with a Christmas greeting.” - Louisa May Alcott
            </p>
          </div>
        </div>
        <div className="link">
          <a href="/">MOUNTAIN 1</a>
          <a href="/">MOUNTAIN 2</a>
        </div>

        <div className="img_cls">
          <div className="form_cls">
            <form>
              <h1>SCHEDULE</h1>
              <div>
                <p>12 Sep 2023</p>
                <p>Lorem ipsum dolor</p>
              </div>
              <div>
                <p>12 Sep 2023</p>
                <p>Lorem ipsum dolor</p>
              </div>
              <br />

              <div>
                <p>12 Sep 2023</p>
                <p>Lorem ipsum dolor</p>
              </div>
              <br />
              <div>
                <p>12 Sep 2023</p>
                <p>Lorem ipsum dolor</p>
              </div>
            </form>
          </div>
        </div>
        <footer>
          <img src="/images/logo.jpg" alt="" />
          <div>
            <h3>LOSANGELES</h3>
            <h3 className="last">MOUNTAINS</h3>
          </div>
        </footer>
        <div className="text">
          <p>COPYRIGHT @2023. ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </>
  );
}

export default App;
