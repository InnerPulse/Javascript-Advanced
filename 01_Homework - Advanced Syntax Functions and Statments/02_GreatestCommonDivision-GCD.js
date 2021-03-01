function gcd(a, b) {
    while (b) {
        const c = b;
        b = a % b;
        a = c;
    }

    return a;
}
