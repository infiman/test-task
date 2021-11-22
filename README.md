# How to use

This is a simple API which provides you a capability to determine whether some value is multiply of 3 or 5.

## Stack

ExpressJS, Jest (for testing)

## Installation

Clone this repo and run:

```
npm install
```

## Usage

Run:
```
npm start
```
It will start ExpressJS server which exposes GET `/multiply-of-3-and-5` endpoint. It takes `value` query param and determines whether it is multiply of 3 or 5.
`value` can be only integer and is required. Otherwise, Bad Response with error will return.
Response's result depends on whether `value` is multiply of 3 (string "G" will return) or 5 (string "N" will return). If both, then both strings are combined.
If it doesn't match as multiply of any, then `value` itself returns as a result.

Examples:
```
200 OK /multiply-of-3-and-5?value=3:

{
  "result": "G"
}

400 Bad Response /multiply-of-3-and-5?value=not_an_integer

{
  "error": {
    "message": 'Only integer type is allowed as value and it is required.'
  }
}

```

## Tests

```
npm test
```
