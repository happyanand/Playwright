class Login_Page
{

    constructor(page)
    {
        this.page = page;
        this.SignIn_button = page.locator("button[type='submit']");
        this.Username = page.locator("input[name='username']");
        this.Password = page.locator("input[name='password']") ;

    }   

    async validLogin(username, password)
    {
        await this.Username.fill(username);
        await this.Password.fill(password);
        await this.SignIn_button.click();   

    } 

    async launch_app()
    {
        await this.page.goto('https://ec-sit.brokerengage.net/mme/#/login');
    
    }
}
module.exports = {Login_Page};