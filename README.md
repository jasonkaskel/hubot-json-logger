# hubot-json-logger
JSON logging for hubot

# Installation
npm install hubot-json-logger --save

Then add *hubot-json-logger* to your `external-scripts.json`:

```
[
  "hubot-json-logger"
]
```

# Sample log

```
{"timestamp":"2019-05-01T14:54:07.773Z","level":"info","message":"hubot-redis-brain: Using default redis on localhost:6379"}
```

# Examples

## Simple string based logging

```
robot.logger("My name is Inigo Montoya")
>> {"timestamp":"2019-05-01T14:54:07.773Z","level":"info","message":"My name is Inigo Montoya"}
```

## Object based logging

```
robot.logger({ name: "Inigo Montoya", drive: "vengeance" })
>> {"timestamp":"2019-05-01T14:54:07.773Z","level":"info","name":"Inigo Montoya","drive":"vengeance" }
```
