# useFetch   
![npm](https://img.shields.io/npm/dw/ufetch-hook)

## Description

useFetch is a React hook to fetch data from an API and return the data, loading state and error.

## Installation

```js
npm i ufetch-hook
```
or 
```
yarn add ufetch-hook
```

## Parameters

useFetch takes 3 parameters:

- url: The url of the API.
- method: The method of the request. (GET, POST, PUT, PATCH, DELETE)
- body: The body of the request. (this parameter is only used for POST, PUT and PATCH methods)

useFetch returns an object with 3 properties:

- data: The data returned from the API.
- loading: The loading state of the request.
- error: The error returned from the API.

```const { data, loading, error } = useFetch(url, method, body)```

## Example

```js
import useFetch from 'ufetch-hook';

const App = () => {
  const api = 'https://api.github.com/users';
  const { data, loading, error } = useFetch(api, 'GET');

  return (
    <div>
      <h1>useFetch</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default App;
```

## License
[ISC](https://opensource.org/licenses/ISC)

## Author
[Raul Jimenez](https://www.linkedin.com/in/raul-jimenez-778b2a196/)

## Website
[raulwebdev.com](https://raulwebdev.com)
