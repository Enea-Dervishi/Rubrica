<h1>Contact Directory Web Application</h1>
<p>This is a simple web application designed for managing a contact directory. 
It allows you to organize and store information about your contacts, including their first name, surname, gender, date of birth, telephone number, email, and city. 
The application ensures data integrity with mandatory fields and validation checks, and it stores the data in an SQL database for easy access and management. Additionally, you can view, edit, and add new contacts with ease.</p>

<h2>Features</h2>
    <ul>
        <li><strong>First Name</strong>: A field for entering the contact's first name.</li>
        <li><strong>Surname</strong>: A field for entering the contact's surname.</li>
        <li><strong>Gender</strong>: A drop-down box with options "Male" and "Female" for selecting the contact's gender.</li>
        <li><strong>Date of Birth</strong>: A field for entering the contact's date of birth.</li>
        <li><strong>Telephone Number</strong>: A field for entering the contact's telephone number.</li>
        <li><strong>Email</strong>: A field for entering the contact's email address.</li>
        <li><strong>City</strong>: A drop-down box with a list of cities, which is pre-populated from an external source.</li>
    </ul>

  <h2>Validation and Requirements</h2>
    <ul>
        <li><strong>Mandatory Fields</strong>: First Name, Surname, Gender, and Email fields are mandatory.</li>
        <li><strong>Email Validation</strong>: The Email field enforces validation to ensure a valid email address format.</li>
        <li><strong>Phone Number Validation</strong>: The Phone Number field enforces validation to ensure a valid phone number format.</li>
    </ul>

  <h2>User Interface</h2>
    <ul>
        <li><strong>Tabular Display</strong>: You can view all your contacts in a tabular format.</li>
        <li><strong>Add and Edit Contacts</strong>: The application provides forms to insert new contacts and modify existing ones.</li>
    </ul>

  <h2>Technologies Used</h2>
    <p>This web application is built using modern web technologies, making it responsive and accessible on various devices. The stack may include:</p>
    <ul>
        <li><strong>Frontend</strong>: HTML, CSS, JavaScript, and a frontend framework/library React for a responsive user interface.</li>
        <li><strong>Backend</strong>: A server-side technology like Node.js and Express(both JS frameworks).</li>
        <li><strong>Database</strong>: A SQL database system (PostgreSQL) for data storage.</li>
        <li><strong>Validation</strong>: Frontend and backend validation for mandatory fields and data integrity.</li>
        <li><strong>External Data Source</strong>: An external source for pre-populating the city drop-down box.</li>
    </ul>

  <h2>Installation and Setup</h2>
    <p>To use this application, follow these steps:</p>
    <ol>
        <li>Clone this repository to your local environment.</li>
        <li>Set up your backend server and configure the SQL database.</li>
        <li>Run <i>npm start</i> in ./backend/ to start up the server and create the table on the database.</li>
        <li>Run <i>npm start</i> on ./frontend/ to launch the web app.</li>
    </ol>

  <h2>Getting Started</h2>
    <ol>
        <li>Open the application in your web browser.</li>
        <li>Use the forms to add new contacts or edit existing ones.</li>
        <li>View and manage your contacts in tabular format.</li>
    </ol>
