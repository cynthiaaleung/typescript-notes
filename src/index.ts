// Basic Types
let id: number = 5
let company: string = 'Cynthia'
let isFinished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Cynthia', true] // has to be in order

// Tuple Array
let employees: [number, string][]

employees = [
  [1, 'Cynthia'],
  [2, 'Cindy'],
]

// Union
let pid: string | number // variable to hold more than 1 type

pid = 22
pid = '22'

// Enum - allows us to define a set of named constants, numberic or string
enum Direction1 {
  Up, 
  Down,
  Left,
  Right
}

console.log(Direction1.Up) // 0
console.log(Direction1.Down) // 1
console.log(Direction1.Left) // 2
console.log(Direction1.Right) // 3

// can set a value too: Up = 1, then Down will be 2 and so on


enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

console.log(Direction2.Up) // 'Up'

// Objects

type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'Cynthia'
}

