---
title: "Business Emails Marked as Spam? Here's What to Do"
date: "2022-10-14"
coverImage: improve-email-delivery.png
tags:
  - "Spam"
  - "Email Delivery"
description: "Are you worried about your business emails landing in spam? Read this article to learn how to improve email deliverability by understanding BIMI, SPF, DKIM, and DMARC."
author: "Deepak Gupta"
---

Are you a business owner or email marketer constantly worried about business and transactional emails being delivered to users' spam folders or attackers launching man-in-middle attacks against your emails?

Well, worry no more. This article explains everything about how to land your business and marketing emails to users' inboxes rather than spam folders and fight against common attacks carried out, such as impersonation and man-in-the-middle attacks.

The first and foremost step is to authenticate your domain and email, there are several methods and email standards that you can utilize. This article provides a deep understanding of such email standards like BIMI, SPF, DKIM, and DMARC to ensure that you send and receive only legitimate emails.

## BIMI (Brand Indicators for Message Identification)

BIMI stands for *Brand Indicators for Message Identification*. It is an open specification for sending authenticated messages from your domain, and it builds trust with your customers by authenticating your email marketing and other communications.

It is an image, logo, or message that is used to identify a brand. There are two types of BIMI:

1. Static BIMI
2. Dynamic BIMI

The static BIMI is an image that has been created for a specific purpose, which does not change at all. The dynamic BIMI, on the other hand, changes depending on certain factors such as time, location, etc.

An example of a static BIMI is the Starbucks logo, and a dynamic BIMI is the Berlin Brand Identity Map.

BIMI are widely supported by mailboxes such as Yahoo, Gmail, AOL, and FastMail. BIMI provides a method that is used to determine if a domain name has been registered by a brand owner or not. A brand owner registers domain names with a registrar, such as GoDaddy or Network Solutions.

When registering a new domain, the registrant must provide contact information, including email address, logo image, phone number, physical address, and sometimes even fax number. Registrants may use the same email address for multiple domains.

BIMI works hand in hand with DMARC, DKIM, and SPF to help you to deliver your emails to the inbox.

### How Does BIMI Work?

When a domain name is newly registered, the registrant receives an email confirmation containing a link to verify ownership. Once verified, the registrant receives a unique identifier called a BIMI record. The BIMI record contains the following information:

* Domain Name
* Registrar
* Registration Date
* Expiration Date
* Logo Image
* Contact Information

### How to Set Up BIMI?

To setup BIMI, follow these steps:

1. Create a new TXT record in your DNS settings.
2. Add the following data to the TXT record:

    * The IP address of the email server that accepts emails sent to the protected domain.
    * The name of the SMTP server that sends emails to the protected domain. For example, if you're running Microsoft Exchange Server 2007, then the value would be smtp.yourdomainname.com.
    * The name of the domain that owns the protected domain.
    * The name of the owner of the protected domain.
    * The date and time that the BIMI record expires.
    * The reason why the BIMI record has been created.
    * The URL of the BIMI record itself.
    * The name of the person who should be notified if there is any problem with the BIMI record.

Example BIMI Record:

| Field | Value | Description |
| ---- | ---- | ---- |
| Record Type | TXT | 
| Host | default._bimi.example.com | Replace `example.com` with your root domain |
| Value | v=BIMI1;l=https://images.example.com/brand/bimilogo.svg;a=https://images.example.com/brand/certificate.pem | Replace URLs here with your specific URLs |
| TTL | 3600 seconds | Set this time as per your convenience and requirements | 

**Note:** When setting up BIMI records, ensure that the values match exactly those specified above. Otherwise, the BIMI record won't function properly.

### What is a BIMI Record?

A BIMI record is simply a TXT record that contains additional information about a specific domain name.

### Benefits of BIMI
There are many reasons why you should consider implementing BIMI into your email systems. Some of the main benefits include:

* Identifying spoofed messages
* Detecting phishing attempts
* Preventing spam
* Reducing false positives
* Improving deliverability
* Improving security
* Ensuring compliance with regulations
* Providing additional context to messages
* Increasing customer satisfaction
And many others...

## SPF (Sender Policy Framework)
SPF is a protocol created to prevent spammers from sending emails with a forged header; it is used to verify the sender of an email so that the receiver will know that the email was sent by the entity that claims to have sent it.

### How Does SPF Work?
SPF verifies the sender by checking that the IP address of the sender matches what they claim it should be. The SPF protocol was created by the Internet Engineering Task Force (IETF) in 1997 and has been updated over time as new threats have emerged.

In 2003, the SPF protocol was updated and included a number of changes. The first and most important change was that all email servers should be using DNS to find out who is sending emails for a given domain. Prior to 2003, email servers would check IP addresses to verify that an email came from the real sender. Because there are multiple ways people can spoof their IP addresses, this led to emails from fake accounts being sent. This update also adjusted the way SPF works to better handle spam and prevent spoofing.

Microsoft also updated its SPF policy by requiring a DKIM (DomainKeys Identified Mail) record from senders when sending emails. Receiving an email from a sender that does not have this record results in emails being rejected without any warning. As a result, all SPF records require DKIM to work properly.

## DKIM (DomainKeys Identified Mail)
DKIM was developed by RSA Security Inc., and is used to verify email messages sent between two parties. DKIM is designed to protect against spoofed emails. Spoofed emails are those that appear to come from someone else but actually originate from the sender. They may contain malware.

### How Does DKIM work?
DKIM works by signing outgoing email messages with a public key. When a message is signed, it contains a signature along with the original message. A recipient verifies the signature by decrypting the message using the private key associated with the sending party's public key.

### What is a DKIM Record?
A DKIM record consists of three parts: the header, body, and footer. 

The header includes the following fields:

* Sender ID - identifies the sender of the message
* Domain Name - identifies the domain name of the sender
* Selector - specifies the selector value for the message
* Header Key Identifier - identifies the algorithm used to generate the hash
* Message Digest Algorithm - identifies the hashing function used to create the digest
* Signature Type - identifies whether the signature is text or binary
* Signing Time - identifies the time the signature was created
* Canonicalized From - identifies the address of the originating SMTP server
* DKIM Authentication Tag - identifies the authentication tag added to the message

The body of the DKIM record includes the actual data being signed. 

The footer includes the following fields:

* Content Encoding - identifies the encoding method used to encode the message
* MIME Boundary - identifies the boundary separating the header and body of the message
* Content Type - identifies the media type of the message
* Date - identifies the date and time the message was signed
* To Address - identifies the recipients of the message

### Benefits of DKIM

* Helps prevent spam and phishing attacks by verifying the authenticity of incoming messages.
* Prevents attackers from forging messages and impersonating legitimate senders.
* Protects against man-in-the-middle attacks, which occur when a third party intercepts communications between two parties.
* Helps ensure that all mail coming into your organization is legitimate. By signing outgoing messages, you can prove that the message came from whom it claims to come from.
* Allows specifying additional recipients for whom you want to provide authentication details. For example, if you use DKIM to sign all outgoing messages but only want to authenticate certain messages to some specific recipients, you can do so.

### How is DKIM related to SPF, DMARC, or Other Standards?

SPF and DMARC are two separate technologies that work together to validate the identity of senders. Both technologies rely on the concept of reputation. Reputation is defined as the likelihood that a given entity is trustworthy.

For example, if you have a company named ABC Company, and you send an email from a generic address to someone else, there is no way to know whether that person received your email. However, if you send an email from the @abccompany.com address, the recipients know that they are dealing with a known entity.

In order to determine whether a message should be accepted or rejected, SPF and DMARC compare the reputation of the sender against a list of valid identities. If the sender's IP address matches any of those listed in the SPF record, the message is accepted. Otherwise, the message is rejected.

The DKIM and DMARC are two email authentication tools that help to combat spam. DKIM verifies a message's sender by using a digital signature to protect the message, while DMARC helps identify fraudulent messages.

The SPF is a type of email protection used to verify an email sender's legitimacy. It records which hosts are authorized to send email from your domain, which helps prevent spoofing.

In a nutshell, SPF and DKIM help validate that an email message comes from who it claims to come from. DMARC is layered on top of SPF and DKIM and uses them to provide a set of instructions to receiving email servers on what to do if they receive unauthenticated mail.

## DMARC (Domain-based Message Authentication, Reporting & Conformance)

DMARC was developed by Google and is based on the concept of DKIM. DMARC enables you to specify what actions to take if a message fails to meet certain criteria.

### How Does DMARC Work?
When a message arrives at the email provider, it checks whether it has been authenticated using a cryptographic hash algorithm. It then compares the hash value against a list of hashes stored in the database. If the hash matches any of the records in the database, the message is declared authentic.

### Benefits of DMARC?
DMARC helps prevent spam by ensuring that only legitimate senders can use your domains' SMTP servers. It also keeps track of who sends emails from your domain.

### What is a DMARC Record?
A DMARC record consists of two parts: the header and the policy. The header contains the authentication status of the message, while the policy describes how the recipient should handle the message. For example, if a message is not authenticated, the policy might say something like: "If the message is not authenticated, do nothing."

### What Does DMARC Domain Alignment Mean?
Domain alignment means that all subdomains of your domain must agree on their policies before the sending server will accept them. For example, if you want to allow DKIM signing for all subdomains of `mydomain.com` but not `mysubdomain.mydomain.com`, you would set up a separate SPF record for each subdomain.

## How These Records Improve Your Email Delivery

In this guide, you have learned about some of the most important factors that affect email deliverability, including IP reputation, BIMI, DMARC, SPF records, DKIM records, and domain reputation. While BIMI, SPF, DKIM and DMARC email standard work independently but when configured properly their benefits are multiplied in verifying different parts of email delivery including sender legitimacy, verification, and identity authentication.

In conclusion, email delivery and authentication are critical for successfully executing your email campaign and protecting against malicious attacks. By following this article, you can improve your email deliverability rate by implementing explained factors into your business strategy.
