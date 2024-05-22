export interface PillButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  type: "link" | "text" | "button";
  href?: string;
}

function PillButton({ text, href, type }: PillButtonProps) {
  // hover:text-brand-accent hover:border-brand-accent
  if (type === "button") {
    return (
      <button
        className="rounded-full  hover:text-brand-accent hover:border-brand-accent text-sm font-sans px-4 py-1 leading-4 border-[1px] border-brand-blue"
        disabled
      >
        {text}
      </button>
    );
  }
  if (type === "link") {
    return (
      <a
        className="rounded-full hover:text-brand-accent hover:border-brand-accent text-sm font-sans px-4 py-1 leading-4 border-[1px] border-brand-blue"
        href={href}
        target="_blank"
      >
        {text}
      </a>
    );
  }
  return <div className="rounded-full  text-sm font-sans px-4 py-1 leading-4 border-[1px] border-brand-blue">{text}</div>;
}

export { PillButton };
