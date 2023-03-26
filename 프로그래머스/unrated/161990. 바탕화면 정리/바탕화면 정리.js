function solution(wallpaper) {
    let [minx, miny, maxx, maxy] = [wallpaper.length, wallpaper[0].length, 0, 0];
    for (let i = 0; i < wallpaper.length; i++) {
        if (wallpaper[i].includes('#')) {
            minx = Math.min(minx, i);
            miny = Math.min(miny, wallpaper[i].indexOf('#'));
            maxx = Math.max(maxx, i);
            maxy = Math.max(maxy, wallpaper[i].lastIndexOf('#'));
        }
    }
    return [minx, miny, maxx + 1, maxy + 1];
}