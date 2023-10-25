interface IHasLength {
    length: number
}

class Circle<T extends IHasLength> {
  private radius!: T;

  constructor(radius: T){
    this.radius = radius;
  }

  get(): T {
    return this.radius;
  }

  set(radius: T): void {
    this.radius = radius;
  }
}

// const aCircle = new Circle<number>(9)
const bCircle = new Circle<string>("9")

// aCircle.get()

bCircle.get()


function reverseArray<T, K>(arr: T[]): K {
  return arr.reverse().join('') as K;
}

const a = [1, 2, 3, 5];
const b = ['a', 'b', 'c'];
const c = [[], [], []];

reverseArray<number, string>(a)[0];
reverseArray<string, string>(b)[0].trim();

const abc = 'This is a string';
