function solution(id_pw, db) {
    let isWrongPw = false;
    let isLogin = false;
    for (let i of db) {
        if (i[0] === id_pw[0]) {
            isWrongPw = true;
            if (i[1] === id_pw[1]) {
                isLogin = true;
            }
        }
    }
    if (isWrongPw) {
        if (isLogin) {
            return 'login';
        }
        return 'wrong pw';
    }
    return 'fail';
}