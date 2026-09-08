const input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="w-[350px] rounded-md bg-white px-2 py-[12px] text-sm text-[#32343E] placeholder-[#32343E] outline-none"
    />
  );
};

export default input;
