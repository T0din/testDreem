# Dreem interview exercise

## General

The objectif of this exercise is to have a baseline we can use for our technical discussion. This means that there is no need to complete it in its entirety in order to have something we can discuss. You should not spend more than 2 hours on it. Anything that you did not finish due to a lack of time can be further explained and explored during the interview.

Please send us the result as a link to a private repository or as an archive.

## Data

The `generate_mock.py` file allows to generate the `db.json` file used for the rest of this exercise.

```sh
python generate_mock.py
```

The objective is to build a very simple app around this dataset, you can use a simple [mock http server](https://github.com/typicode/json-server) to serve it.

Example:

``` sh
json-server --watch db.json
```
As per the mock server's documentation the available routes should be:

```
GET    /persons
GET    /persons/1
POST   /persons
PUT    /persons/1
PATCH  /persons/1
DELETE /persons/1
```

## Exercise

This is a basic description of the app and its features. Anything that is not precisely specified is open to interpretation and should be considered while keeping in mind the best user experience possible.

Internally we use React but feel free to use whatever you are comfortable with.

The user should be able to see a paginated list of the persons and see their name, type and date of birth in a table. The user should be able to when possible filter and order the persons by their name, type and date of birth.

Each element of the list should allow the user to access a detailed page on the person which would include the description field. Here the user should be able to edit the information about each person using a form. Finally the user should be able to delete a specific person from the dataset using a button.