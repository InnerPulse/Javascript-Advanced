function sumTable() {
    const prices = [...document.querySelectorAll('table tr')]
        .slice(1, -1)
        .map((el) => el.children[1].textContent);

    const totalBill = prices.reduce((a, c) => a + Number(c), 0);
    document.getElementById('sum').textContent = totalBill;
    // or document.getElementById("sum").textContent = prices.reduce((a, c) => a + Number(c), 0)
}
