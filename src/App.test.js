import React from 'react';
import { render} from '@testing-library/react';
import KeyPadComponent from './components/KeyPadComponent';
import ResultComponent from './components/KeyPadComponent';
import calculate from './calculator-functions/calculation';

describe('testing app', () => {

    test('testing keypad', () => {
        render(<KeyPadComponent />);

    });

    test('testing result comp', () => {
        render(<ResultComponent />);
    })

    test('testing addition', () => {
        const result = calculate('1+1');
        expect(result).toBe(2);
    })

    test('testing subtraction', () => {
        const result = calculate('1-1');
        expect(result).toBe(0);
    })

    test('testing multiplication', () => {
        const result = calculate('1*1');
        expect(result).toBe(1);
    })

    test('testing division', () => {
        const result = calculate('1/1');
        expect(result).toBe(1);
    })
})