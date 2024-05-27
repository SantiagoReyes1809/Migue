import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onHobbiesTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExperienciaTextClick = useCallback(() => {
    navigate("/surface-pro-8-5");
  }, [navigate]);

  const onContactoTextClick = useCallback(() => {
    // Please sync "Surface Pro 8 - 6" to the project
  }, []);

  const onHabilidadesText1Click = useCallback(() => {
    navigate("/surface-pro-8-4");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start max-w-full text-left text-lg text-gray font-body-p ${className}`}
    >
      <div className="w-[1185px] flex flex-row flex-wrap items-end justify-start py-0 pr-5 pl-0 box-border gap-[70px] max-w-full lg:gap-[35px] mq750:gap-[17px]">
        <div className="flex-1 flex flex-row items-end justify-start gap-[20px] max-w-full mq750:flex-wrap mq750:min-w-full">
          <img
            className="h-[355px] w-[55px] relative object-cover"
            loading="lazy"
            alt=""
            src="/image-21@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[38px] min-w-[538px] max-w-full mq750:min-w-full mq450:gap-[19px]">
            <div className="w-[760px] flex flex-col items-start justify-start pt-0 px-[5px] pb-[3px] box-border relative max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <p className="!m-[0] w-[686px] absolute right-[-153px] bottom-[-32px] tracking-[-0.01em] leading-[30px] whitespace-pre-wrap inline-block">
                  Mis habilidades en el mundo del software estan en crecimiento
                  debido al continuo aprendizaje en los diferentes tipos de
                  lenguajes de programascion como lo son Java, JavaScript,
                  Python,SQL..
                </p>
                <h1 className="m-0 h-36 flex-1 relative text-29xl tracking-[-0.01em] leading-[72px] font-normal font-inherit text-black inline-block max-w-full z-[1] mq450:text-10xl mq450:leading-[43px] mq1050:text-19xl mq1050:leading-[58px]">
                  <p className="m-0">&nbsp;</p>
                </h1>
              </div>
              <div
                className="w-[88px] absolute !m-[0] top-[47px] left-[0px] tracking-[-0.01em] leading-[31px] inline-block cursor-pointer z-[2]"
                onClick={onHobbiesTextClick}
              >
                Hobbies
              </div>
              <div
                className="absolute !m-[0] bottom-[0px] left-[0px] tracking-[-0.01em] leading-[31px] inline-block min-w-[110px] cursor-pointer z-[2]"
                onClick={onExperienciaTextClick}
              >
                Experiencia
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
              <div
                className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[88px] cursor-pointer"
                onClick={onContactoTextClick}
              >
                Contacto
              </div>
              <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] mq750:flex-wrap">
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-7">
                  <div className="flex flex-col items-start justify-start gap-[38px]">
                    <div
                      className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[110px] cursor-pointer"
                      onClick={onHabilidadesText1Click}
                    >
                      Habilidades
                    </div>
                    <div className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[88px]">
                      Sobre mi
                    </div>
                  </div>
                </div>
                <div className="h-[122px] w-[332px] flex flex-col items-start justify-start max-w-full">
                  <img
                    className="w-[212px] flex-1 relative max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/image-23@2x.png"
                  />
                </div>
                <img
                  className="h-[159px] w-[161px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-25@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[159px] w-[193px] flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/image-26@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
