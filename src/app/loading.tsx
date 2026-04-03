export default function Loading() {
  return (
    <main className="fixed inset-0 z-[100] grid place-items-center bg-[var(--surface-canvas)]">
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface-strong)] px-7 py-6 shadow-xl">
        <p className="font-[family-name:var(--font-poppins)] text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-strong)]">
          Senmar Services
        </p>
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--brand-soft)] border-t-[var(--brand-strong)]" />
        <p className="text-xs text-foreground/70">Preparing your page...</p>
      </div>
    </main>
  );
}
