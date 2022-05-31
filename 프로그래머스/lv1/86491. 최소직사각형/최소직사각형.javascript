function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    for (let size of sizes) {
        let width = size[0]
        let height = size[1]
        if (width < height) {
            width = size[1];
            height = size[0];
        }
        if (width > maxWidth) maxWidth = width;
        if (height > maxHeight) maxHeight = height;
    }
    return maxWidth * maxHeight;
}