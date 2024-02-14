const bgClass = {
  egg: "bg-egg hover:bg-blue-600",
  greenOne: "bg-greenOne hover:bg-green-600",
};

const widthClass = {
  full: "w-full",
};

export default function Button({ children, bg, color, width }) {
  let classes = bg ? bgClass[bg] : "";
  classes += color ? " " + colorClass[color] : "";
  classes += width ? " " + widthClass[width] : "";

  return (
    <button className={`px-3 py-1.5 rounded-md ${classes}`}>{children}</button>
  );
}
