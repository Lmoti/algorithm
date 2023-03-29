function solution(park, routes) {
    routes = routes.map((el) => el.split(' ')).map((el) => [el[0], +el[1]]);
    const [maxx, maxy] = [park[0].length, park.length];
    let [curx, cury] = [0, 0];
    const obs = [];
    for (let i = 0; i < park.length; i++) {
        if (park[i].includes('S')) {
            curx = i;
            cury = park[i].indexOf('S');
        }
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] === 'X') obs.push([i, j]);
        }
    }
    for (let route of routes) {
        const [dir, dis] = route;
        if (dir === 'N') {
            if (curx - dis < 0) continue;
            const arr = obs.filter((el) => cury === el[1] && curx > el[0] && curx - dis <= el[0]);
            if (arr.length) continue;
            curx -= dis;
        } else if (dir === 'E') {
            if (cury + dis >= maxx) continue;
            const arr = obs.filter((el) => curx === el[0] && cury < el[1] && cury + dis >= el[1]);
            if (arr.length) continue;
            cury += dis;
        } else if (dir === 'S') {
            if (curx + dis >= maxy) continue;
            const arr = obs.filter((el) => cury === el[1] && curx < el[0] && curx + dis >= el[0]);
            if (arr.length) continue;
            curx += dis
        } else if (dir === 'W') {
            if (cury - dis < 0) continue;
            const arr = obs.filter((el) => curx === el[0] && cury > el[1] && cury - dis <= el[1]);
            if (arr.length) continue;
            cury -= dis;
        }
    }
    return [curx, cury];
}