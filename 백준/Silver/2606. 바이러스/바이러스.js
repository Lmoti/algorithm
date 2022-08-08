const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const vertex = Number(input.shift()); // 컴퓨터의 수
const edgeNum = Number(input.shift()); // 연결되어 있는 컴퓨터 쌍의 수
const edge = input.map((el) => el.split(" ")); //연결되어 있는 컴퓨터의 번호 쌍
// [['1', '2'], ['2', '3'], ['1', '5'], ...]

class Graph {
  constructor() {
    // 정점 사이의 간선들을 저장할 곳
    this.adjacencyList = {};
  }
  // 정점 추가
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  // 간선 추가
  addEdge(v1, v2) {
    // 방향성을 주고 싶다면 하나만 실행시켜 순서가 있게 하면 된다.
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  // 간선 제거
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v2].filter((v) => v !== v1);
    this.adjacencyList[v2] = this.adjacencyList[v1].filter((v) => v !== v1);
  }
  // 정점 제거
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}

const g = new Graph();

for (let i = 1; i <= vertex; i++) {
  g.addVertex(i);
}
for (let i = 0; i < edge.length; i++) {
  g.addEdge(Number(edge[i][0]), Number(edge[i][1]));
}
console.log(g.depthFirstIterative(1).length - 1);
