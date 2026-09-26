import type { CSSProperties } from 'react';
export type IconName = 'coffee' | 'gift' | 'wallet' | 'arrow' | 'search' | 'leaf' | 'close' | 'check';
const paths: Record<IconName, React.ReactNode> = {
    coffee: <><path d="M4 8h12v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z"/><path d="M16 9h2a3 3 0 0 1 0 6h-2M7 3v2m4-2v2M2 22h18"/></>,
    gift: <><path d="M3 10h18v4H3zM5 14v8h14v-8M12 10v12"/><path d="M12 10C3 10 5 1 9 4c2 1 3 6 3 6Zm0 0c9 0 7-9 3-6-2 1-3 6-3 6Z"/></>,
    wallet: <><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 8V5l14-3v3m4 7h-6v5h6m-3-2.5h.01"/></>,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6"/>,
    search: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></>,
    leaf: <><path d="M20 3C7 2 1 9 6 16s16 0 14-13ZM4 21 16 8"/></>,
    close: <path d="m6 6 12 12M6 18 18 6"/>,
    check: <path d="m5 12 4 4L19 6"/>,
};
export default function Icon({ name, style }: {
    name: IconName;
    style?: CSSProperties;
}) {
    return <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={style}>{paths[name]}</svg>;
}
