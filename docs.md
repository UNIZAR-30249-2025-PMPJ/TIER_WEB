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

### **Person**
- **`GETBYID`**:  
  Retrieve a person's details by their unique ID.
  
- **`CREATE`**:  
  Create a new person record in the system.

- **`DELETE`**:  
  Remove a person record from the system by their unique ID.

---

