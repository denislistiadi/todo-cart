interface FieldInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputClass?: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FieldInput({
  inputClass,
  label,
  type = 'text',
  value,
  onChange,
}: FieldInputProps) {
  return (
    <div className={`app-field-input ${inputClass}`}>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
}
