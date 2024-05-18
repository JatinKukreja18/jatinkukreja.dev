export interface PillButtonProps extends React.HTMLAttributes<HTMLDivElement> {}

function PillButton({ className, ...props }: PillButtonProps) {
  return <button className="rounded-full ...">Save Changes</button>;
}

export { PillButton };
