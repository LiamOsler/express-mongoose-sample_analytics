API Documentation
=================

Visit the base URL https://ticker-tape-api.azurewebsites.net/ for HTML version with formatted baseURLs

Built using the MongoDB.com [sample_analytics](https://www.mongodb.com/docs/atlas/sample-data/sample-analytics/) database.

Data
----

### Customers

Customer schema:

```
const schema = mongoose.Schema({
  username: String,
  name: String,
    address: String,
    birthdate: Date,
    email: String,
    active: Boolean,
    accounts: [Number],
    tier_and_details: {
      tier: String,
      id: String,
      active: Boolean,
      benefits: [String]
    }
})
```

Example item:

      `{
  "tier_and_details": {
      "benefits": [],
      "0df078f33aa74a2e9696e0520c1a828a": {
          "tier": "Bronze",
          "id": "0df078f33aa74a2e9696e0520c1a828a",
          "active": true,
          "benefits": ["sports tickets"]
      },
      "699456451cc24f028d2aa99d7534c219": {
          "tier": "Bronze",
          "benefits": ["24 hour dedicated line", "concierge services"],
          "active": true,
          "id": "699456451cc24f028d2aa99d7534c219"
      }
  },
  "_id": "5ca4bbcea2dd94ee58162a68",
  "username": "fmiller",
  "name": "Elizabeth Ray",
  "address": "9286 Bethany Glens\nVasqueztown, CO 22939",
  "birthdate": "1977-03-02T02:20:31.000Z",
  "email": "arroyocolton@gmail.com",
  "active": true,
  "accounts": [371138, 324287, 276528, 332179, 422649, 387979]
}`

#### Customer URLs

##### Get all customers:

Base URL:

<http://localhost:3000/customer/>

##### By skip and limit:

<http://localhost:3000/customer/:n/:k>

Where n = the starting index and k = the number of items

Example:

<http://localhost:3000/customer/10/5>

Returns items 10 through 15

##### Get customers by id:

Base URL:

http://localhost:3000/customer/id/:id

Example:

<http://localhost:3000/customer/id/5ca4bbcea2dd94ee58162a68>

##### Get customers by username:

Base URL:

http://localhost:3000/customer/username/:username

Example:

<http://localhost:3000/customer/username/fmiller>

### Accounts

Account schema:

```
const schema = mongoose.Schema({
  account_id: Number,
  limit: Number,
  products: [String]
})
```

Example item:

```
{
  "_id": "5ca4bbc7a2dd94ee5816238d",
  "account_id": 557378,
  "limit": 10000,
  "products": ["InvestmentStock", "Commodity", "Brokerage", "CurrencyService"]
}
```

#### Account URLs

##### Get all accounts:

Base URL:

<http://localhost:3000/account/>

##### Get account by account_id:

Base URL:

http://localhost:3000/account/account_id/:id

Example:

<http://localhost:3000/account/account_id/557378>

### Transactions

Transaction schema:

```
const schema = mongoose.Schema({
  account_id: Number,
  transaction_count: Number,
  bucket_start_date: Date,
  bucket_end_date: Date,
  transactions: [{
    date: Date,
    amount: Number,
    transaction_code: String,
    description: String,
    balance: Number,
    price: String,
    total: String
  }]
})
```

Example item:

```
{
  "_id": "5ca4bbc1a2dd94ee58161cb1",
  "account_id": 443178,
  "transaction_count": 66,
  "bucket_start_date": "1969-02-04T00:00:00.000Z",
  "bucket_end_date": "2017-01-03T00:00:00.000Z",
  "transactions": [{
      "_id": "63d9fec316c2d0f2a46058fd",
      "date": "2003-09-09T00:00:00.000Z",
      "amount": 7514,
      "transaction_code": "buy",
      "symbol": "adbe",
      "price": "19.1072802650074180519368383102118968963623046875",
      "total": "143572.1039112657392422534031"
  },
  ...
  {
      "_id": "63d9fec316c2d0f2a460593e",
      "date": "2005-07-07T00:00:00.000Z",
      "amount": 2881,
      "transaction_code": "buy",
      "symbol": "msft",
      "price": "20.6769287918292690164889791049063205718994140625",
      "total": "59570.23184926012403650474880"
  }]
}
```

#### Transaction URLs

##### Get all transactions:

Base URL:

<http://localhost:3000/transaction/>

##### Get transactions by account_id:

Base URL:

http://localhost:3000/transaction/account_id/:id

Example:

<http://localhost:3000/transaction/account_id/557378>
