import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SurfacePro8: FunctionComponentSurfacePro8Type = () => {
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

  const onHabilidadesTextClick = useCallback(() => {
    navigate("/surface-pro-8-4");
  }, [navigate]);

  const onSobreMiText1Click = useCallback(() => {
    navigate("/surface-pro-8-3");
  }, [navigate]);

  return (
    <div className="w-full h-[960px] relative bg-azure-700 overflow-hidden flex flex-row items-start justify-start pt-[65px] px-0 pb-[295px] box-border leading-[normal] tracking-[normal] text-left text-lg text-gray font-body-p">
      <div className="h-[600px] w-[1680px] relative bg-white overflow-hidden shrink-0 hidden max-w-full">
        <b className="absolute top-[188px] left-[1060px] text-5xl tracking-[-0.01em] leading-[36px] inline-block w-[686px] h-9 text-black mq450:text-[19px] mq450:leading-[29px]">
          <span>{`Hola soy `}</span>
          <span className="text-mediumblue">Miguel Cajigas</span>
        </b>
        <div className="absolute top-[0px] left-[948px] text-29xl tracking-[-0.01em] leading-[72px] font-montaga text-black inline-block w-[577px] h-[72px] mq450:text-10xl mq450:leading-[43px] mq767:text-19xl mq767:leading-[58px]">
          Bienvenido a mi Portafolio
        </div>
        <img
          className="absolute top-[215px] left-[789px] w-[51px] h-11 object-cover"
          alt=""
          src="/image-6@2x.png"
        />
        <div className="absolute top-[272px] left-[1017px] tracking-[-0.01em] leading-[30px] whitespace-pre-wrap inline-block w-[478px] h-[120px]">{`Bienvenido a mi portafolio en este te contare todo sobre mi  persona mis experiencias, mis habilidades, mis hobbis y mi contacto espero tengas una muy buena experiencia y te lleves algo lindo de mi `}</div>
        <div className="absolute top-[224px] left-[850px] tracking-[-0.01em] leading-[31px] inline-block w-[88px] h-[31px] min-w-[88px]">
          Sobre mi
        </div>
        <div className="absolute top-[471px] left-[850px] tracking-[-0.01em] leading-[31px] inline-block w-[88px] h-[31px] min-w-[88px]">
          Contacto
        </div>
        <div className="absolute top-[353px] left-[850px] tracking-[-0.01em] leading-[31px] inline-block w-[110px] h-[31px] min-w-[110px]">
          Experiencia
        </div>
        <div className="absolute top-[403px] left-[846px] tracking-[-0.01em] leading-[31px] inline-block w-[110px] h-[31px] min-w-[110px]">
          Habilidades
        </div>
        <div className="absolute top-[292px] left-[850px] tracking-[-0.01em] leading-[31px] inline-block w-[88px] h-[31px]">
          Hobbies
        </div>
      </div>
      <img
        className="h-[41px] w-[57px] relative object-cover hidden"
        alt=""
        src="/image-8@2x.png"
      />
      <img
        className="h-[43px] w-[51px] relative object-cover hidden"
        alt=""
        src="/image-9@2x.png"
      />
      <img
        className="h-[47px] w-[51px] relative object-cover hidden"
        alt=""
        src="/image-10@2x.png"
      />
      <img
        className="h-[47px] w-[51px] relative object-cover hidden"
        alt=""
        src="/image-11@2x.png"
      />
      <section className="ml-[-789px] h-[600px] w-[1680px] relative bg-azure-600 overflow-hidden shrink-0 [debug_commit:bf4bc93] max-w-[117%] z-[2] text-left text-lg text-gray font-body-p">
        <header className="absolute top-[0px] left-[1067px] w-[775px] flex flex-col items-start justify-start gap-[149px] max-w-full text-left text-29xl text-black font-montaga">
          <h1 className="m-0 w-[577px] relative text-inherit tracking-[-0.01em] leading-[72px] font-normal font-inherit inline-block whitespace-nowrap max-w-full">
            Bienvenido a mi Portafolio
          </h1>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-5xl font-body-p">
            <div className="flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[60px] max-w-full">
              <div className="flex flex-row items-start justify-end py-0 pr-0 pl-10 box-border max-w-full">
                <b className="w-[686px] relative tracking-[-0.01em] leading-[36px] inline-block shrink-0 whitespace-nowrap max-w-full">
                  <span>{`Hola soy `}</span>
                  <span className="text-mediumblue">Miguel Cajigas</span>
                </b>
              </div>
              <p className="m-0 w-[498px] relative text-lg tracking-[-0.01em] leading-[30px] text-gray whitespace-pre-wrap inline-block max-w-full box-border pr-5">{`Bienvenido a mi portafolio en este te contare todo sobre mi  persona mis experiencias, mis habilidades, mis hobbis y mi contacto espero tengas una muy buena experiencia y te lleves algo bueno de mi `}</p>
            </div>
          </div>
        </header>
        <div className="absolute top-[439px] left-[756px] w-[100px] h-[100px] overflow-hidden hidden" />
        <div className="absolute top-[121px] left-[794px] w-[167px] flex flex-col items-start justify-start gap-[37px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-0 gap-[16px]">
            <div className="h-[31px] w-10 relative">
              <div className="absolute top-[0px] left-[0px] tracking-[-0.01em] leading-[31px] inline-block w-full h-full">
                ..
              </div>
              <div className="absolute top-[0px] left-[0px] w-full h-full">
                <div className="absolute top-[0px] left-[0px] tracking-[-0.01em] leading-[31px] inline-block w-full h-full z-[1]">
                  ..
                </div>
                <div className="absolute top-[0px] left-[0px] w-full h-full">
                  <div className="absolute top-[0px] left-[0px] tracking-[-0.01em] leading-[31px] inline-block w-full h-full z-[2]">
                    ..
                  </div>
                  <div className="absolute top-[0px] left-[0px] tracking-[-0.01em] leading-[31px] inline-block w-full h-full z-[3]">
                    ..
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex-1 relative tracking-[-0.01em] leading-[31px] cursor-pointer"
              onClick={onHobbiesTextClick}
            >
              Hobbies
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <div className="w-10 flex flex-col items-start justify-start gap-[37.5px]">
              <div className="self-stretch relative tracking-[-0.01em] leading-[31px]">
                ..
              </div>
              <div className="self-stretch relative tracking-[-0.01em] leading-[31px]">
                ..
              </div>
              <div className="self-stretch relative tracking-[-0.01em] leading-[31px]">
                ..
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[37.5px]">
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                <div
                  className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[110px] cursor-pointer"
                  onClick={onExperienciaTextClick}
                >
                  Experiencia
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-px">
                <div
                  className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[88px] cursor-pointer"
                  onClick={onContactoTextClick}
                >
                  Contacto
                </div>
              </div>
              <div
                className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[110px] cursor-pointer"
                onClick={onHabilidadesTextClick}
              >
                Habilidades
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[23px] pl-0">
            <div className="self-stretch flex flex-row items-start justify-end">
              <div
                className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[88px] cursor-pointer"
                onClick={onSobreMiText1Click}
              >
                Sobre mi
              </div>
            </div>
            <div className="w-10 relative tracking-[-0.01em] leading-[31px] inline-block mt-[-28px]">
              ..
            </div>
          </div>
        </div>
        <div className="absolute top-[112px] left-[778px] w-[73px] h-[60px] hidden" />
        <img
          className="absolute top-[102px] left-[787px] w-[55px] h-[355px] object-cover z-[5]"
          loading="lazy"
          alt=""
          src="/image-21@2x.png"
        />
      </section>
    </div>
  );
};

export default SurfacePro8;
