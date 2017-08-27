import isUntoggled from './is-untoggled';

describe('with existing flag', () => {
  describe('with flag variant', () => {
    it('should indicate feature being toggled', () => {
      const props = { fooFlag: 'foo-variant' };
      expect(isUntoggled('fooFlag', 'foo-variant')(props)).toBe(false);
    });

    it('should indicate feature being untoggled', () => {
      const props = { fooFlag: 'foo-variant' };
      expect(isUntoggled('fooFlag', 'foo-variant-1')(props)).toBe(true);
    });
  });

  describe('without flag variant', () => {
    it('should indicate feature being toggled', () => {
      const props = { fooFlag: true };
      expect(isUntoggled('fooFlag')(props)).toBe(false);
    });

    it('should indicate feature being untoggled', () => {
      const props = { fooFlag: false };
      expect(isUntoggled('fooFlag')(props)).toBe(true);
    });
  });
});

describe('with non existing flag', () => {
  it('should indicate feature being untoggled', () => {
    const props = { fooFlag: true };
    expect(isUntoggled('fooFlag2')(props)).toBe(true);
  });
});