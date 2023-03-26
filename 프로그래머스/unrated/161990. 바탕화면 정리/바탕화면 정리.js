function solution(wallpaper) {
    let minx = wallpaper.length;
    let miny = wallpaper[0].length;
    let maxx = 0;
    let maxy = 0;
    for (let i = 0; i < wallpaper.length; i++) {
        if (wallpaper[i].includes('#') && i < minx) minx = i;
        if (wallpaper[i].indexOf('#') !== -1 && wallpaper[i].indexOf('#') < miny) miny = wallpaper[i].indexOf('#');
        if (wallpaper[i].includes('#') && i >= maxx) maxx = i + 1;
        if (wallpaper[i].lastIndexOf('#') !== -1 && wallpaper[i].lastIndexOf('#') >= maxy) maxy = wallpaper[i].lastIndexOf('#') + 1;
    }
    return [minx, miny, maxx, maxy];
}