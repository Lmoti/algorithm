function solution(s) {
    const sp = s.split(' ');
    return sp.map(word => {
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    }).join(' ');
  //   if (s.length === 0) return '';
  // const sp = s.split('');
  // let word = '';
  // for (let i = 0; i < sp.length; i++) {
  //   if (sp[i] === ' ') {
  //     word += sp[i]
  //   }
  //   else if (sp[i - 1] === ' ' || i === 0) {
  //     word += sp[i].toUpperCase()
  //   }
  //   else {
  //     word += sp[i];
  //   }
  // }
  // return word;
}