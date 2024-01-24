Message queu

- data is stored in queue
- data is uploaded to a topice
- microservice subscribe to a topic e.g email service subscribe to order service

Pre-requisite
npm install amqplib

- install rabbitmq
- brew install rabbitmq //install
- brew services start rabbitmq //start
- brew services stop rabbitmq //sop
- brew info rabbitmq // for info
- or install docker image and run command "docker run -d --hostname rmq2 --name some-rabbit2 -p 8080:15672 -p 5672:5672 rabbitmq:3-management"
  
