interface HyperlinkProps {
    href: string;
    children: JSX.Element | string;
}

export default function Hyperlink(props: HyperlinkProps) {
    return (<a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>);
}