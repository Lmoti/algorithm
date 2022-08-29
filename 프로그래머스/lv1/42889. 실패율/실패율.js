function solution(N, stages) {
    const answer = [];
    // 총 스테이지 N
    // 유저들의 스테이지 현황 stages
    // 이게 뭐여...............
    // 실패율 => 스테이지를 도달했으나 깨지 못한사람(challenge) / 그 스테이지에 있는 사람 혹은 스테이지를 클리어 한 사람(challenge + winner)
    
    // 데이터 저장
    const data = {};
    
    // 스테이지별 인원파악
    for (let stage = 1; stage <= N; stage++) {
        // 스테이지를 깨지 못한 사람
        const challenge = 0;
        // 스테이지에 가지도 못한 사람
        const loser = 0;
        // 스테이지 클리어 한 사람
        const winner = 0;
        data[stage] = {};
        data[stage]['winner'] = 0;
        data[stage]['challenge'] = 0;
        data[stage]['loser'] = 0
        for (let per = 0; per < stages.length; per++) {
            if (stages[per] > stage) {
                    data[stage]['winner'] += 1;                    
            }
            else if (stages[per] === stage) {
                    data[stage]['challenge'] += 1;                    
            }
            else if (stages[per] < stage) {
                    data[stage]['loser'] += 1;                    
            }
        }
    }
    const stage = Object.keys(data);
    
    for (let i = 0; i < stage.length; i++) {
        let failrate = (data[stage[i]]['challenge']) / (data[stage[i]]['challenge'] + data[stage[i]]['winner'])
        data[stage[i]]['failrate'] = failrate
    }
    const dataArr = Object.entries(data)
    
    dataArr.sort((a, b) => b[1]['failrate'] - a[1]['failrate']);
    for (let i = 0; i < dataArr.length; i++) {
        answer.push(Number(dataArr[i][0]));
    }
    
    return answer;
}