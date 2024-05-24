import React from "react";
import { Oval} from "react-loader-spinner";

const LoadingScreen: React.FC = () => {
  return (
    <div>
      <Oval color="#fff" height={80} width={80} />
    </div>
  );
};

export default LoadingScreen;
