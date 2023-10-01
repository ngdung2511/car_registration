import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

const HeroInfo = () => {
  return (
    <div className="flex flex-col justify-center h-full gap-4 px-4 pt-8 pb-4">
      <h1 className="text-4xl font-bold">BadmintonNow</h1>
      <p className="text-lg font-normal">
        Nơi bạn có thể dễ dàng tìm và đặt sân cầu lông cho mọi nhu cầu thể thao
        của bạn. Đặt sân chỉ với vài cú click và chuẩn bị thể hiện tài năng thể
        thao của mình!
      </p>
      <div className="max-w[400px]">
        <NavLink to={"/login"}>
          <Button className=" text-xl md:w-[200px] md:h-[50px] w-full h-[60px]">
            Đăng nhập
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default HeroInfo;
