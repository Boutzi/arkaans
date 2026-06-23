interface HubCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const HubCard = ({ href, icon, title, description }: HubCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-3 overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.03] p-4 transition-all duration-300 hover:border-brand/40 hover:bg-white/[0.06]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand/0 to-transparent transition-all duration-500 group-hover:from-brand/5" />
      <div className="relative flex items-start justify-between">
        <div className="text-brand">{icon}</div>
        <span className="text-sm text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand/60">
          →
        </span>
      </div>
      <div className="relative">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="mt-0.5 text-xs leading-relaxed text-white/40">{description}</p>
      </div>
    </a>
  );
};
