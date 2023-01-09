function solution(m, musicinfos) {
    m = m.replaceAll('A#', 'a').replaceAll('C#', 'c').replaceAll('D#', 'd').replaceAll('F#', 'f').replaceAll('G#', 'g');
    const obj = {};    
    let timeout = 0;
    let text = '';
    for (let music of musicinfos) {
        text = '';
        let time = 0;
        let [firstTime, secTime, title, context] = music.split(',');
        let [firstHour, firstMin] = firstTime.split(':');
        let [secHour, secMin] = secTime.split(':');
        timeout = (secHour - firstHour) * 60 + (secMin - firstMin);
        
        context = context.replaceAll('A#', 'a').replaceAll('C#', 'c').replaceAll('D#', 'd').replaceAll('F#', 'f').replaceAll('G#', 'g');
        
        let words = context.split('');
        while (timeout >= time) {
            for (let word of words) {
                if (time > timeout) break;
                text += word;
                time++;
                
                if (m.length <= text.length) {
                    let textIdx = text.lastIndexOf(m);
                    if (textIdx !== -1) obj[title] = timeout;
                }
            }
        }
    }
    const longtime = Math.max(...Object.values(obj));
    
    if (!Object.keys(obj).length) return '(None)';
    return Object.keys(obj).find((key) => obj[key] === longtime);
}