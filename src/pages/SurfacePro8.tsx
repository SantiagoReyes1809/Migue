import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContentColumn from "../components/ContentColumn";

const SurfacePro8: FunctionComponentSurfacePro8Type = () => {
  const navigate = useNavigate();

  const onImage4Click = useCallback(() => {
    navigate("/surface-pro-8-1");
  }, [navigate]);

  return (
    <div className="w-full h-[960px] relative bg-azure-200 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq975:h-auto">
      <main className="w-[1453px] bg-azure-500 overflow-hidden shrink-0 flex flex-col items-end justify-start pt-0 pb-[395px] pr-[21px] pl-0 box-border gap-[57px] [debug_commit:bf4bc93] max-w-[101%] text-center text-[15px] text-actionable-item font-body-p mq450:pb-[167px] mq450:box-border mq975:gap-[28px] mq975:pb-[257px] mq975:box-border">
        <div className="w-[130px] h-10 relative hidden whitespace-nowrap">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border hidden border-[1px] border-solid border-actionable-item" />
          <div className="absolute top-[27.5%] left-[16.92%] tracking-[-0.01em] font-medium hidden">
            Learn more
          </div>
        </div>
        <img
          className="w-[63px] h-[63px] relative object-cover cursor-pointer"
          loading="lazy"
          alt=""
          src="/image-4@2x.png"
          onClick={onImage4Click}
        />
        <section className="self-stretch flex flex-row items-start justify-start max-w-full">
          <ContentColumn />
        </section>
      </main>
    </div>
  );
};

export default SurfacePro8;
