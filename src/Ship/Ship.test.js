import Ship from './Ship';
import hit from '../helpers/hit';

describe('Ship class test', () => {

    describe('carrier test', () => {
        const carrier = new Ship(5, 0, 0);

        test('length of the carrier should be 5', () => {
            expect(carrier.getLength()).toBe(5);
        })

        test('carrier should be placed horizontally', () => {
            expect(carrier.getOrientation()).toBe('horizontal');
        })

        test('carrier should be hit twice', () => {
            hit(carrier, 2);

            expect(carrier.getHitCount()).toBe(2);
        })

        test('carrier should not be sunk', () => {
            expect(carrier.isSunk()).toBe(false);
        })
    })

    describe('destroyer test', () => {
        const destroyer = new Ship(2, 2, 2, 'vertical');

        test('length of the destroyer should be 2', () => {
            expect(destroyer.getLength()).toBe(2);
        })

        test('destroyer should be placed vertically', () => {
            expect(destroyer.getOrientation()).toBe('vertical');
        })

        test('destroyer should be sunk', () => {
            hit(destroyer, 2);

            expect(destroyer.isSunk()).toBe(true);
        })

        test('coordinates should be equal to [2, 2]', () => {
            expect(destroyer.getCoordinates()).toEqual([2, 2]);
        })
    })

    describe('cruiser test', () => {
        const cruiser = new Ship(3, 9, 9);

        test('cruiser with coordinates [4, 9] cannot be placed on the board', () => {
            expect(() => cruiser.getCoordinates()).toThrow(Error);
        })
    })
})