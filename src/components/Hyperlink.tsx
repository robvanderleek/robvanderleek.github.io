import {ReactNode} from "react";

interface HyperlinkProps {
    href: string;
    children: ReactNode | string;
}

export default function Hyperlink(props: HyperlinkProps) {
    return (<a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>);
}