import { UI } from './ui';

const ui = new UI();

beforeEach(() => {
    localStorage.clear();

    jest.clearAllMocks();

    localStorage.setItem.mockClear();
});

test('should get game id', () => {
    expect(ui.getGameId('id-5')).toBe(5);
});

test('should populate games', () => {
    document.body.innerHTML = `<section>
        <div class="games"></div>
    </section>`;

    ui.populateGames();

    expect(localStorage.getItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalled();
});

test('should init games', () => {
    const spyInit = jest.spyOn(ui, 'init');
    const spyPopulateGames = jest
        .spyOn(ui, 'populateGames')
        .mockImplementation(jest.fn());

    const focusOutListener = {
        addEventListener: jest.fn().mockImplementationOnce((event, handler) => {
            const mockEvent = {
                target: {
                    classList: {
                        contains: jest.fn((team) => {
                            return true;
                        }),
                        add: jest.fn(),
                    },
                    parentNode: { parentNode: { id: 'game-12' } },
                    value: '3',
                },
            };
            handler(mockEvent);
        }),
    };

    document.querySelector = jest.fn().mockReturnValueOnce(focusOutListener);

    ui.init();

    expect(document.querySelector).toBeCalledWith('.games');
    expect(focusOutListener.addEventListener).toBeCalledWith(
        'focusout',
        expect.any(Function)
    );
    expect(spyInit).toBeCalledTimes(1);
    expect(spyPopulateGames).toBeCalledTimes(1);
});

test('should check not valid guess', () => {
    const spyInit = jest.spyOn(ui, 'init');

    const focusOutListener = {
        addEventListener: jest.fn().mockImplementationOnce((event, handler) => {
            const mockEvent = {
                target: {
                    classList: {
                        contains: jest.fn((team) => {
                            return true;
                        }),
                        add: jest.fn(),
                    },
                    parentNode: { parentNode: { id: 'game-12' } },
                    value: null,
                },
            };
            handler(mockEvent);
        }),
    };

    document.querySelector = jest.fn().mockReturnValueOnce(focusOutListener);

    ui.init();

    expect(document.querySelector).toBeCalledWith('.games');
    expect(focusOutListener.addEventListener).toBeCalledWith(
        'focusout',
        expect.any(Function)
    );
    expect(spyInit).toBeCalledTimes(1);
});
