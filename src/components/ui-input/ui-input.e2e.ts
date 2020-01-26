import { newE2EPage } from '@stencil/core/testing';

describe('ui-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ui-input></ui-input>');
    const element = await page.find('ui-input');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<ui-input></ui-input>');
    const component = await page.find('ui-input');
    const element = await page.find('ui-input >>> div');
    expect(element.textContent).toEqual(`Hello World`);

    component.setProperty('test', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James`);
  });
});
