import playStore from "../../assets/images/google-play-badge.png";
import bazar from "../../assets/images/badge-new.png";
import direct from "../../assets/images/download.png";
import miket from "../../assets/images/get1-fa.png";
const Footer: any = () => {
  return (
    <div dir="rtl">
      <footer className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-500">
        <br />
        <h3 className="text-center m-100 text-3xl text-white font-bold">
          دانلود اپلیکیشن ها
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
        <ul className="flex gap-6 m-5  text-slate-100">
          <li>
            <a href="/About">دربار ما |</a>
          </li>
          <li>
            <a href="/Contact">تماس با ما | </a>
          </li>
          <li>
            <a href="/">صفحه اصلی |</a>
          </li>
        </ul>
        <div>
          <p className="text-center text-indigo-300">
            {" "}
            تمامی حقوق این سایت متعلق به IamDev.ir میباشد
          </p>
        </div>
        <br />
        <p className="text-center text-indigo-200 text-sm">
          طراحی و توسعه IamDev.ir
        </p>
        <br />
      </footer>
    </div>
  );
};

export default Footer;
