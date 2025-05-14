# Simple Traficom API

A simple REST API of vehicle registration database which uses MongoDB.

## API Endpoints

### Return all vehicles from the database
- **URL**: `/api/getall`
- **Method**: `GET`
- **Response**: 
  ```json
  [
    {
      "_id": "68229e3cfd41d32647c13e34",
      "model": "BMW",
      "type": "Coupe",
      "kilpi": "ABC123"
    }
  ]
  ```

### Get single vehicle information by ID
- **URL**: `/api/:id`
- **Method**: `GET`
- **Example**: `/api/68229e3cfd41d32647c13e34`
- **Response**: 
  ```json
    {
      "_id": "68229e3cfd41d32647c13e34",
      "model": "BMW",
      "type": "Coupe",
      "kilpi": "ABC123"
    }
  ```

### Add a new vehicle
- **URL**: `/api/add`
- **Method**: `POST`
- **Request Body**:
  ```json
    {
      "model": "BMW",
      "type": "Coupe",
      "kilpi": "ABC123"
    }
  ```
- **Response**: 
  ```json
    {
      "_id": "68229e3cfd41d32647c13e34",
      "model": "BMW",
      "type": "Coupe",
      "kilpi": "ABC123"
    }
  ```

### Update vehicle information
- **URL**: `/api/update/:id`
- **Method**: `PUT`
- **Example**: `/api/update/68229e3cfd41d32647c13e34`
- **Request Body**:
  ```json
  {
    "model": "BMW M",
    "kilpi": "ABC234"
  }
  ```
- **Response**: 
  ```json
  {
    "_id": "68229e3cfd41d32647c13e34",
    "model": "BMW M",
    "type": "Coupe",
    "kilpi": "ABC234"
  }
  ```

### Delete vehicle
- **URL**: `/api/delete/:id`
- **Method**: `DELETE`
- **Example**: `/api/delete/68229e3cfd41d32647c13e34`
- **Response**: 
  ```json
  {
    "message": "Vehicle deleted successfully"
  }
  ```