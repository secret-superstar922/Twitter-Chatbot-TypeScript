<p align="center">
  <a href="https://twitter.com/ChatGPTBot">
    <img alt="Example Twitter thread using @ChatGPTBot" src="/media/demo.jpg">
  </a>
</p>

# ChatGPT Twitter Bot <!-- omit in toc -->

> Twitter bot powered by OpenAI's ChatGPT.

[![Build Status](https://github.com/transitive-bullshit/chatgpt-twitter-bot/actions/workflows/test.yml/badge.svg)](https://github.com/transitive-bullshit/chatgpt-twitter-bot/actions/workflows/test.yml) [![MIT License](https://img.shields.io/badge/license-MIT-blue)](https://github.com/transitive-bullshit/chatgpt-twitter-bot/blob/main/license) [![Prettier Code Formatting](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)

- [Intro](#intro)
- [Usage](#usage)
- [Note](#note)
- [Related](#related)
- [License](#license)

## Intro

[@ChatGPTBot](https://twitter.com/ChatGPTBot) is a Twitter bot where you can @mention it with a prompt and it will respond with a twitter thread containing the [ChatGPT](https://github.com/transitive-bullshit/chatgpt-api) response.

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

- Powered by the [Node.js ChatGPT API](https://github.com/transitive-bullshit/chatgpt-api) (unofficial)
- Inspired by this [Go module](https://github.com/danielgross/whatsapp-gpt) by [Daniel Gross](https://github.com/danielgross)
- [Telegram bot](https://github.com/m1guelpf/chatgpt-telegram)

## License

MIT © [Travis Fischer](https://transitivebullsh.it)

If you found this project interesting, please consider [sponsoring me](https://github.com/sponsors/transitive-bullshit) or <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
