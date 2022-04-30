# BooP

Boop is a web application for assist you for taking care your dog

## Boop-frontend
[boop-frontend](https://github.com/LiliTa1762/boop-frontend)

## API Reference

#### Get all dogs

```http
  GET /doggies
```

| Path | Type     | Description                |
| :-------- | :------- | :------------------------- |
|`/doggies` |  `string`  | Your Get list of dogs |



##### Get Profile by ID

```http
  GET /doggie/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Your Get a dog by ID  |


#### Get Profile by ID

```http
  GET /walker/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Your Get a walker by ID  |

### Get all Walkers

```http
  GET /walkers
```

| Path | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/walkers` | `string` |  Your Get list of Walkers |

#### Add Walker's Profile 

```http
  Post /walker/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|           |          | **Required**. Your ADD a walker   |

#### Add dog's Profile by owner's ID

```http
  Post /doggie/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|     `id`  |  `string`| **Required**. Your ADD a dog by owner Id  |

#### Add owner's Profile by ID

```http
  Post /owner/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|           |          |  Your ADD a owner  |
#### Delete Walker's Profile by ID

```http
  Delete /walker/delete/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Your Delete a walker by ID  |

#### Delete Dog's Profile by ID

```http
  Delete /doggie/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Your Delete a Dog by ID  |




## Author

- [@LiliTa1762](https://www.github.com/LiliTa1762)

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Violet | ![#6d28d9](https://via.placeholder.com/10/6d28d9?text=+) #6d28d9 |
| White | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |



## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lilibeth-tabares/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/LilibethTabares)
