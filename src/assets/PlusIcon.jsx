/* eslint-disable react/prop-types */

const PlusIcon = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000"
      viewBox="0 0 24 24"
      height="24"
      width="24"
      strokeWidth={1.5}
      stroke="#000"
      className="w-6 h-6 "
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

export default PlusIcon;
