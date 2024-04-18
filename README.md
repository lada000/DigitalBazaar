#DigitalBazaar

DigitalBazaar is a simple web application that allows users to sell and buy products online. The application is developed using Ruby on Rails and a PostgreSQL database.

## Functionality

1. **User Accounts**: Users can create accounts, log in and manage their profile.
2. **Post Products**: Users can post their products for sale by specifying the title, description and price.
3. **Purchasing Products**: Users can view products, add them to cart and make purchases.
4. **Basket**: The application provides shopping cart functionality for easy collection and ordering.
5. **Transactions and Payments**: When you make purchases, transactions are generated that allow you to track the status of orders, as well as payments that record financial transactions.
6. **Product Categories**: Products can be divided into categories for ease of navigation and search.

## Installation and launch

1. **Clone a repository**:

  ```bash
    git clone https://github.com/yourusername/DigitalBazaar.git
  ```

2. **Installing dependencies**:

  ```bash
   cd DigitalBazaar
   bundle install
  ```

3. **Database setup**:

  ```bash
    rails db:create
    rails db:migrate
  ```
xw
## WHAT NEW
Today i did the following in our DigitalBazaar project:

* Added routes for the user profile and his regional resources, such as products.
* Created a user profile page using the “Add Product” and “Change Password” buttons.
* Added the ability to edit the user profile and change the text.
* Fixed bugs related to using incorrect routes and provided templates.
