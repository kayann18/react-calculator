import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState("0");
    const [firstOperand, setFirstOperand] = useState(null);
    const [operator, setOperator] = useState(null);
    const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

    const handleNumberClick = (num) => {
        if (waitingForSecondOperand) {
            setDisplayValue(String(num));
            setWaitingForSecondOperand(false);
        } else {
            setDisplayValue(displayValue === "0" ? String(num) : displayValue + num);
        }
    };

    const handleOperatorClick = (op) => {
        if (firstOperand === null) {
            setFirstOperand(parseFloat(displayValue));
        } else if (operator && !waitingForSecondOperand) {
            calculate();
        }
        setOperator(op);
        setWaitingForSecondOperand(true);
    };

    const handleEqualClick = () => {
        calculate();
        setOperator(null);
        setWaitingForSecondOperand(false);
    };

    const handleClearClick = () => {
        setDisplayValue("0");
        setFirstOperand(null);
        setOperator(null);
        setWaitingForSecondOperand(false);
    };

    const calculate = () => {
        const secondOperand = parseFloat(displayValue);
        switch (operator) {
            case "+":
                setDisplayValue((firstOperand + secondOperand).toString());
                break;
            case "-":
                setDisplayValue((firstOperand - secondOperand).toString());
                break;
            case "*":
                setDisplayValue((firstOperand * secondOperand).toString());
                break;
            case "/":
                setDisplayValue((firstOperand / secondOperand).toString());
                break;
            default:
                return;
        }
        setFirstOperand(null);
    };

    return (
        <div className="calculator">
            <div className="display">{displayValue}</div>
            <div className="keypad">
                <button onClick={() => handleNumberClick("7")}>7</button>
                {/* Add more buttons for numbers 0-9 */}
                {/* Add buttons for operators (+, -, *, /) */}
                {/* Add buttons for equals (=) and clear (C) */}
            </div>
        </div>
    );
};

export default Calculator;
