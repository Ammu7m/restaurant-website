# Restaurant Reservation Website

This repository contains the source code for a responsive restaurant website with a reservation functionality. The website is built using **HTML**, **CSS**, **Bootstrap**, **JavaScript**, and **PHP**, and connects to a **MySQL** database to handle reservation data.

## Features
- Responsive design using **Bootstrap**
- User-friendly reservation form
- Validation for form fields (frontend and backend)
- Dynamic interaction using **JavaScript**
- Backend integration with **PHP** for handling form submissions
- Data storage in **MySQL**

## Project Structure
```
.
├── index.html             # Homepage
├── reservation.html       # Reservation page
├── css/
│   └── styles.css         # Custom styles
├── js/
│   └── script.js          # Form validation and interactivity
├── php/
│   └── reservation.php    # Backend script for reservations
├── images/                # Assets like images for the website
├── README.md              # Project documentation
```

## Prerequisites
To run this project, ensure you have the following installed:
- **XAMPP** or **WAMP** (for Apache and MySQL)
- A web browser

## Setup Instructions
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/restaurant-reservation.git
   ```
2. Move the project files to your web server's root directory:
   - For XAMPP: Move to `htdocs`
   - For WAMP: Move to `www`
3. Start Apache and MySQL from your local server control panel.
4. Import the database:
   - Open `phpMyAdmin` and create a new database named `restaurant_db`.
   - Import the `restaurant_db.sql` file located in the `database/` folder.
5. Open the website in your browser:
   ```
   http://localhost/restaurant-reservation/index.html
   ```

## Database Schema
The `reservations` table should have the following structure:

| Column Name  | Data Type     | Description                  |
|--------------|---------------|------------------------------|
| id           | INT (Primary) | Auto-incrementing ID         |
| name         | VARCHAR(255)  | Name of the customer         |
| email        | VARCHAR(255)  | Email address                |
| phone        | VARCHAR(15)   | Phone number                 |
| date         | DATE          | Reservation date             |
| time         | TIME          | Reservation time             |
| guests       | INT           | Number of guests             |
| message      | TEXT          | Special requests (optional)  |

## Screenshots
### Homepage
![Homepage](images/homepage-screenshot.png)

### Reservation Form
![Reservation Form](images/reservation-form-screenshot.png)

## Future Enhancements
- Add admin panel to manage reservations.
- Implement email notifications for successful reservations.
- Add more dynamic content using JavaScript frameworks like React.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contributions
Contributions are welcome! Feel free to fork the repository and submit pull requests.
