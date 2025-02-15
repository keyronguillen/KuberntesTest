create table user(
    id int primary key AUTO_INCREMENT,
    name varchar(250),
    contactNumber varchar(20),
    email varchar(50),
    password varchar(250),
    status varchar(20),
    role varchar(20),
    UNIQUE (email)
);
insert into user (name, contactNumber, email, password, status, role) values ('Admin2', '63120838', 'admin2@gmail.com', 'admin', 'true', 'admin')
insert into user (name, contactNumber, email, password, status, role) values ('Admin', '84688510', 'admin@gmail.com', 'SeverusSnape96$', 'true', 'admin')

create table category(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    primary key(id)
);

create table product(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    categoriId int integer NOT NULL.
    description varchar(255),
    price integer,
    status varchar*(20),
    primary key(id)
);

create table bill(
    id in NOT NULL AUTO_INCREMENT,
    uuid varchar(200) NOT NULL,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    contactNumber varchar(20) NOT NULL,
    paymentMethod varchar(50) NOT NULL,
    TOTAL int NOT NULL,
    productDetails JSON DEFAULT NULL,
    createdBy varchar(255) NOT NULL,
    primary key(id)
)