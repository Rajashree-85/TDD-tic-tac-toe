import App from './App';
import {fireEvent, render,screen} from '@testing-library/react';

describe('App',()=>{
    it("should display an X",()=>{
        render(<App />);
        const gameBoard=screen.getByTestId("gameBoard");
        expect(gameBoard).not.toBeNull();
        expect(gameBoard.textContent).toBe("");
    });

    it("should render a button",()=>{
        render(<App />);
        const button=screen.getAllByRole("button");
        expect(button).not.toBeNull();
    });

    it("should render 9 buttons",()=>{
        render(<App />);
        const buttons=screen.getAllByRole("button");
        expect(buttons.length).toBe(9);
    });

    it("should be able to click button",()=>{
        render(<App />);
        const button=screen.getAllByRole("button")[0];
        fireEvent.click(button);
        expect(button.textContent).toBe("X");
    });

    it("should display X when clicked",()=>{
        render(<App />);
        const button=screen.getAllByRole("button")[0];
        fireEvent.click(button);
        expect(button.textContent).toBe("X");
    });

    it("should display O when clicked second time",()=>{
        render(<App />);
        const square=screen.getAllByRole("button");
        fireEvent.click(square[0]);
        expect(square[0].textContent).toBe("X");
        fireEvent.click(square[1]);
        expect(square[1].textContent).toBe("O");       
    });

    it("should display token only when the square is empty",()=>{
        render(<App />);
        const button=screen.getAllByRole("button")[0];
        fireEvent.click(button);
        expect(button.textContent).toBe("X");
        fireEvent.click(button);
        expect(button.textContent).toBe("X");
    });

    it("should be able to calculate winner",()=>{
        render(<App />);
        const square=screen.getAllByRole("button");
        const status=screen.getByTestId("status");
        fireEvent.click(square[0]);
        fireEvent.click(square[1]);
        fireEvent.click(square[3]);
        fireEvent.click(square[4]);
        fireEvent.click(square[6]);
        fireEvent.click(square[7]);
        expect(status.textContent).toBe("Winner is : X");
    });
})