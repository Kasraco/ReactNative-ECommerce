import playStore from "../../assets/images/google-play-badge.png";
import bazar from "../../assets/images/badge-new.png";
import direct from "../../assets/images/download.png";
import miket from "../../assets/images/get1-fa.png";
import { TreeApple } from "./models/ThreeApple";

const Apple = () => {
  return (
    <div>
      <div className="grid grid-rows-1 lg:grid-cols-2 gap-5">
        <div>
          <TreeApple />
        </div>
        <div>
          <h1 className="text-5xl mt-24 font-extrabold mb-10 bg-gradient-to-r  from-blue-950 via-blue-400 p-t text-transparent bg-clip-text to-blue-200 drop-shadow-2xl">
            خرید جدیدترین گوشی های موبایل روز دنیا
          </h1>
          <p className="text-justify m-2 leading-10">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام{" "}
          </p>
          <h3 className="text-center mt-5 mb-5 text-2xl text-indigo-950 font-bold">
            دانلود اپلیکشن
          </h3>
          <div className="flex flex-row gap-5 justify-center">
            <a href="">
              <img className="w-52" src={playStore} alt="" />
            </a>
            <a href="">
              <img className="w-52" src={bazar} alt="" />
            </a>
            <a href="">
              <img className="w-52" src={direct} alt="" />
            </a>
            <a href="">
              <img className="w-52" src={miket} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apple;
