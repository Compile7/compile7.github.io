---
title: "Learn Everything About Nginx Logs in 5 Minutes"
date: "2022-11-25"
coverImage: quick-5-minute-guide-about-the-nginx-access-and-error-logs.png
tags:
  - "Nginx"
  - "Logs"
description: "In this article, you'll learn about Nginx logs, such as error and access logs. Also, you'll learn how to format them as needed."
author: "Vijay Singh Shekhawat"
prevLabel: How to Build a Responsive Navbar with HTML and CSS
previous: responsive-navbar-with-html-and-css
nextLabel: Callback vs. Promises vs. Async/Await
next: callback-vs-promises-vs-async-await
---

NGINX is an open-source web server and application server that helps you build a faster, scalable, secure, and reliable service.

It provides features like load balancing, reverses proxy, caching, HTTP, and mail servers. Some advanced features like high performance and robust security make it a valued asset for your infrastructure.

The Nginx HTTP server has a highly customizable and outstanding logging facility. It writes information in different severity levels to the logs: `debug`, `info`, `notice`, `warn`, `error`, `alert`, and `emerg`.

By default, the Nginx access log is located at `/var/log/nginx/access.log`, and the error log is located at `/var/log/nginx/error.log`.

Nginx logs file default path depends on the operating system and installation. You can override the default settings and change the format of logged messages by editing the configuration file `/etc/nginx/nginx.conf`.

In this article, you'll learn everything about the Nginx logs.

## What is the Purpose of the Access Log?

Nginx logs all client requests just after the request is processed in the access logs.

In access logs, you will see what files are accessed, how Nginx responded to a request, which browser a client is using, client IP addresses, and more in this section.

You can use the information from the access log to evaluate traffic and monitor site use over time.

If a user is submitting suspicious requests, you can monitor them using the access logs, and it helps identify the <a href="https://www.loginradius.com/resource/mitigating-security-issues-in-enterprise-mobile-application/">application security</a> vulnerabilities.

## What is the Purpose of the Error Log?
Whenever Nginx encounters problems, it will log them in the error log.

It might be an error in the configuration file, Nginx not starting or unexpectedly stopping, encountering a problem, an error coming from the upstream connection, connection time, etc. Nginx will log these in the error log. 

These issues are categorized as `debug`, `info`, `notice`, `warn`, and `error`.

The default error log level is `error`, which works globally. By default, the error log is located at `logs/error.log`.

The error log directive overrides the setting inherited from the higher levels and can be defined at the `http`, `stream`, `server`, and `location` levels.

## How to Configure the Nginx Access Log?
Nginx requests are logged in the context of a location where processing ends. It may be different from the original location, found in either the `HTTP` or `server` or `location` sections.

The syntax of the `access_log` directive is:

```js
Syntax:	access_log path [format [buffer=size] [gzip[=level]] [flush=time] [if=condition]];
access_log off;
Default:	
access_log logs/access.log combined;
Context:	http, server, location, if in location, limit_except
```

By default, Nginx logs access log has a predefined `combined` format. You can overwrite access log formatting as needed.

The following examples define the log format that extends the predefined `combined` format with the value indicating the response's gzip compression ratio.

```js
http {
    log_format compression '$remote_addr - $remote_user [$time_local] '
                           '"$request" $status $body_bytes_sent '
                           '"$http_referer" "$http_user_agent" "$gzip_ratio"';

    server {
        gzip on;
        access_log /spool/logs/nginx-access.log compression;
        ...
    }
}
```

## How to Set Up the Nginx Error Log?
The `error_log` directive sets up error logging to `file` or `stderr` or `Syslog` by specifying the minimum severity level of error messages to be logged.

The syntax of the `error_log` directive is:

```js
error_log /path/to/log_file log_level;
```

Example:

```js
error_log /var/log/nginx/error_log warn; 

```

This will instruct Nginx to log all messages of type warn and more severe log-level crit, alert, and emerg messages.

## How to Custom Format Nginx logs?

The `combined log` format is the default for storing all transactions in the access log.

You can create your custom log format and then specify the name of the custom format in the access log directive; you can override the default behavior.

Nginx Default access log configuration:

```js
http {
    server {
         access_log /path/to/log_file/nginx-access.log combined;
        ...
    }
}
```

Another example of the log format enables tracking different time values between NGINX and an upstream server that may help to diagnose a problem if your website experiences slowdowns.

You can use the following variables to log the indicated time values.

The first example has shown how you can track or log user agents, upstream server response time, request refer host, user IP address, etc.

```js
http {

    log_format custom_log_format '$remote_addr - $remote_user [$time_local] '
                           '"$request" $status $body_bytes_sent '
                           '"$http_host" "$upstream_response_time"'
                            '"$http_referer" "$http_user_agent"';
    
    access_log /spool/logs/nginx-access.log custom_log_format;
....................

}

```

The second example shows how you can track or log request query string parameters in the Nginx logs.

```javascript
http {

    log_format custom_log_format '$remote_addr - $remote_user [$time_local] '
                           '"$request" $status $body_bytes_sent '
                           '"$http_host" "$upstream_response_time"'
                            '"$http_referer" "$http_user_agent" clientId="$clientid"';

    access_log /spool/logs/nginx-access.log custom_log_format;
....................

}
```

The Clientid query string request parameter is logged in the Nginx logs. 

You can get all embedded Nginx variables or detail from here:

- [Nginx HTTP Upstream Module](https://nginx.org/en/docs/http/ngx_http_upstream_module.html#var_upstream_connect_time)

- [Nginx HTTP Core Module](http://nginx.org/en/docs/http/ngx_http_core_module.html)

## How to Perform Conditional Logging in the Nginx Log?
Sometimes, you may want to log specific requests. Conditional logging is used to do this in Nginx.

Suppose you want to exclude 200 status responses from the logs as follows:

```javascript
map $status $log_not_enable_for_200_status {
        ~^200  0;
        default 1;
    }

server {
    # Other directives here...

    access_log /var/log/nginx/nginx-access.log combined if=$log_not_enable_for_200_status;
}
```

Suppose you don't want to log an internal IP address request as follows:

```javascript
map $remote_addr $log_not_enable_for_internal_ip {
    "192.168.0.168" 0;
    "192.168.0.169" 0;
    "192.168.0.170" 0;
    default 1;
}

server {
    # Other directives here...

    access_log /var/log/nginx/nginx-access.log combined if=$log_not_enable_for_internal_ip;
}
```

## Logging to Syslog?

If you already have unified server logs, or if a regular Syslog framework evaluates your logs, you can redirect your Nginx ```access_log``` or ```error_log``` using the Syslog utility.

The Syslog utility is a machine message logging standard that allows several devices to send log messages to a single Syslog server.

You can set the Syslog location in the Nginx logs configuration using the `server =`. It may be a domain name, an IP address, or a UNIX-domain socket path.

```js
error_log  syslog:server=unix:/var/log/nginx.sock debug;
access_log syslog:server=[2001:db8::1]:1234,facility=local7,tag=nginx,severity=info;
```

You can [get more information about the Nginx Syslog here](https://nginx.org/en/docs/syslog.html)

## Conclusion
In this article, you have learned about various types of Nginx logs, what these logs contain, how to format the logs as needed, and how to redirect Nginx logs to a unified server log using the Syslog utility.