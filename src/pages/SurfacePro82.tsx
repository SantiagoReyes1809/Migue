import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";

const SurfacePro82: FunctionComponentSurfacePro82Type = () => {
  const navigate = useNavigate();

  const onImage5Click = useCallback(() => {
    navigate("/surface-pro-8-1");
  }, [navigate]);

  return (
    <div className="w-full relative bg-azure-300 overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[461px] box-border gap-[5px] leading-[normal] tracking-[normal]">
      <header className="w-[1141px] flex flex-row items-start justify-between py-0 pr-0 pl-5 box-border gap-[20px] max-w-full text-left text-29xl text-black font-body-p">
        <div className="w-[750px] flex flex-col items-start justify-start pt-[38px] px-0 pb-0 box-border max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[72px] font-normal font-inherit whitespace-nowrap">{`Habilidades `}</h1>
        </div>
        <img
          className="h-[63px] w-[76px] relative object-cover cursor-pointer"
          loading="lazy"
          alt=""
          src="/image-5@2x.png"
          onClick={onImage5Click}
        />
      </header>
      <FrameComponent />
    </div>
  );
};

export default SurfacePro82;
