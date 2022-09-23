import React from 'react';
import { render,screen } from '@testing-library/react';
import Card from'./Card';
import "@testing-library/jest-dom/extend-expect"


test("header renders with correct text", ()=> {
    render(<Card />);
    const headerElement = screen.getByText("Cargando...");
    expect(headerElement.textContent).toBe("Cargando...");
});