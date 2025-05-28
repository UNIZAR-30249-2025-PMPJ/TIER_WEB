# Async Communication Documentation

## Architecture Overview

This system uses **RabbitMQ** to enable asynchronous communication between the **Web Tier** and the **Application Tier**.

### Flow Summary

1. The **client** sends an HTTP request to the **Web Tier (API Gateway)**.
2. The Web Tier **publishes a message** to a RabbitMQ queue.
3. The **Application Tier** consumes the message, processes it, and prepares a response.
4. The Application Tier **sends a response message** to a temporary reply queue.
5. The Web Tier listens to the reply queue and sends the **HTTP response** back to the client.

This decouples the frontend from backend logic and ensures scalability and resilience.

---

## Queue

- **`webapp`**:  
  The primary queue used for communication between the Web and Application tiers.  
  - Web Tier sends requests to this queue.
  - Application Tier listens for messages on this queue and processes them.
- **`reply`**:
  The temporary queue used for sending responses back to the Web Tier.  
  - The Application Tier sends response messages to this queue.
  - The Web Tier listens for messages on this queue and sends the HTTP response back to the client.

---

## Message Structure

```json
      {
        "entity": "string",
        "operation": "string",
        "action": "string",
        "body": {},
        "header": {
          "host": "string",
          "accept-encoding": "string",
          "authorization": "string",
          "connection": "string"
        },
        "params": {},
        "query": {}
      }
```

Messages contain two key identifiers:

- **`ENTITY`** – The domain or resource being acted on (e.g., `Person`)
- **`ACTION`** – The action to perform (e.g., `GET`, `POST`, `PUT`, `DELETE`)
- **`OPERATION`** – The operation to perform (e.g., `GETBYID`, `CREATE`, `LOGIN`, `DELETE`)

This structure allows the Application Tier to interpret and route each message appropriately.

---

## Supported Operations

### Entity: Auth

* **`LOGIN`**
  Authenticate a user and return an access token.

  * **Request Body:**

    ```json
    {
      "email": "string"
    }
    ```
  * **Response:**

    * `200`: Successful login, returns an access token.

      ```json
      {
        "token": "string"
      }
      ```
    * `404`: Person not found.
    * `500`: Internal server error.

### Entity: Building

* **`GET`**
  Retrieve buildings or a specific building.

  * **Query Parameters:**

    * `id` (optional)
  * **Response:**

    * `200`: Buildings retrieved.

      ```json
      [
        {
          "id": "string",
          "openTime": "string (date-time)",
          "closeTime": "string (date-time)",
          "maxUsage": 0,
          "holidays": [
            "string (date-time)"
          ]
        }
      ]
      ```
    * `404`: Building not found.
    * `500`: Internal server error.

* **`PUT`**
  Update a building by ID.

  * **Parameters:**

    * `id` (required)
  * **Request Body:**

    ```json
    {
      "openTime": "string (date-time)",
      "closeTime": "string (date-time)",
      "maxUsage": 0,
      "holidays": ["string (date-time)"]
    }
    ```
  * **Response:**

    * `200`: Building updated.

      ```json
      {
        "id": "string",
        "openTime": "string (date-time)",
        "closeTime": "string (date-time)",
        "maxUsage": 0,
        "holidays": [
          "string (date-time)"
        ]
      }
      ```
    * `400`: Invalid input.
    * `404`: Building not found.
    * `500`: Internal server error.



### Entity: Notification

* **`GET`**
  Retrieve notifications for a user.

  * **Query Parameters:**

    * `id` (optional): User ID.
  * **Response:**

    * `200`: Notifications retrieved.

      ```json
      [
        {
          "id": "string",
          "message": "string",
          "date": "string (date-time)",
          "personId": "string"
        }
      ]
      ```
    * `404`: Notifications not found.
    * `500`: Internal server error.


### Entity: Person

* **`GETBYID`**
  Retrieve a person's details by their unique ID.

  * **Parameters:**

    * `id` (required): Unique ID of the person.
  * **Response:**

    * `200`: Returns the person object.

      ```json
      {
        "id": "string",
        "name": "string",
        "email": "string",
        "department": "string",
        "role": {
          "name": "string"
        }
      }
      ```
    * `404`: Person not found.
    * `500`: Internal server error.

* **`UPDATE`**
  Update a person's details by ID.

  * **Parameters:**

    * `id` (required): Unique ID of the person.
  * **Request Body:**

    ```json
    {
      "department": "string",
      "role": "string"
    }
    ```
  * **Response:**

    * `200`: Person updated successfully.

      ```json
      {
        "id": "string",
        "name": "string",
        "email": "string",
        "department": "string",
        "role": {
          "name": "string"
        }
      }
      ```
    * `400`: Invalid role or department for the role.
    * `404`: Person not found.
    * `500`: Internal server error.
    

* **`DELETE`**
  Remove a person by ID.

  * **Parameters:**

    * `id` (required): Unique ID of the person.
  * **Response:**

    * `200`: Person deleted successfully.

      ```json
      {
        "id": "string",
        "name": "string",
        "email": "string",
        "department": "string",
        "role": {
          "name": "string"
        }
      }
      ```
    * `404`: Person not found.
    * `500`: Internal server error.


* **`CREATE`**
  Create a new person record.

  * **Request Body:**

    ```json
    {
      "name": "string",
      "email": "string",
      "department": "string",
      "role": "string"
    }
    ```
  * **Response:**

    * `200`: Person created successfully.

      ```json
      {
        "id": "string",
        "name": "string",
        "email": "string",
        "department": "string",
        "role": {
          "name": "string"
        }
      }
      ```
    * `409`: Person already exists.
    * `500`: Internal server error.


### Entity: Reservation

* **`GET`**
  Retrieve reservations or a specific reservation.

  * **Query Parameters:**

    * `id` (optional)
    * `spaceIds` (optional)
    * `personId` (optional)
    * `startTime`, `duration` (optional)
    * `state` (optional)
  * **Response:**

    * `200`: Returns reservations.

      ```json
      [
        {
          "id": "string",
          "usage": "string",
          "startTime": "string (date-time)",
          "duration": 0,
          "maxAttendees": 0,
          "description": "string",
          "state": "string",
          "personId": "string",
          "spaceIds": ["string"]
        }
      ]
      ```
    * `400`: Invalid input.
    * `404`: Reservation not found.
    * `500`: Internal server error.

* **`POST`**
  Create a reservation.

  * **Request Body:**

    ```json
    {
      "usage": "string",
      "startTime": "string (date-time)",
      "duration": 0,
      "maxAttendees": 0,
      "description": "string",
      "personId": "string",
      "spaceIds": ["string"]
    }
    ```
  * **Response:**

    * `200`: Reservation created.
    ```json
    {
      "usage": "string",
      "startTime": "string (date-time)",
      "duration": 0,
      "maxAttendees": 0,
      "description": "string",
      "personId": "string",
      "spaceIds": ["string"]
    }
    ```
    * `404`: Space or person not found.
    * `500`: Internal server error.

* **`PUT`**
  Update a reservation by ID.

  * **Parameters:**

    * `id` (required)
  * **Request Body:**

    ```json
    {
      "state": "string"
    }
    ```
  * **Response:**

    * `200`: Reservation updated.
    ```json
    {
      "usage": "string",
      "startTime": "string (date-time)",
      "duration": 0,
      "maxAttendees": 0,
      "description": "string",
      "personId": "string",
      "spaceIds": ["string"]
    }
    ```
    * `404`: Reservation not found.

* **`DELETE`**
  Delete a reservation by ID.

  * **Parameters:**

    * `id` (required)
  * **Response:**

    * `200`: Reservation deleted.
    ```json
    {
      "usage": "string",
      "startTime": "string (date-time)",
      "duration": 0,
      "maxAttendees": 0,
      "description": "string",
      "personId": "string",
      "spaceIds": ["string"]
    }
    ```
    * `404`: Reservation not found.
    * `500`: Internal server error.




### Entity: Space

* **`GET`**
  Retrieve spaces or a specific space.

  * **Query Parameters:**

    * `id` (optional)
    * `maxOccupants` (optional)
    * `reservabilityCategory` (optional)
    * `floor` (optional)
    * `reservable` (optional)
  * **Response:**

    * `200`: Returns a list of spaces.

      ```json
      [
        {
          "id": "string",
          "name": "string",
          "reservable": true,
          "occupants": 0,
          "maxOccupants": 0,
          "maxUsage": 0,
          "openTime": "string (date-time)",
          "closeTime": "string (date-time)",
          "building": "string",
          "floor": "string",
          "size": 0,
          "reservabilityCategory": {
            "name": "string"
          },
          "type": "string",
          "assignedTo": "string"
        }
      ]
      ```
    * `404`: Space not found.
    * `500`: Internal server error.

* **`PUT`**
  Update a space by ID.

  * **Parameters:**

    * `id` (required)
  * **Request Body:**

    ```json
    {
      "reservable": true,
      "maxUsage": 0,
      "openTime": "string (date-time)",
      "closeTime": "string (date-time)",
      "reservabilityCategory": {
        "name": "string"
      },
      "type": "string",
      "assignedTo": "string"
    }
    ```
  * **Response:**

    * `200`: Space updated successfully.

      ```json
      {
        "message": "string",
        "space": {
          "id": "string",
          "name": "string",
          "reservable": true,
          "occupants": 0,
          "maxOccupants": 0,
          "maxUsage": 0,
          "openTime": "string (date-time)",
          "closeTime": "string (date-time)",
          "building": "string",
          "floor": "string",
          "size": 0,
          "reservabilityCategory": {
            "name": "string"
          },
          "type": "string",
          "assignedTo": "string"
        }
      }
      ```
    * `400`: Invalid input.
    * `404`: Space not found.
    * `500`: Internal server error.




---
