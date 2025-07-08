interface Props {
  children: string;
  onClick: () => void;
}

function Button({ children, onClick }: Props) {
  return (
    <button
      className="flex px-4 py-2 bg-black text-white border-2 rounded-xl justify-center hover:bg-white hover:text-black transition"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
