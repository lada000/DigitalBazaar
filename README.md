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

## WHAT NEW
*The Database `digital_bazaar_development` and the following models in it were created
- **User**: Represents a system user who has a username, email address, password hash, role.
- **Product**: Represents a product that has a name, description and price.
- **Cart**: Represents a cart that can contain products.
- **CartItem**: Contains information about the items in the cart, such as the number of items.
- **Order**: Represents an order containing information about the order amount and its status.
- **OrderItem**: Contains information about the items in the order, such as quantity of items and unit price.
- **Payment**: Contains payment information such as payment date, amount, payment method and payment status.

*A controller has been created for each model

*Configured the CanCanCan gem for authorization, assigned the roles of guest, administrator and user
