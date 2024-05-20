export interface PillButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

function PillButton({ text, className, ...props }: PillButtonProps) {
  return (
    <button className="rounded-full hover:text-brand-accent hover:border-brand-accent text-sm font-sans px-4 py-1 leading-4 border-[1px] border-brand-blue">
      {text}
    </button>
  );
}

export { PillButton };
