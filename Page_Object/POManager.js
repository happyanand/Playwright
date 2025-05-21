const {Login_Page} = require('./Login_Page');

class POManager
{
    constructor(page)
    {
        this.page = page;
        this.loginPage = new Login_Page(this.page);
    }

    getLoginPage()
    {
        return this.loginPage;
    }
}
module.exports = {POManager};