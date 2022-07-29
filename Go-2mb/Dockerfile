FROM golang:1.18.4-alpine3.16 AS builder
WORKDIR /app
COPY . .
RUN go build -o fullcycle-go-challange

FROM scratch
WORKDIR /app
COPY --from=builder /app/fullcycle-go-challange /app
ENTRYPOINT ["/app/fullcycle-go-challange"]