import {ReactNode} from "react";
import {StyledA} from "./Hyperlink.style";

interface HyperlinkProps {
    href: string;
    styled?: boolean;
    children: ReactNode | string;
}

export default function Hyperlink(props: HyperlinkProps) {
    if (props.styled) {
        return (<StyledA href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</StyledA>);
    } else {
        return (<a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>);
    }
}