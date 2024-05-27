import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type ContentColumnType = {
  className?: string;
};

const ContentColumn: FunctionComponent<ContentColumnType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onExperienciaTextClick = useCallback(() => {
    navigate("/surface-pro-8-5");
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
    <div
      className={`w-[1168px] flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full text-left text-lg text-gray font-body-p ${className}`}
    >
      <div className="h-96 w-[55px] flex flex-col items-start justify-start pt-[29px] px-0 pb-0 box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/image-21@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[39px] min-w-[710px] max-w-full mq975:min-w-full mq725:gap-[19px]">
        <div className="w-[760px] flex flex-col items-start justify-start pt-0 px-[5px] pb-[3px] box-border relative max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-29xl text-black">
            <h1 className="m-0 h-36 flex-1 relative text-inherit tracking-[-0.01em] leading-[72px] font-normal font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[43px] mq975:text-19xl mq975:leading-[58px]">
              <p className="m-0">&nbsp;</p>
            </h1>
            <p className="!m-[0] w-[686px] absolute right-[-214px] bottom-[-89px] text-lg tracking-[-0.01em] leading-[30px] text-gray whitespace-pre-wrap inline-block z-[1]">
              Mis pasatiempos en su mayoria son mirar partidos de futbol u
              programa en tv una vez acabe con mis actividades educativas ,
              tambien me gusta practicar la programacion ademas de practicar
              deportes como el futbol y los fines de semana me gusta
              dedicarselos a mi familia u amigos
            </p>
            <header className="h-full w-full absolute !m-[0] top-[-43px] right-[-271px] text-29xl tracking-[-0.01em] leading-[72px] font-body-p text-black text-left inline-block z-[1]">
              Hobbies
            </header>
          </div>
          <div className="w-[88px] absolute !m-[0] top-[47px] left-[0px] tracking-[-0.01em] leading-[31px] inline-block z-[1]">
            Hobbies
          </div>
          <div
            className="absolute !m-[0] bottom-[0px] left-[0px] tracking-[-0.01em] leading-[31px] inline-block min-w-[110px] cursor-pointer z-[1]"
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
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div
            className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[110px] cursor-pointer"
            onClick={onHabilidadesTextClick}
          >
            Habilidades
          </div>
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1000:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
              <div
                className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[88px] cursor-pointer"
                onClick={onSobreMiTextClick}
              >
                Sobre mi
              </div>
            </div>
            <div className="w-[880px] flex flex-row items-end justify-start gap-[65px] max-w-full mq450:gap-[16px] mq975:flex-wrap mq975:gap-[32px]">
              <div className="h-[243px] w-[397px] flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border min-w-[397px] max-w-full mq450:min-w-full mq975:flex-1">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[2] mq975:self-stretch mq975:w-auto"
                  loading="lazy"
                  alt=""
                  src="/image-28@2x.png"
                />
              </div>
              <img
                className="h-[257px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[272px]"
                loading="lazy"
                alt=""
                src="/whatsapp-image-20240423-at-638-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentColumn;
