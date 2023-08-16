> **Note**
> This project is not affiliated with OpenAI in any way. It is just a fun, open source side project that uses their API.

# ChatGPT Twitter Bot <!-- omit in toc -->

> Twitter bot powered by OpenAI's ChatGPT API.

[![Build Status](https://github.com/transitive-bullshit/chatgpt-twitter-bot/actions/workflows/test.yml/badge.svg)](https://github.com/transitive-bullshit/chatgpt-twitter-bot/actions/workflows/test.yml)  [![Prettier Code Formatting](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)

- [Intro](#intro)
- [Usage](#usage)
- [Note](#note)
- [Related](#related)

## Intro

[@ChatGPTBot](https://twitter.com/ChatGPTBot) is a Twitter bot that you can @mention with a prompt, and it will respond with a twitter thread containing the [ChatGPT](https://github.com/transitive-bullshit/chatgpt-api) response.

It uses the [chatgpt](https://github.com/transitive-bullshit/chatgpt-api) Node.js package under the hood.

## Usage

Just create a tweet @mentioning `@ChatGPTBot` containing your prompt:

```
@ChatGPTBot What is 1 + 1?
```

Then wait until the bot responds, which can be anywhere from a few seconds to a few minutes (hopefully not longer), depending on how much usage the bot receives.

The ChatGPT response will be split up into multiple tweet-sized replies.

## Note

**Don't be surprised if it takes awhile for the bot to respond to you**. This is due to:

1. Twitter heavily rate-limits bots.
2. This bot is just running on my local dev machine, so please be kind 🙏

> **Warning**
> Any improper use of ChatGPTBot will result in an immediate block on Twitter. Improper use covers everything [OpenAI](https://openai.com/blog/chatgpt/)'s API would consider disallowed / harmful / banned.

## Related

- Powered by the [Node.js ChatGPT API](https://github.com/transitive-bullshit/chatgpt-api)
