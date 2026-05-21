import style from "./CardStatus.module.css";

function CardStatus({count,title, icon}) {
  return (
    <>
      <div
        className={`${style.cardstatus} d-flex align-items-center rounded-4`}
      >
        <div
          className={`${style.icon} w-100 d-flex align-item-center justify-content-center`}
        >
          <i className={`fa-solid ${icon}`}></i>
        </div>
        <div
          className={`${style.info} w-100 d-flex flex-column align-items-center gap-2`}
        >
          <span className={`${style.count}`}>{count}</span>
          <span className="title">{title}</span>
        </div>
      </div>
    </>
  );
}

export default CardStatus;
