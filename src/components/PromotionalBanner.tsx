export default function PromotionalBanner({ text, secondary = false }: { text: string, secondary?: boolean }) {
  return (
    <div className={`w-full py-3 overflow-hidden flex items-center justify-center border-y-2 ${secondary ? 'bg-saffron border-gold text-crimson' : 'bg-crimson border-crimson/80 text-white'}`}>
      <p className={`font-black text-sm md:text-base tracking-[0.3em] uppercase text-center px-4 ${secondary ? 'drop-shadow-sm' : 'drop-shadow-md'}`}>
        {text}
      </p>
    </div>
  );
}