// import Page from './basic-page-model';
import { Selector } from 'testcafe';


fixture `CPIC KIT`
    .page `http://localhost:8083`;

// const page = new Page();
const settingModal       = Selector('#setting')
const settingIcon        = Selector('#settingicon')
const patientOne        = Selector('input[type=radio][value="0"]+label');
const diplotype          = Selector('#CYP2D6');

const recList = Selector('#reclist')

test('Gene Panel', async t => {
    await t

      .expect(diplotype.innerText).eql('CYP2D6');
});

test('Setting', async t => {
    await t
      .click(settingIcon)
      .wait(1000);

    const defaultRadioButton = Selector('input[type=radio][value="default"]+span')
    const settingModal       = Selector('#setting')
    const okbutton           = Selector('button.btn-primary')

    await t
      .click(defaultRadioButton)
      .wait(1000)
      .click(okbutton)
      .expect(patientOne.getAttribute('opacity')).eql(1);
      // .expect(settingModal.visible).eql(true);

    // if(await defaultRadioButton.exisits){
    //   await t
    //     .click(defaultRadioButton)
    //     .expect(patientOne.getAttribute('disabled')).eql(true);
    // }
    //
    // if(await (patientOne.getAttribute('disabled')==true)){
    //     await t
    //       .click(patientOne)
    //       .wait(2000)
    //       .expect(recList.hasChildElements).eql(true);
    // }

});
