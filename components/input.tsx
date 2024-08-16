import { error } from 'console';

interface IFormProps {
  name: string;
  type: string;
  placeholder: string;
  errors: string[];
}

export default function InputForm({
  name,
  type,
  placeholder,
  errors = [],
}: IFormProps) {
  return (
    <>
      <input
        className="w-96 h-8 rounded-full p-2 text-black"
        name={name}
        type={type}
        placeholder={placeholder}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </>
  );
}
