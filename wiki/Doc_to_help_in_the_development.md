# Doc to help in the development #

## How to check if port is in use on Linux or Unix ##

See more [here](https://www.cyberciti.biz/faq/unix-linux-check-if-port-is-in-use-command/)

## How to check the listening ports and applications on Linux ##

1. Open a terminal application i.e. shell prompt.

2. Run any one of the following command:

```bash
~$ sudo lsof -i -P -n | grep LISTEN
~$ sudo netstat -tulpn | grep LISTEN
~$ sudo nmap -sTU -O IP-address-Here
```

### Option #1: lsof command ###

The syntax is:

```bash
~$ sudo lsof -i -P -n
~$ sudo lsof -i -P -n | grep LISTEN
~$ doas lsof -i -P -n | grep LISTEN ### [OpenBSD] ###
```

Consider the last line from above outputs:

```
sshd    85379     root    3u  IPv4 0xffff80000039e000      0t0  TCP 10.86.128.138:22 (LISTEN)
```

- sshd is the name of the application.
- 10.86.128.138 is the IP address to which sshd application bind to (LISTEN)
- 22 is the TCP port that is being used (LISTEN)
- 85379 is the process ID of the sshd process
