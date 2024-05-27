import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SurfacePro83: FunctionComponentSurfacePro83Type = () => {
  const navigate = useNavigate();

  const onImage4Click = useCallback(() => {
    navigate("/surface-pro-8-1");
  }, [navigate]);

  const onHobbiesTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactoTextClick = useCallback(() => {
    // Please sync "Surface Pro 8 - 6" to the project
  }, []);

  const onHabilidadesTextClick = useCallback(() => {
    navigate("/surface-pro-8-4");
  }, [navigate]);

  const onSobreMiTextClick = useCallback(() => {
    navigate("/surface-pro-8-3");
  }, [navigate]);

  return (
    <div className="w-full relative bg-azure-100 overflow-hidden flex flex-col items-start justify-start pt-2.5 px-0 pb-[291px] box-border gap-[25px] leading-[normal] tracking-[normal]">
      <header className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-29xl text-black font-body-p">
        <div className="w-[1148px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end">
            <img
              className="h-[63px] w-[76px] relative object-cover cursor-pointer"
              loading="lazy"
              alt=""
              src="/image-5@2x.png"
              onClick={onImage4Click}
            />
          </div>
          <h1 className="m-0 w-[750px] relative text-inherit tracking-[-0.01em] leading-[72px] font-normal font-inherit inline-block max-w-full">
            Experiencia
          </h1>
        </div>
      </header>
      <section className="w-[889px] flex flex-row flex-wrap items-start justify-start py-0 pr-5 pl-0 box-border gap-[20px] max-w-full text-left text-lg text-gray font-body-p">
        <div className="h-96 w-[55px] flex flex-col items-start justify-start pt-[29px] px-0 pb-0 box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/image-21@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[38px] min-w-[516px] max-w-full mq675:min-w-full mq450:gap-[19px]">
          <div className="w-[760px] flex flex-row items-start justify-start pt-0 px-[5px] pb-[3px] box-border relative max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
              <p className="!m-[0] w-[618px] absolute right-[-111px] bottom-[-2px] tracking-[-0.01em] leading-[30px] whitespace-pre-wrap [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">{`Por el momento no cuento con experiencia en el mundo laboral pero espero muy pronto empezarlo a hacer por mientras  a seguir con mi continuo aprendizaje `}</p>
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
            <div className="absolute !m-[0] bottom-[0px] left-[0px] tracking-[-0.01em] leading-[31px] inline-block min-w-[110px] z-[2]">
              Experiencia
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div
              className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[88px] cursor-pointer"
              onClick={onContactoTextClick}
            >
              Contacto
            </div>
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq675:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-7 px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[38px]">
                  <div
                    className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[110px] cursor-pointer"
                    onClick={onHabilidadesTextClick}
                  >
                    Habilidades
                  </div>
                  <div
                    className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[88px] cursor-pointer"
                    onClick={onSobreMiTextClick}
                  >
                    Sobre mi
                  </div>
                </div>
              </div>
              <img
                className="w-[474px] relative max-h-full object-cover max-w-full"
                loading="lazy"
                alt=""
                src="/image-27@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SurfacePro83;
