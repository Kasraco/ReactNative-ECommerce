import { Bag } from "./models/Bag";

const Marketing: any = () => {
  return (
    <div dir="rtl">
      <div className="grid grid-rows-1 lg:grid-cols-2 gap-5">
        <div>
          <Bag />
        </div>
        <div>
          <h1 className="text-5xl mt-24 font-extrabold mb-10 bg-gradient-to-r  from-indigo-950 via-indigo-600 p-t text-transparent bg-clip-text to-indigo-400 drop-shadow-2xl">
            خرید آسان از اپلیکشن فروشگاهی کسری
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
        </div>
      </div>
    </div>
  );
};

export default Marketing;
