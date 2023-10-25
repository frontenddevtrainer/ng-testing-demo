function filterByProperty<T, K extends keyof T>(
  arr: T[],
  propName: K,
  value: T[K]
) {}

const items = [
  {
    id: 1,
    name: 'pencil',
  },
  {
    id: 2,
    name: 'pen',
    price: 2,
  },
];

filterByProperty(items, 'price', 4);

// Create a generic interface for a basic cache. The cache should have methods for setting a value, getting a value, and checking if it contains a key.

interface ICache<K, V> {
  set(key: K, value: V): void;
  get(key: K): V | null;
  contains(key: K): boolean;
}

class PeopleCache implements ICache<string, string> {
  private cacheValue: any = {};

  set(key: string, value: string): void {
    this.cacheValue[key] = value;
  }
  get(key: string): string | null {
    return this.cacheValue[key] || null;
  }
  contains(key: string): boolean {
    return !!this.cacheValue[key];
  }
}

const people2 = new PeopleCache();

interface Box<T> {
  contents: T;
  get(): T;
  set(value: T): void;
}

interface DataKeyValue<K, V> {
  key: K;
  value: V;
}

const people: DataKeyValue<string, boolean>[] = [{ key: 'name', value: false }];
const products: DataKeyValue<number, string>[] = [{ key: 1, value: 'abc' }];

class Container implements Box<string> {
  contents!: string;
  get(): string {
    throw new Error('Method not implemented.');
  }
  set(value: string): void {
    throw new Error('Method not implemented.');
  }
}

class Container2 implements Box<number> {
  contents!: number;
  get(): number {
    throw new Error('Method not implemented.');
  }
  set(value: number): void {
    throw new Error('Method not implemented.');
  }
}

interface IHasLength {
  length: number;
}

class Circle<T extends IHasLength> {
  private radius!: T;

  constructor(radius: T) {
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
const bCircle = new Circle<string>('9');

// aCircle.get()

bCircle.get();

function reverseArray<T, K>(arr: T[]): K {
  return arr.reverse().join('') as K;
}

const a = [1, 2, 3, 5];
const b = ['a', 'b', 'c'];
const c = [[], [], []];

reverseArray<number, string>(a)[0];
reverseArray<string, string>(b)[0].trim();

const abc = 'This is a string';
