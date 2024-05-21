export interface PillButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  clickable?: boolean;
}

function PillButton({ text, clickable, className, ...props }: PillButtonProps) {
  // hover:text-brand-accent hover:border-brand-accent
  if (clickable) {
    return (
      <button
        className="rounded-full  hover:text-brand-accent hover:border-brand-accent text-sm font-sans px-4 py-1 leading-4 border-[1px] border-brand-blue"
        disabled
      >
        {text}
      </button>
    );
  }
  return <div className="rounded-full  text-sm font-sans px-4 py-1 leading-4 border-[1px] border-brand-blue">{text}</div>;
}

export { PillButton };
