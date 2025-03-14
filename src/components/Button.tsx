interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonClass?: string;
  loading?: boolean;
  children: React.ReactNode;
}

export default function Button({
  buttonClass,
  children,
  loading,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={`app-button ${buttonClass}`}>
      {loading ? 'Loading...' : children}
    </button>
  );
}
