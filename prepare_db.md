# Preparing the Database

Do the following as root

```sql
 create database bookish;
 create user gaurav_bookish identified by 'Bookish 1';
 use bookish;
 grant all privileges on bookish to gaurav_bookish;
 grant all privileges on bookish.* to gaurav_bookish;
```
