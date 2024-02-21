export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-block h-16 w-16 p-1 rounded-lg bg-[#a5b4fd] text-center transition-all ease-in-out duration-500 sm:w-24 sm:h-24"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="inline-block h-16 w-16 p-1 rounded-lg bg-[#6466f1] transition-all ease-in-out duration-500 sm:h-24 sm:w-24">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "top",
            }}
            className="bg-transparent color-transparent"
            color="#fff"
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className="inline-block h-16 w-16 p-1 rounded-lg transition-all ease-in-out duration-500 text-gray-300 sm:h-24 sm:w-24">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "top",
            }}
            color={"#c7d2ff"}
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return <div onClick={flip} className={className}></div>;
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
