function solution(elements) {
    const set = new Set();
    const len = elements.length;
    elements.forEach((el) => set.add(el));
    for (let i = 0; i < len; i++) {
        for (let j = i + 2; j <= elements.length; j++) {
            const sum = elements.slice(i, j).reduce((a, b) => a + b, 0);
            set.add(sum);
        }
        elements.push(elements[i]);
    }
    return set.size;
}