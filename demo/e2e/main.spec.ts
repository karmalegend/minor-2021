import { test, expect } from '@playwright/test';
import { MainPO } from './main.po';

test.describe('Main page', () => {
	let po: MainPO;

	test.beforeEach(({ page }) => {
		po = new MainPO(page);
	});

	test('should support adding drivers to the list', async ({ page }) => {
		await po.navigateTo();
		let lengthBefore = await po.countDrivers();

		await po.submitForm({
			name: 'Checko',
			points: 94,
			photoUrl: '...'
		});

		expect(await po.countDrivers()).toBe(lengthBefore + 1);
	});
});
