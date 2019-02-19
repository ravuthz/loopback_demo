# Loopback Demo

Crreate Project

```
lb loopback-demo
```

Create models

```
lb model category
lb model product
```

Create model relations

```
lb relation
```

Create postgres datasource

```
 lb datasource
```

Create remote method

```
lb remote-method
```

https://loopback.io/doc/en/lb2/MySQL-connector.html
https://loopback.io/doc/en/lb2/Connecting-to-PostgreSQL.html

https://start.jcolemorrison.com/authorized-resources-and-database-migrations-with-strongloops-loopback/#database-migration

```

{
  "include": [
    "products"
  ]
}

{
  "mysql": {
    "host": "localhost",
    "port": 3306,
    "url": "",
    "database": "loopback_demo",
    "password": "123123",
    "name": "mysql",
    "user": "ravuthz",
    "connector": "mysql"
  }
}

{
  "postgresql1": {
    "host": "localhost",
    "port": 5432,
    "url": "postgres://ravuthz:123123@localhost:5432/ravuthz",
    "database": "ravuthz",
    "password": "123123",
    "name": "postgresql1",
    "user": "ravuthz",
    "connector": "postgresql1"
  }
}
```

https://loopback.io/doc/en/lb3/Relation-REST-API.html

Custom Response and Error
https://github.com/strongloop/loopback/issues/624

```
postgres://ravuthz:123123@localhost/ravuthz

docker run -d -p 5432:5432 --name ravuthz-postgres -e POSTGRES_USER=ravuthz -e POSTGRES_PASSWORD=123123 postgres:9.5
```
