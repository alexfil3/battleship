class Ship {
    #length;
    #orientation;
    #hitCount;
    #coordinates;

    constructor(length, x, y, orientation = 'horizontal') {
        this.#length = length;
        this.#orientation = orientation;
        this.#hitCount = 0;
        this.#coordinates = [x, y];
    }

    hit() {
        this.#hitCount++;
    }

    isSunk() {
        return this.#length === this.#hitCount;
    }

    getLength() {
        return this.#length;
    }

    getOrientation() {
        return this.#orientation;
    }

    getHitCount() {
        return this.#hitCount;
    }

    getCoordinates() {
        const [x, y] = this.#coordinates;

        if (x > 9 || x < 0 || y > 9 || y < 0) {
            throw Error();
        }

        if (this.#orientation === 'horizontal' && ((x + this.#length - 1) > 9)) {
            throw Error();
        }

        if (this.#orientation === 'vertical' && ((y + this.#length - 1) > 9)) {
            throw Error();
        }

        return this.#coordinates;
    }
}

export default Ship;