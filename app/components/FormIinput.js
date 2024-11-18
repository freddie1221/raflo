
export default function formInput({type, placeholder}) {
  return (
    <input type={type} placeholder={placeholder} required
      className="mt-2 
      w-full 
      rounded-lg 
      border-gray-400 
      bg-gray-200
      bg-opacity-20 
      shadow-sm
      font-semibold
      placeholder-white
      placeholder-opacity-50
      text-white
      text-lg 
      p-4
      focus:ring-2 focus:ring-purple-600" />
  );
}
