import css from '../Loader/Loader.module.css'
//npm install react-loader-spinner
import { Circles } from "react-loader-spinner";

export const Loader = () => {
    return (
    <div className={css.containerLoder}>
      <Circles
        left="50px"
        height="80"
        width="80"
        color="#00000"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
    
}