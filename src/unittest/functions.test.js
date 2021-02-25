const { textSpanContainsPosition } = require('typescript');
const functionsJS = require('../functions/functions');
it('1 + 2 = 3', () => {
	expect(functionsJS.add(1,2)).toBe(3);
});
    	
it('string show', () => {
	expect(functionsJS.show('ff')).toBe('ff');
});
