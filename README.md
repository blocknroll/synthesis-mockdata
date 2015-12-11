# Synthesis

Synthesis is a project to explore [Node.js](https://nodejs.org/en/), Event-Driven-Development, and real-time web sockets.

The end goal is to create a **garden monitoring and automation system**, and to provide ideal conditions for your garden to work its magic: photo*synthesis*.

At this stage, an [Express](http://expressjs.com/en/index.html) server listens for sensor information and updates a web dashboard in real time via [socket.io](http://socket.io/).

The data is mocked-in for now, but will later be provided by sensors hooked up to a [Raspberry Pi](https://www.raspberrypi.org/).

The first sensor on the list is the [DS18B20 Digital Temperature Sensor](https://www.sparkfun.com/products/245) from [SparkFun](https://www.sparkfun.com/).

Further plans are to use the [Johnny-Five](http://johnny-five.io/) robotics library to manipulate physical devices, including heating and cooling fans, water pumps, and lighting systems.
