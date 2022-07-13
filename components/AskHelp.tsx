import { FaQuestion } from "react-icons/fa";

const AskHelp = () => {
  return (
    <div className='rounded-full w-16 aspect-square bg-white hover:bg-slate-200 cursor-pointer shadow-md grid place-items-center fixed bottom-2 right-2'>
      <FaQuestion />
    </div>
  );
};
export default AskHelp;
