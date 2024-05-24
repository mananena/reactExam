import { Button } from "antd";
import { useState } from "react";
import Navbar from "./navbar/Navbar";
import MainRouter from "./routes/MainRouter";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <Navbar />
      <Button
        onClick={() => {
          setIsAuth(!isAuth);
        }}
      >
        {isAuth ? "Выйти!" : "Войти!"}
      </Button>
      <MainRouter />
    </>
  );
};

export default App;
