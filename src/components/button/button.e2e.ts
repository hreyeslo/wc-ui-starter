import { newE2EPage } from '@stencil/core/testing';

describe('button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<button></button>');
    const element = await page.find('button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<button></button>');
    const component = await page.find('button');
    const element = await page.find('button >>> div');
    expect(element.textContent).toEqual(`Hello World`);

    component.setProperty('test', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James`);
  });
});
