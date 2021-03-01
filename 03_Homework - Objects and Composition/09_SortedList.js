function createSortedList() {
    return {
        size: 0,
        list: [],
        add(x) {
            this.size++;
            this.list.push(x);
            this.list.sort((a, b) => a - b);
        },
        remove(i) {
            if (i >= 0 && i < this.list.length) {
                this.size--;
                this.list.splice(i, 1);
            }
        },
        get(i) {
            if (i >= 0 && i < this.list.length) {
                return this.list[i];
            }
        },
    };
}
