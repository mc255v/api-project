# Motorcycle API

Motorcycle API is a resource for viewing the different models of bikes available by manufacturer.
It makes it easy to display all models by brand, or just view a single model. Adding and updating is easy too!


## Who Uses Motorcycle API

* Me
* Myself
* I

## How It Works

1. Magic mostly.
2. The database is PostgreSQL and is set up with Knex to make writing queries easier.
3. Express is used as the server framework for Node.js to provide a powerful and robust application.


## Using the API

1. See all manufacturers:

    ```sh
    /api/v1/brands
    ```

2. See all models by manufacturer:

    ```sh
    /api/v1/:brand
    ```

3. Here’s how you can view a specific model:

    ```sh
    /api/v1/:brand/:model
    ```
4. Now, let’s add a model:

     ```sh
    /api/v1/:brand/
    ```
     'brand': the manufacturer

    ```diff
    {
	    "model": "Name of model",
        "size": "engine displacement",
        "side_r": "url to image for side view",
        "action": "url to image for action shot",
        "display": "url to image for bike display"
    }
    ```

5. Deletion is simple:

    ```sh
    /api/v1/:brand/:model
    ```
