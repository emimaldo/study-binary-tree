export class LinkedList<T> implements Iterable<T> {
    private items: T[] = []; 

    append(value: T): void {
        this.items.push(value);
    }

    size(): number {
        return this.items.length;
    }


    /**
     * Using the Symbol.iterator method, we can make our class iterable.
     * This allows us to use the spread operator, for-of loop, and destructuring.
     * 
     * @returns {Iterator<T>}
     */
    [Symbol.iterator](): Iterator<T> {
        let index = 0;
        let data = this.items;
        return {
            next(): IteratorResult<T> {
                if (index < data.length) {
                    return { value: data[index++], done: false };
                } else {
                    return { value: undefined as any, done: true };
                }
            }
        };
    }

    toArray(): T[] {
        return [...this.items];
    }
}
