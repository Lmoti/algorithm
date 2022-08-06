function solution(skill, skill_trees) {
    let result = 0;

    //skill의 요소들이 있는지 확인
    let filteredTrees = skill_trees.map(tree => {
        return tree.split("").filter(ele => skill.includes(ele))
    });
    
    //가능한 스킬트리인지 확인
    for(let i = 0; i < filteredTrees.length; i++) {
        let isValid = true;
        for(let j = 0; j < filteredTrees[i].length; j++) {
          if(skill[j] !== filteredTrees[i][j]) {
            isValid = false;
            break;
          }
        }
        if(isValid) result++;
    }
    
    return result;
}