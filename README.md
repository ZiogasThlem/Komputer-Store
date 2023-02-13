# **Komputer Store**

This is the first assignment of the FrontEnd section of the Noroff FullStack Course. It is a project consisted of HTLM, CSS for styling (with Bootstrap) and Vanilla Javascript for functionality.

I made use of two git branches, the "master" branch with the final product and the "secondary" branch that I wrote the code that was then merged to "master". Every commit was originally made on "secondary", while "master" acted as a back-up.

<u>The contents of the project are following files:</U>

- **index.html**, file with HTML code and project skeleton
- **style.css**, file with CSS code making use of Bootstrap library for styling the .html file
- **scripts directory**, (covered in detail below)
- **bg-image.png**, image file I used as background for the project
- **sample layout.png**, image of what the application should look like 
- **Komputer Store.pdf**, custom Figma Wireframe with the layout I used (default screen size used is 13,3")

The project represents a computer store (with a built-in ATM!). Making use of "container-fluid" Bootstrap block, the components are then split into three rows: Header, Main and Footer.

From top to bottom, there is a header with a home, information and contact link as well as a search bar (sadly neither header nor footer links have any functionality and are included for better displaying an actual online store).

In the main row, there are the components with functionality. There we can find the following:

1. **My Wallet Balance:** In this section, there is a row for displaying the Balanced value added after pressing the Work button, as well as the Work, Bank and Repay Loan Button (Repay Loan Button Starts as disabled as there is no starting loan)
2. **My Bank Balance:** In this section, there is a row for Bank Balance value, a row for the Current Loan value.
3. **Laptop Selection:** In this section, there is a select tab to browse all different laptops
4. **Laptop Features:** In this section, there is a paragraph with the features of the each time selected laptop
5. **Laptop Purchase Option:** there, the each time selected laptop title, image and "BUY NOW!" button price are displayed

Lastly, in the footer we can see the "They said about us", "LinkedIn", "Become a partner links" and a "Subscribe to our newsletter" input form, that in the same manner as the header section, have no functionality.

<u>About the JS scripts:</u>

1.  **store.js:** In this script the Fetch API is made use to "fetch" the required resources (the list of laptops) from the provided API for us. After that, two functions that are later passed to EventListener are implemented:

    1. handleLaptopMenuChange function that with the use of an event parameter, is in charge of handling the changes in the laptop menu, title, image, description and price according to the user selection
    2. buyNow function, that is linked to the "BUY NOW!" button, checks if the value of the Bank Balance is equal or more than that of the selected laptop. If it is the purchase is complete and a message is displayed to the user congratulating the on their new acquisition, but if not another message that informs them of the lacking amount is displayed instead.
2.  **bank.js:**  In this script, bankBalance and loan are initialized from their respective innerHTML, as well as Setter functions for both. They are then exported to be made use in the store.js and work.js scripts. Last but not least, the getNewLoan function is implemented, linked to the "Get Loan" added to eventListener. The way that it works is as follows:

    1. Firstly the Bank Balance is checked because if balance is 0, a user can't take a loan and an appropriate message is displayed.
    2. Then, the Loan value is checked, since user can't have two active loans, and if found over 0, it means that there is an outstanding loan and the user is informed accordingly.
    3. The user is then called to enter a desired amount for their loan. If the desired amount is two times more than their Bank Balance value, the user is informed for the amount that he is missing to be able to qualify for the chosen loan (Bonus check for input value of 0, since that doesn't make sense)
    4. Lastly, since all the above conditions are (not) met, it means that the user qualifies for their chosen loan (!). The desired amount is added to both the Bank Balance and the Loan. Also the "Repay Loan" button is enabled (more info on this in the work.js script description).
3.  **work.js:**  In this script, the following functions are implemented, linked to their respective buttons and added to the eventListener:

    1. handleSalaryAddition: With each click of the "Work" button, 100$ are added to the Wallet Balance Value.
    2. handleMakeDeposit: The user is called to select a (valid) value to deposit to the bank, thus add it to the Bank Balance value (with the use of imported setBalance() function). If there is an outstanding loan, the transferred value is subtracted by 10% (or less if loan value is less than 10% of the value intended for depositing), and is later subtracted by the Loan value (with the use of imported setLoan() function), then the remaining value is added to the Bank Balance. It is link to the "Bank" button.
    3. handleRepayLoan: This function is used for transferring the whole amount of the Wallet Balance to the bank, for repaying an outstanding loan. The transferred is subtracted for the loan and the remaining amount is added to the Bank Balance (again with the use of imported setter functions). It is linked to the Repay Loan button. One important note is that this button starts as "disabled", and is set to "enabled" if and only if the user gets a loan. Then if the loan is payed back (through the handleMakeDeposit and this function) the button again is set to "disabled".


