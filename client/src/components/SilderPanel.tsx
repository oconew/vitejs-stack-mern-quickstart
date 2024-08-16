function SliderPanel(props: any) {
  // default props
  const id = "menu-" + 1;
  const label = "Starters & Sharers";
  const cssLabel = "starters-sharers";
  const link = "/menu.7.html";
  //   const n = 0;
  //   const current = 0;

  return (
    <>
      <div
        id={props.id ? props.id : id}
        className={
          "cover justify-center align-center menu-slide " +
          (props.cssLabel ? props.cssLabel : cssLabel)
        }
        style={{
          position: "absolute",
          top: props.current * 100 + props.n * 100 + "vh",
          transition: "top .4s",
        }}
      >
        <a
          href={props.link ? props.link : link}
          className="flex align-center justify-center"
          style={{ height: "0%" }}
        >
          <h2>{props.label ? props.label : label}</h2>

          <button className="menu-button">
            View {props.label ? props.label : label}
          </button>
        </a>
      </div>
    </>
  );
}

export default SliderPanel;
