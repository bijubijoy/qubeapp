import * as React from "react";
import {
    NavItem,
    NavLink
} from 'reactstrap';
import classnames from "classnames";

interface Props {
    activeTab?: boolean;
    onClick?: () => void;
    text: string;
}

export default function Tab(props: Props) {
    return (
        <NavItem>
            <NavLink
                className={classnames({ active: props.activeTab })}
                onClick={props.onClick}>
                {props.text}
            </NavLink>
        </NavItem>
    )
}