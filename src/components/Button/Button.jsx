import { Link } from "react-router-dom";

export const PrimaryButton = (props) => {
  const { title } = props;
  return (
    <button className="bg-[#0054A6] px-9 py-[7px] text-white font-medium rounded-md hover:bg-[#0054a6cc]">
      {title}
    </button>
  );
};
export const PrimaryLink = (props) => {
  const { route, title } = props;
  return (
    <Link
      to={route}
      className="bg-[#0054A6] px-9 py-[7px] text-white font-medium rounded-md hover:bg-[#0054a6cc]"
    >
      {title}
    </Link>
  );
};
