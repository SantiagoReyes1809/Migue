import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SurfacePro81: FunctionComponentSurfacePro81Type = () => {
  const navigate = useNavigate();

  const onImage3Click = useCallback(() => {
    navigate("/surface-pro-8-1");
  }, [navigate]);

  const onHobbiesTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExperienciaTextClick = useCallback(() => {
    navigate("/surface-pro-8-5");
  }, [navigate]);

  const onContactoTextClick = useCallback(() => {
    // Please sync "Surface Pro 8 - 6" to the project
  }, []);

  const onHabilidadesTextClick = useCallback(() => {
    navigate("/surface-pro-8-4");
  }, [navigate]);

  return (
    <div className="w-full relative bg-azure-400 overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[129px] box-border gap-[37.4px] leading-[normal] tracking-[normal] mq750:gap-[19px]">
      <img
        className="w-[65px] h-[63px] relative object-cover cursor-pointer"
        loading="lazy"
        alt=""
        src="/image-3@2x.png"
        onClick={onImage3Click}
      />
      <main className="self-stretch flex flex-row items-start justify-start max-w-full">
        <section className="w-[1038px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[6.7px] max-w-full text-left text-29xl text-black font-body-p">
          <div className="self-stretch flex flex-row items-start justify-end max-w-full">
            <h1 className="m-0 w-[750px] relative text-inherit tracking-[-0.01em] leading-[59.9px] font-normal font-inherit inline-block shrink-0 max-w-full mq450:text-10xl mq450:leading-[43px] mq750:text-19xl mq750:leading-[58px]">
              Sobre mi
            </h1>
          </div>
          <div className="w-[830px] flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full text-lg text-gray">
            <div className="h-96 w-[55px] flex flex-col items-start justify-start pt-[29px] px-0 pb-0 box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/image-21@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[39px] min-w-[491px] max-w-full mq675:min-w-full mq750:gap-[19px]">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-[3px] pr-0 pl-[5px] box-border relative max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                  <p className="!m-[0] w-[786px] absolute right-[-224px] bottom-[-61px] tracking-[-0.01em] leading-[30px] whitespace-pre-wrap inline-block">{`Hola soy Miguel Angel Cajigas Delgado tengo 20 años  vivo en Pasto soy originario de Sandona Nariño me gradue en la Escula Normal superior de Pasto y actualmente estoy cursando 5to semestre de la carrera Ingenieria de Software en Universidad Cooperativa de Colombia `}</p>
                  <h1 className="m-0 h-36 flex-1 relative text-29xl tracking-[-0.01em] leading-[72px] font-normal font-inherit text-black inline-block max-w-full z-[1] mq450:text-10xl mq450:leading-[43px] mq750:text-19xl mq750:leading-[58px]">
                    <p className="m-0">&nbsp;</p>
                  </h1>
                </div>
                <a
                  className="[text-decoration:none] w-[88px] absolute !m-[0] top-[47px] left-[0px] tracking-[-0.01em] leading-[31px] text-[inherit] inline-block cursor-pointer z-[2]"
                  onClick={onHobbiesTextClick}
                >
                  Hobbies
                </a>
                <div
                  className="absolute !m-[0] bottom-[0px] left-[0px] tracking-[-0.01em] leading-[31px] inline-block min-w-[110px] cursor-pointer z-[2]"
                  onClick={onExperienciaTextClick}
                >
                  Experiencia
                </div>
              </div>
              <a
                className="[text-decoration:none] relative tracking-[-0.01em] leading-[31px] text-[inherit] inline-block min-w-[88px] cursor-pointer"
                onClick={onContactoTextClick}
              >
                Contacto
              </a>
              <div className="w-[686px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start gap-[38px]">
                  <div
                    className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[110px] cursor-pointer"
                    onClick={onHabilidadesTextClick}
                  >
                    Habilidades
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[88px]">
                    Sobre mi
                  </div>
                </div>
                <img
                  className="h-[408px] w-[306px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/whatsapp-image-20240423-at-648-2@2x.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SurfacePro81;
