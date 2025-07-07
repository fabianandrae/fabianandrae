interface Props {
  text: string;
  onButtonClicked: () => void;
}

function Button({ text, onButtonClicked }: Props) {
  return (
    <button
      className="flex px-4 py-2 bg-black text-white border-2 rounded-xl justify-center hover:bg-white hover:text-black transition" style={{cursor: 'pointer'}}
      onClick={onButtonClicked}
    >
      {text}
    </button>
  );
}

export default Button;
