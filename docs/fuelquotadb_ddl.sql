create database fuelquotadb;
create user 'fqdbadmin'@'localhost' IDENTIFIED BY 'asdf.1234';
grant all privileges on fuelquotadb.* to fqdbadmin@localhost ;