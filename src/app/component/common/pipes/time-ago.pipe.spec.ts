import { TimeAgoPipe } from './time-ago.pipe';

describe('TimeAgoPipe', () => {
  let pipe: TimeAgoPipe;
  let time: number = Date.now();

  beforeEach(() => {
    pipe = new TimeAgoPipe();
  });

  it('should return "Invalid Date" with an invalid date', () => {
    expect(pipe.transform(undefined, undefined)).toEqual('Invalid Date');
    expect(pipe.transform(undefined, time)).toEqual('Invalid Date');
    expect(pipe.transform('', undefined)).toEqual('Invalid Date');
    expect(pipe.transform('', '')).toEqual('Invalid Date');
    expect(pipe.transform({}, {})).toEqual('Invalid Date');
    expect(pipe.transform('date', 'date')).toEqual('Invalid Date');
  });

  it('should return a time ago string', () => {
    expect(pipe.transform(time, time)).toEqual('1 秒前');
    expect(pipe.transform(new Date(time), time)).toEqual('1 秒前');
    expect(pipe.transform(new Date(time).toString(), time)).toEqual('1 秒前');
    expect(pipe.transform(time - 1000 * 37, time)).toEqual('37 秒前');
    expect(pipe.transform(time - 1000 * 60, time)).toEqual('1 分钟前');
    expect(pipe.transform(time - 1000 * 60 * 6, time)).toEqual('6 分钟前');
    expect(pipe.transform(time - 1000 * 60 * 60, time)).toEqual('1 小时前');
    expect(pipe.transform(time - 1000 * 60 * 60 * 13, time)).toEqual(
      '13 小时前'
    );
    expect(pipe.transform(time - 1000 * 60 * 60 * 24, time)).toEqual('1 天前');
    expect(pipe.transform(time - 1000 * 60 * 60 * 24 * 17, time)).toEqual(
      '17 天前'
    );
    expect(pipe.transform(time - 1000 * 60 * 60 * 24 * 30, time)).toEqual(
      '1 月前'
    );
    expect(pipe.transform(time - 1000 * 60 * 60 * 24 * 30 * 3, time)).toEqual(
      '3 月前'
    );
    expect(pipe.transform(time - 1000 * 60 * 60 * 24 * 30 * 12, time)).toEqual(
      '1 年前'
    );
    expect(
      pipe.transform(time - 1000 * 60 * 60 * 24 * 30 * 12 * 4, time)
    ).toEqual('4 年前');
  });
});
