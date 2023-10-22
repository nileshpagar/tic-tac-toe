import React from "react";

export function Square(props) {
    return (
        <button
            className="square"
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}