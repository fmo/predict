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
