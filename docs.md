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

Messages contain two key identifiers:

- **`ENTITY`** – The domain or resource being acted on (e.g., `Person`)
- **`OPERATION`** – The action to perform (e.g., `GETBYID`, `CREATE`, `DELETE`)

This structure allows the Application Tier to interpret and route each message appropriately.


## Supported Operations

### Entity: Person
- **`GETBYID`**:  
  Retrieve a person's details by their unique ID.  
  - Parameters:
    - `id` (required): The unique ID of the person to retrieve.  
  - Response:  
    - `200`: A person object containing properties like `id`, `name`, `email`, `department`, and `role`.  
    - `404`: Person not found.

- **`CREATE`**:  
  Create a new person record in the system.  
  - Parameters:  
    - `body` (required): The person object to create, including properties like `name`, `email`, `department`, and `role`.  
  - Response:  
    - `200`: The created person object with properties like `id`, `name`, `email`, `department`, and `role`.  
    - `404`: Person not created.

- **`DELETE`**:  
  Remove a person record from the system by their unique ID.  
  - Parameters:  
    - `id` (required): The unique ID of the person to delete.  
  - Response:  
    - `200`: Confirmation that the person was deleted successfully.  
    - `404`: Person not found.


### Entity: Space
- **`GET`**:  
  Retrieve a list of spaces or a specific space by its unique ID.  
  - Parameters:
    - `id` (optional): The unique ID of the space to retrieve.
    - `maxOccupants` (optional): Filter spaces by maximum occupants.
    - `reservabilityCategory` (optional): Filter spaces by reservability category.
    - `floor` (optional): Filter spaces by floor.
  - Response:
  - **Response**:  
    - `200`: A list of spaces matching the query parameters.  
      - Content-Type: `application/json`  
      - Schema:  
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
    - `400`: Invalid input.  
    - `404`: Space not found.

- **`PUT`**:  
  Update the details of a specific space by its unique ID.  
  - Parameters:
    - `id` (required): The unique ID of the space to update.
    - `body` (required): The updated space object, including properties like:
      - `reservable` (boolean): Indicates if the space is reservable.
      - `maxUsage` (integer): The maximum usage time for the space.
      - `openTime` (string, date-time): The opening time of the space.
      - `closeTime` (string, date-time): The closing time of the space.
      - `reservabilityCategory` (object): The category of reservability, with a `name` property (string).
      - `type` (string): The type of the space.
      - `assignedTo` (string): The entity or person assigned to the space.
  - Response:  
    - `200`: Space updated successfully.  
      - Content-Type: `application/json`  
      - Schema:  
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
    - `400`: Invalid input.  
    - `404`: Space not found.
---

