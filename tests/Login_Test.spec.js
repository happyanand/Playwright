const {test, expect}= require("@playwright/test");
const {POManager} = require("../Page_Object/POManager");
//JSON --> String --> js object 
const dataset = JSON.parse(JSON.stringify(require("../Page_Object/utils/TestData.json")));


test.only('Login Test',async({page}) =>
{

    const poManager = new POManager(page);
    const loginpage = poManager.getLoginPage();
    await loginpage.launch_app();
    await loginpage.validLogin(dataset.username, dataset.password);

});







