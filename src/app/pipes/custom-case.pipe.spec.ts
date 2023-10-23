import { CustomCasePipe } from './custom-case.pipe';

describe('CustomCasePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return same value if no argument is passed', () => {
    const pipe = new CustomCasePipe();
    expect(pipe.transform('ABC')).toBe('ABC');
  });

  it('should return null if value is not string', () => {
    const pipe = new CustomCasePipe();
    expect(pipe.transform(4234234 as unknown as string)).toBeNull();
  });

  it('should return value in lowercase', () => {
    const pipe = new CustomCasePipe();
    expect(pipe.transform('ABC', 'lowercase')).toBe('abc');
  });

  it('should return value in uppercase', () => {
    const pipe = new CustomCasePipe();
    expect(pipe.transform('abc', 'uppercase')).toBe('ABC');
  });


});
