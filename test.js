import execa from 'execa';
import test from 'ava';
import m from './api';

test('api', async t => {
	const res = await m();

	t.true(res.isDone);
	t.is(typeof res.speed, 'number');
	t.is(typeof res.unit, 'string');
});

test('cli', async t => {
	const stdout = await execa.stdout('./cli.js');
	t.regex(stdout, /\d+\s\w+/);
});
