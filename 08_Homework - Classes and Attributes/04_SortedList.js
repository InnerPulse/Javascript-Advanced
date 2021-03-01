class List {
    constructor() {
        this.list = [];
        this.size = this.list.length;
    }

    add(el) {
        this.list.push(el);
        this.list = this.list.sort((a, b) => a - b);
        this.size = this.list.length;
    }

    remove(index) {
        if (index > this.list.length || index < 0) {
            throw new TypeError('index must be valid');
        } else {
            this.list[index] = null;
            this.list = this.list.filter((el) => el != null);
            this.size = this.list.length;
        }
    }

    get(index) {
        if (index > this.list.length || index < 0) {
            return this.list[index];
        } else {
            throw new TypeError('index must be valid');
        }
    }
}
