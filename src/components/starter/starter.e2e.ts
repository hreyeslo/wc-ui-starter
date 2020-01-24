import { newE2EPage } from '@stencil/core/testing';

describe('starter', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<starter></starter>');
    const element = await page.find('starter');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<starter></starter>');
    const component = await page.find('starter');
    const element = await page.find('starter >>> div');
    expect(element.textContent).toEqual(`Hello World`);

    component.setProperty('test', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James`);
  });
});
